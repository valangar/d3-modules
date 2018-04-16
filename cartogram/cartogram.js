//===================================Cartogram Map Module=================================
//import _ from 'lodash';
//import * as d3 from 'd3'; 
//import tooltip from '../lib/tooltip';
//import colorcodes from '../lib/davg-color-codes';

let cartogramModule = function module(){
    let linearScale = d3.scaleLinear();
    let svg,
        width = 500,
        height = 500,
        node_padding = 1,
        grid_array = [
            ["_00", "_01", "_02", "_03", "_04", "_05", "_06", "_07", "_08", "_09", "ME"],
            ["_10", "_11", "_12", "_13", "_14", "WI", "_15", "_16", "_17", "VT", "NH"],
            ["WA", "ID", "MT", "ND", "MN", "IL", "MI", "_18", "NY", "MA", "_19"],
            ["OR", "NV", "WY", "SD", "IA", "IN", "OH", "PA", "NJ", "CT", "RI"],
            ["CA", "UT", "CO", "NE", "MO", "KY", "WV", "VA", "MD", "DC", "DE"],
            ["_20", "AZ", "NM", "KS", "AR", "TN", "NC", "SC", "_21", "_22", "_23"],
            ["_24", "_25", "_26", "OK", "LA", "MS", "AL", "GA", "_27", "_28", "_29"],
            ["GU", "_30", "_31", "TX", "_32", "_33", "_34", "FL", "_35", "_36", "_37"],
            ["HI", "AK", "_38", "_39", "_40", "_41", "_42", "_43", "_44", "VI", "PR"]
        ],
        size_property,
        sizeScale = linearScale,
        color_property,
        colorScale,
        /* color_range,
        color_domain, */
        id_property,
        label_property,
        cartogram_shape = "rect",
        dispatcher = d3.dispatch("clickCartogramNode", "mouseoverCartogramNode", "mouseoutCartogramNode");
    function cartogram(_selection) {
        _selection.each(function (_data) { 
            //Calculating all variables for the cartogram:
            let max_radius = Math.floor(Math.min(width/grid_array[0].length, height/grid_array.length) - node_padding),
                avg_radius = 0,
                nodes = [],
                size_max = 0,
                size_median = 0,
                size_avg = 0,
                size_min = 0;

            if(typeof size_property === "undefined" || size_property === "size") {
                size_property = "size";
                let max_radius_sq = max_radius * max_radius;
                _data.forEach(function(d){
                    d.size = max_radius_sq;
                });
            }
            if(typeof color_property === "undefined" || color_property === "color") {
                color_property = "color";
                _data.forEach(function(d){
                    d.color = 1;
                });
                colorScale = function() {
                    return color_range[1];
                }
            }
            /* else {
                colorScale.domain(color_domain).range(color_range);
            } */

            size_max = d3.max(_data, function(d){ return Math.sqrt(d[size_property]);});
            size_median = d3.median(_data, function(d){ return Math.sqrt(d[size_property]);});
            size_avg = d3.sum(_data, function(d){ return Math.sqrt(d[size_property]);}) / _data.length;

            if(size_property !== "size") {
                let row_size_max = [],
                    col_size_max = [];
                for(var i = 0; i < grid_array[0].length; i++) {
                    let max = 0;
                    for(var j = 0; j < grid_array.length; j++ ) {
                        let cell = grid_array[j][i];
                        if(cell.substring(0, 1) !== "_") {
                            let matched_data = _data.find(function(d){ return d[id_property] === cell;});
                            if(typeof matched_data !== undefined && Math.sqrt(matched_data[size_property]) > max) {
                                max = Math.sqrt(matched_data[size_property]);
                            }
                        }
                    }
                    if(max === 0) {
                        max = size_avg;
                    }
                    row_size_max.push(max);
                }
                grid_array.forEach(function(d){
                    let max = 0;
                    for(var i = 0; i < d.length; i++) {
                        var col_val = d[i];
                        if(col_val.substring(0, 1) !== "_" ) {
                            let matched_data = _data.find(function(d){ return d[id_property] === col_val;});
                            if(typeof matched_data !== undefined && Math.sqrt(matched_data[size_property]) > max) {
                                max = Math.sqrt(matched_data[size_property]);
                            }
                        } 
                    }
                    if(max === 0) {
                        max = size_avg;
                    }
                    col_size_max.push(max);
                });

                let max_row_size_max = d3.max(row_size_max),
                    max_col_size_max = d3.max(col_size_max),
                    row_scale = linearScale.domain([0, max_row_size_max]).range([max_row_size_max/4, max_row_size_max]),
                    col_scale = linearScale.domain([0, max_col_size_max]).range([max_col_size_max/4, max_col_size_max]),
                    max_row_radius = (max_row_size_max / d3.sum(row_size_max, function(d){ return row_scale(d)})) * width,
                    max_col_radius = (max_row_size_max / d3.sum(col_size_max, function(d){ return row_scale(d)})) * height,
                    max_radius = Math.floor(Math.min(max_col_radius, max_row_radius) - node_padding);
            }
            sizeScale.domain([0, size_max]).range([max_radius/4, max_radius]);

            avg_radius = d3.sum(_data, function(d){ return sizeScale(Math.sqrt(d[size_property])); }) / _data.length;
            //avg_radius = 4;

            for(var i = 0; i < grid_array[0].length; i++) {
                for(var j = grid_array.length - 1; j >= 0; j--) {
                    let obj = {};
                    obj.grid_name = grid_array[j][i];
                    obj.display_data = {color: {name: undefined, value: undefined}, size: {name: undefined, value: undefined}};
                    if(obj.grid_name.substring(0,1) === "_") {
                        obj.r = avg_radius;
                        obj.color_value = 0;
                    }
                    else {
                        let matched_data = _data.find(function(d){ return d[id_property] === grid_array[j][i]; });
                        if(typeof matched_data !== "undefined") {
                            let size_value = matched_data[size_property];
                            obj.r = sizeScale(Math.sqrt(size_value));
                            obj.color_value = matched_data[color_property];
                            obj.display_data.color.name = color_property;
                            obj.display_data.size.name = size_property;
                            obj.display_data.color.value = obj.color_value;
                            obj.display_data.size.value = size_value;
                        }
                        else {
                            obj.r = avg_radius;
                            obj.color_value = 0;
                        }
                    }
                    if(i === 0) {
                        obj.x = 0;
                    }
                    else {
                        let left = nodes.find(function(d){ return d["grid_name"] === grid_array[j][i-1]});
                        obj.x = left.x + left.r + node_padding;
                    }
                    if(j === grid_array.length - 1) {
                        obj.y = height - obj.r;
                    }
                    else {
                        let bottom = nodes.find(function(d){ return d["grid_name"] === grid_array[j+1][i]});
                        obj.y = bottom.y - obj.r - node_padding;
                    }
                    obj._data = _data.find(function(d){ return d[id_property] === grid_array[j][i]});
                    nodes.push(obj);
                }
            }
            for(var i = grid_array.length - 2; i >= 0; i--) {
                for(let j = 0; j < grid_array[0].length; j++) {
                    if(grid_array[i][j].substring(0,1) !== "_") {
                        let up = nodes.find(function(d){return d["grid_name"] === grid_array[i][j]; });
                        for(var j_low = 0; j_low < grid_array[0].length; j_low++){
                            for(var i_low = i+1; i_low < grid_array.length; i_low++) {
                                if(grid_array[i_low][j_low].substring(0,1) !== "_"){
                                    let bottom = nodes.find(function(d){ return d["grid_name"] === grid_array[i_low][j_low]; });
                                    if((up.y + up.r) > bottom.y && ((up.x + up.r) > bottom.x && up.x < (bottom.x + bottom.r))) {
                                        up.y = bottom.y - up.r - node_padding;
                                    }
                                }
                            }
                        }
                    }
                }
            }

            //Creating the cartogram:
            if(!svg){
                svg = d3.select(this).append("svg")
                        .attr("width", width)
                        .attr("height", height);
            }
            else {
                svg = d3.select(this).select("svg");
            }
            let nodes_g = svg.selectAll("g").data(nodes).enter().append("g");

            nodes_g.transition().duration(500)
                    .attr("id", function(d){ return "cartogram_"+d.grid_name; })
                    .attr("transform", function(d){ return "translate(" + d.x + "," + d.y + ")"; });

            nodes_g.selectAll("*").remove();

            nodes_g.append(cartogram_shape)
                    .style("fill", function(d){
                        if(d.grid_name.substring(0,1) !== "_" && typeof d._data !== "undefined") {
                            return colorScale(d.color_value);
                        }
                        else if(d.grid_name.substring(0,1) === "_") {
                            return "none";
                        }
                    })
                    .attr("class", function(d){
                        if(d.grid_name.substring(0,1) !== "_") {
                            return "cartogram-node";
                        }
                    })
                    .attr("stroke-dasharray", function(d){
                        if(typeof d._data === "undefined") {
                            return "5,5";
                        }
                    })
                    .classed("missing", function(d){
                        return typeof d._data === "undefined" && d.grid_name.substring(01,) !== "_";
                    })
                    .classed("darker", function(d){
                        return isDark(colorScale(d.color_value));
                    })
                    .on("click", function(d) {
                        dispatcher.call("clickCartogramNode", this, d.grid_name);
                    })
                    .on("mouseover", function(d) {
                        dispatcher.call("mouseoverCartogramNode", d);
                    })
                    .on("mouseout", function(d) {
                        dispatcher.call("mouseoutCartogramNode", d);
                    });
            
            if(cartogram_shape === "circle") {
                nodes_g.selectAll(cartogram_shape)
                        .attr("cx", function(d) { return d.r / 2; })
                        .attr("cy", function(d) { return d.r / 2; })
                        .attr("r", function(d) { return d.r / 2; });
            }
            else {
                nodes_g.selectAll(cartogram_shape)
                        .attr("width", function(d){ return d.r; })
                        .attr("height", function(d){ return d.r; });
            }
            /* if(typeof tooltip !== "undefined") {
                nodes_g.selectAll(cartogram_shape).call(tooltip)
            } */
            
            //Add cartogram node text:
            let text = nodes_g.append("text")
                                .attr("class" , "cartogram-text")
                                .classed("missing", function(d){ return typeof d._data === "undefined"; })
                                .attr("class", function(d){ if(!isDark(colorScale(d.color_value))) return "light-text"; })
                                .style("font-size", function(d){ return d.r * 0.3 + "px"; });

            text.each(function(d){
                if(d.grid_name.substring(0, 1) !== "_") {
                    if(typeof d._data !== "undefined" && typeof label_property !== "undefined") {
                        d3.select(this).append("tspan")
                            .attr("x", d.r / 3)
                            .attr("y", d.r * 0.45)
                            .text(d.grid_name);
                        d3.select(this).append("tspan")
                            .attr("x", d.r / 3)
                            .attr("y", d.r * 0.8)
                            .text("#"+d._data[label_property]);
                    }
                    else {
                        d3.select(this).append("tspan")
                            .attr("x", d.r / 3)
                            .attr("y", d.r * 0.65)
                            .text(d.grid_name);
                    }
                }
            });
        });
    }
    function isDark(_color) {
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
    }
    //getter/setter functions:
    cartogram.width = function (_num) {
        if(!arguments.length) return width;
        width = _num;
        return this;
    }
    cartogram.height = function (_num) {
        if(!arguments.length) return width;
        height = _num;
        return this;
    }
    cartogram.nodePadding = function (_num) {
        if(!arguments.length) return node_padding;
        node_padding = _num;
        return this;
    }
    cartogram.gridArray = function (_arr) {
        if(!arguments.length) return node_padding;
        node_padding = _arr;
        return this;
    }
    cartogram.sizeProperty = function (_str) {
        if(!arguments.length) return size_property;
        size_property = _str;
        return this;
    }
    cartogram.sizeScaleFn = function (_) {
        if(!arguments.length) return sizeScale;
        sizeScale = _;
        return this;
    }
    cartogram.colorProperty = function (_str) {
        if(!arguments.length) return color_property;
        color_property = _str;
        return this;
    }
    cartogram.colorScaleFn = function (_) {
        if(!arguments.length) return colorScale;
        colorScale = _;
        return this;
    }
    cartogram.IDProperty = function (_str) {
        if(!arguments.length) return id_property;
        id_property = _str;
        return this;
    }
    cartogram.labelProperty = function (_str) {
        if(!arguments.length) return label_property;
        label_property = _str;
        return this;
    }
    cartogram.cartogramShape = function (_str) {
        if(!arguments.length) return cartogram_shape;
        cartogram_shape = _str;
        return this;
    }
    return cartogram;
};
//export default cartogramModule;