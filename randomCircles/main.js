let rCircles = d3.rCircles.rCirclesModule();
rCircles.width(600)
		.height(600)
		.radius(5);
d3.select("#randomCircles-container").call(rCircles);