//===================================The svg with paths is externally created using Command-line cartography =================================
//===================================Map Zooming, Map Coloring and other Map interactions =================================
import _ from 'lodash';
import * as d3 from 'd3'; 

let mapManipulation = function module(){

    let svg,
    paths,
    g,
    labels,
    svg_width,
    svg_height,
    zoomScaleExtent = [1.0, 8],
    zoomAction,
    dispatcher = d3.dispatch("mapClicked", "mapMouseover", "mapMouseout", "mapZoom"),
    layers,
    curr_transform = d3.zoomIdentity,
    map_marker_radius;

    function map(_selection) {
        _selection.each(function () { 
            svg = _selection.selectAll("svg");
            svg_width = svg.attr("width");
            svg_height = svg.attr("height");
            paths = svg.selectAll("path");
            g = svg.selectAll("g");
            zoomAction = d3.zoom()
                            .scaleExtent(zoomScaleExtent)
                            .on("zoom", zoomMap);
            svg.call(zoomAction);
            paths.on("click", function() {
                        dispatcher.call("mapClicked", this);
                    })
                    .on("mouseover", function(){
                        dispatcher.call("mapMouseover", this);
                    })
                    .on("mouseout", function(){
                        dispatcher.call("mapMouseout", this);
                    })
        });
    }
    function zoomMap() {
        let newTransform = d3.event.transform;
        if(newTransform.k <= 1.1 && curr_transform.k !== newTransform.k) {
        resetMapZoom(newTransform);
        } 
        proceedZoomMap(d3.event.transform);
        curr_transform = newTransform;
        //dispatch zoom event 
        dispatcher.call("mapZoom", this);
    }
    function proceedZoomMap (_transform) {
        svg.selectAll(".labels").style("font-size", 12 / _transform.k + "px");
        svg.selectAll(".marker").attr("r", map_marker_radius / _transform.k + "px");
        //g.style("stroke-width", 1 / _transform.k + "px");
        g.attr("transform", _transform );
    }
    function resetMapZoom (_transform) {
        let reset_translate = _transform;
        reset_translate.x = Math.min((svg_height/svg_width) * (reset_translate.k - 1), Math.max(svg_width * (1 - reset_translate.k), reset_translate.x));
        reset_translate.y = Math.min(0, Math.max(svg_height * (1 - reset_translate.k), reset_translate.y));
        d3.event.transform = reset_translate;
    }
    map.addLabels = function () {
        //let vars;
        let layerLabels = function() {
            layers.forEach(element => {
                let g_class = element+"-layer-labels";
                let group = svg.append("g").attr("class", g_class);
                svg.selectAll("."+element+"-colored-region").each(function() {
                let obj = d3.select(this);
                let label = obj.attr("id");
                let centroid = centerAdjustment(getBoundingBoxCenter(d3.select(this)));
                group.append("text")
                        .attr("x", centroid[0])
                        .attr("y", centroid[1])
                        .attr("class", "labels")
                        .attr("id", label+"-label")
                        .text(label);
                })
            });
        };
        function getBoundingBoxCenter (_selection) {
            let element = _selection.node(),
            bbox = element.getBBox();
            return [bbox.x + bbox.width/2, bbox.y + bbox.height/2];
        };
        function centerAdjustment (_centroid) {
            let x = _centroid[0],
            y = _centroid[1];
            //
            return [x - 10, y];
        };

        return layerLabels;
    }
    map.mapColoring = function() {
        let map_coloring_data,
        id_property,
        color_property,
        color_scale,
        color_domain,
        color_range,
        color,
        coloring_layer,
        legend_container,
        legend_format,
        zero_val_color = "#fff",
        no_info_color = "#999";
        let colorMap = function() {
            color = color_scale;
            color.domain(color_domain);
            color.range(color_range);
            layers.forEach( element => {
                new Promise((resolve, reject) => {
                    svg.selectAll("."+element+"-colored-region").style("fill", function(d){
                            return d3.select(this).style("fill");
                        })
                        .transition()
                        .delay(250)
                        .style("fill", function(d){
                            let region_id = d3.select(this).attr("id");
                            return colorRegion(d);
                        })
                        .on("end", resolve);
                })
                .then(() => {
                    //update the label colors based on region color:
                    svg.select("."+element+"-layer-labels").selectAll(".labels").classed("light-color-label", function(d){
                        let text = d3.select(this).text();
                        let region_color = svg.select("."+element+"-unflat-layer").select("[id="+text+"]").style("fill");
                        return !isLightBg(region_color);
                    });
                });

            });
            if(legend_container !== undefined) {
                if(d3.select("."+legend_container).select(".map-legend").empty()){
                    createMapLegend();
                }
                else {
                    updateMapLegend();
                }
            }
        };
        function colorRegion(_data) {
            let color_value = Number(_data[color_property]);
            if(color_value > 0) {
            return color(color_value);
            }
            else if(color_value == 0) {
            return zero_val_color;
            }
            return no_info_color; 
        }
        function isLightBg(_color) {
            let region_color = _color,
            regExp = /\(([^)]+)\)/;
            if(regExp.exec(region_color)){
                let matches = regExp.exec(region_color),
                rgba = matches[1].split(","),
                luma = 0.2126*rgba[0] + 0.7152*rgba[1] + 0.0722*rgba[2];
                if(luma > 200) return true;
            }
            else {
                let c = region_color.substring(1),
                rgb = parseInt(c, 16),
                r = (rgb >> 16) & 0xff,
                g = (rgb >> 8) & 0xff,
                b = (rgb >> 0) & 0xff,
                luma = 0.2126*r + 0.7152*g + 0.0722*b;
                if(luma > 200) return true;
            }
            return false;
        };
        function createMapLegend() {
            let legend_area = d3.select("."+legend_container).append("div").attr("class", "map-legend"),
            legend_colors = color_range.concat([zero_val_color, no_info_color]),
            legend_list = legend_area.selectAll("div").data(legend_colors).enter()
                                        .append("div")
                                        .attr("data-color", function(d){ return d; } )
                                        .attr("class", "legend-item");
            legend_list.append("span").attr("class", "legend-icon")
                                        .style("background-color", function(d){ return d; });
            legend_list.append("div").attr("class", "legend-text").text(function(d,i){return getLegendText(d, i);});
        }
        function updateMapLegend() {
            d3.selectAll(".legend-text").each(function(d, i){ 
                d3.select(this).text(getLegendText(d, i));
            })
        }
        function getLegendText(d, i) {
            if(d === zero_val_color) return "No high risk physicians in the area";
            if(d === no_info_color) return "No billing"; 
            let lower_bound = color_domain[0] + (color_domain[1] - color_domain[0])/color_range.length * i;
            let upper_bound = color_domain[0] + (color_domain[1] - color_domain[0])/color_range.length * (i+1);
            return formatValue(lower_bound) + " - " + formatValue(upper_bound);
        }
        function formatValue(value) {
            let val = d3.format(legend_format)(value);
            if(legend_format.indexOf("$") >= 0) {
                switch (val[val.length -1]) {
                    case "k": return val.slice(0, -1) + " K";
                    case "G": return val.slice(0, -1) + " B";
                    case "M": return val.slice(0, -1) + " M";
                }
            }
            return val;
        }
        colorMap.mapColoringData = function(_data) {
            if(!arguments.length) return map_coloring_data;
            map_coloring_data = _data;
            return this;
        }
        colorMap.idProperty = function(_str) {
            if(!arguments.length) return id_property;
            id_property = _str;
            return this;
        }
        colorMap.colorProperty = function(_str) {
            if(!arguments.length) return color_property;
            color_property = _str;
            return this;
        }
        colorMap.colorScale = function(_str) {
            if(!arguments.length) return color_scale;
            color_scale = _str;
            return this;
        }
        colorMap.colorDomain = function(_arr) {
            if(!arguments.length) return color_domain;
            color_domain = _arr;
            return this;
        }
        colorMap.colorRange = function(_arr) {
            if(!arguments.length) return color_range;
            color_range = _arr;
            return this;
        }
        colorMap.coloringLayer = function(_str) {
            if(!arguments.length) return coloring_layer;
            coloring_layer = _str;
            return this;
        } 
        colorMap.legendContainer = function(_str) {
            if(!arguments.length) return legend_container;
            legend_container = _str;
            return this;
        }
        colorMap.legendFormatType = function(_str) {
            if(!arguments.length) return legend_format;
            legend_format = _str;
            return this;
        }
        return colorMap;
    }
    map.toggleLayer = function() {
        let show_layer;
        let layerDisplay = function() {
            d3.selectAll(".hide-layer").classed("hide-layer", false);
            layers.forEach(element => {
                if(element !== show_layer) {
                    d3.selectAll("."+element+"-unflat-layer").classed("hide-layer", true);
                    d3.selectAll("."+element+"-skeleton").classed("hide-layer", true);
                    d3.selectAll("."+element+"-layer-labels").classed("hide-layer", true);
                    d3.selectAll("."+element+"-duplicate-path").classed("hide-layer", true);
                }
            });
        }
        layerDisplay.showLayer = function(_str) {
            if(!arguments.length) return show_layer;
            show_layer = _str;
            return this;
        } 
        return layerDisplay;
    }
    map.createMarker = function() {
        let map_proj,
        latitude,
        longitude,
        radius = 4;
        let addMarker = function() {
            map_marker_radius = radius;
            addMarker.removeMarker();
            let projection = map_proj.translate([svg_width/2, svg_height/2]).scale([750]);
            svg.append("g").attr("class", "marker-group")
                .append("circle")
                .attr("cx", projection([longitude, latitude])[0])
                .attr("cy", projection([longitude, latitude])[1])
                .attr("r", radius)
                .attr("class", "marker");
        }
        addMarker.removeMarker = function () {
            svg.selectAll(".marker-group").remove();
        }
        addMarker.mapProjection = function(_) {
            if(!arguments.length) return map_proj;
            map_proj = _;
            return this;
        } 
        addMarker.latitude = function(_num) {
            if(!arguments.length) return latitude;
            latitude = _num;
            return this;
        } 
        addMarker.longitude = function(_num) {
            if(!arguments.length) return longitude;
            longitude = _num;
            return this;
        } 
        addMarker.radius = function(_num) {
            if(!arguments.length) return radius;
            radius = _num;
            return this;
        } 
        return addMarker;
    }
    map.on = function() {
        var value = dispatcher.on.apply(dispatcher,arguments);
        return value === dispatcher ? this: value;
    };
    map.layersList = function(_arr) {
        if(!arguments.length) return layers;
        layers = _arr;
        return this;
    }
    return map;
};
export default mapManipulation;

