let graph_container = d3.select("#graph-container"),
	graph_module = graphModule(),
	graph_data = {"nodes": nodes, "links": links };
	
graph_module.graphSpaceWidth(window.innerWidth)
			.graphSpaceHeight(window.innerHeight)
			.nodeColors(d3.scaleOrdinal(d3.schemeCategory20))
			.dataAttrNodeGrp("group")
			.dataAttrLinkWeight("value")
			.dataAttrNodeText("name")
			.dataAttrNodeSize("nodesize");
graph_container.datum(graph_data).call(graph_module);