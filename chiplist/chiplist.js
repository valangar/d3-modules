//===================================Chiplist Module=================================

let chiplistModule = function module(){
    let width = 200,
		height = 100,
		container;
    function chiplist(_selection) {
        _selection.each(function (_data) { 
            //data format accepted: [{chip_id: "unique_id", display_content: "./image_url"/"some_text", display_type: "image"/"text", info: "some info"}, {...}, ...]
			// if the display_content and/or display_type is left blank, a simple rectangle will be creted in it's place that can be styled the way the user prefers
			container = d3.select(this);
			let chips = container.selectAll(".chips")
									.data(_data)
									.enter()
									.append("div")
									.attr("width", width)
									.attr("height", height)	
									.attr("id", function(d, i){
										if(d.chip_id) return d.chip_id;
										return "chip-" + i;
									})
									.attr("class", "chips");
			chips.append("div")
					.attr("id",  function(d, i){
						if(d.chip_id) return "dp-" + d.chip_id;
						return "dp-" + i;
					})
					.attr("class", "chips-dp")
					.html(function(d){
						if(d.display_type === "text") return d.display_content;
						else if(d.display_type === "image") return "<img class = 'chips-dp-content' src = '" + d.display_content + "'/>";
						return "";
					})
			chips.append("div")
					.attr("id", function(d, i){
						if(d.chip_id) return "info-" + d.chip_id;
						return "info-" + i;
					})
					.attr("class", "chips-info")
					.text(function(d){
						if(d.info !== undefined) return d.info;
						return "";
					}); 
					
        });
    }
    
    //getter/setter functions:
    chiplist.chipWidth = function (_num) {
        if(!arguments.length) return width;
        width = _num;
        return this;
    }
    chiplist.chipHeight = function (_num) {
        if(!arguments.length) return width;
        height = _num;
        return this;
    }
    
    return chiplist;
};