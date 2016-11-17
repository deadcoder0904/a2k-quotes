$(document).ready(function() {
	var arr = [];
	var quotes = $("#quotes:first");

	$.getJSON("https://raw.githubusercontent.com/deadcoder0904/a2k-quotes/master/js/quotes.json", function( data ) {  
    for (var i = 0; i < data.length; i++) {
			  arr.push("<div class='pa4'>");
				arr.push("<blockquote class='athelas ml0 mt0 pl4 black-90 bl bw2 b--blue'>");
				arr.push("<p class='f5 f4-m f3-l lh-copy measure mt0'>" + data[i].quote + "</p>");
				arr.push("<cite class='f6 ttu tracked fs-normal'>" + data[i].author + "</cite>");
			  arr.push("</blockquote>");
				arr.push("</div>");
		}
		console.log(arr);
		quotes.append(arr.join(""));
	});

});