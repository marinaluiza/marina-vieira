$(document).ready(function()
		{
			// When "ENCURTAR" button is clicked, this will short the url typed or pasted by the user
			$("#encurtar").click(function()
			{	
				$.getJSON( "http://is.gd/create.php?callback=?", {
				    url: $("#longurl").val(),
				    format: "json"
					}).done(function(data) {
				    	$("#longurl").val(data.shorturl);
				    	$("#encurtar").css( "display", "none");
				    	$("#apagar").css( "display", "inline-block");
				    	$("#copiar").css( "display", "inline-block");
				    	$("#input-content").css( "justifyContent", "space-between");
					});

			});


			// When clean button is clicked (X), this will erase the shortened url generated
			$("#apagar").click(function() {
				$("#longurl").val("");
				$("#encurtar").css( "display", "inline-block");
				$("#apagar").css( "display", "none");
				$("#copiar").css( "display", "none");
				$("#input-content").css( "justifyContent", "flex-start");
			});
});