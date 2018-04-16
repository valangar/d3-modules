let cartogram_container = d3.select("#cartogram-container"),
    cartogram_module = cartogramModule(),
    color_scale = d3.scaleQuantize(),
    color_domain = [0, 1],
    color_range = ["#ffeee6", "#ffccb3", "#ff884d", "#ff661a", "#e64d00", "#b33c00", "#993300", "#662200"];

let min_limit = d3.min(cartogram_data, function(d) {return Number(d["region_value"])}),
    max_limit = d3.max(cartogram_data, function(d) {return Number(d["region_value"])});
color_domain = [min_limit, max_limit];

color_scale.domain(color_domain);
color_scale.range(color_range);
cartogram_module.width(600)
                .height(500)
                //.sizeProperty("region_value")
                //.sizeScaleFn()
                .colorProperty("region_value")
                .colorScaleFn(color_scale)
                .IDProperty("region_id")
                .labelProperty("region_rank");

cartogram_container.datum(cartogram_data).call(cartogram_module);