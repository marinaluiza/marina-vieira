// JSON to list TOP 5 url's
$(document).ready(function () {
	$.getJSON("urls.json", function(data) {
		data.sort(function(a, b) {
    		return parseFloat(b.hits) - parseFloat(a.hits);
		});
		
		var items = [];
		var hits = 0;

		$.each(data, function(index, value) {
			if (index < 5) {
				items.push("<div class='line'><div class='first-column'><a class='json-link' href='" 
		    	+ value.url + "'>" + value.shortUrl 
		    	+ "</a></div><div class='last-column'>" + value.hits + "</div></div>");
			}
			hits += value.hits;
	  	});

		$( "<div/>", {"class": "top5", html: items.join("")}).appendTo(".list");
		
		$("#number-hits").text(hits.toLocaleString());

	});


});