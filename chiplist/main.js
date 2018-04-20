let chiplist_container = d3.select("#chiplist-container"),
	chiplist_module = chiplistModule();
let chiplist_data = [
						{chip_id: "stadium", display_content: "./images/stadium.jpg", display_type: "image", info: "some info 1"},
						{chip_id: "tree-age", display_content: "./images/tree_age.jpg", display_type: "image", info: "some info 2"},
						{chip_id: "bofa-building", display_content: "./images/bofa_building.jpg", display_type: "image", info: "some info 3"},
						{chip_id: "devil", display_content: "./images/devil.jpg", display_type: "image", info: "some info 4"},
						{chip_id: "barrel", display_content: "./images/barrel.jpg", display_type: "image", info: "some info 5"},
					];
chiplist_container.datum(chiplist_data).call(chiplist_module);