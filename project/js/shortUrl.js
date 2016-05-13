$(document).ready(function()
{
	// When "ENCURTAR" button is clicked, this will short the url typed or pasted by the user
	$("#shorten-button").click(function()
	{	
		$.getJSON( "http://is.gd/create.php?callback=?", {
		    url: $("#long-url").val(),
		    format: "json"
			}).done(function(data) {
		    	$("#long-url").val(data.shorturl);
		    	$("#shorten-button").hide();
		    	$("#erase").show();
		    	$("#copy-button").show();
		    	$("#input-content").removeClass("flex-start-content").addClass("space-between-content");
			});

	});


	// When clean button is clicked (X), this will erase the shortened url generated
	$("#erase").click(function() {
		$("#long-url").val("");
		$("#shorten-button").show();
		$("#erase").hide();
		$("#copy-button").hide();
		$("#input-content").removeClass("space-between-content").addClass("flex-start-content");
	});
});