$(document).ready(function() {
	var arr = [];
	var quotes = $("#quotes:first");

	$.getJSON("https://raw.githubusercontent.com/deadcoder0904/a2k-quotes/master/js/quotes.json", function( data ) {  
    for (var i = 0; i < data.length; i++) {
			  console.log(data[i].quote + " -> " + data[i].author);
			  arr.push("<div class='pa4'>");
				arr.push("<blockquote class='athelas ml0 mt0 pl4 black-90 bl bw2 b--blue'>");
				arr.push("<p class='f5 f4-m f3-l lh-copy measure mt0'>");  
				arr.push(data[i].quote);
				arr.push("</p>");
				arr.push("<cite class='f6 ttu tracked fs-normal'>");
			  arr.push(data[i].author);
			  arr.push("</cite>");
			  arr.push("</blockquote>");
				arr.push("</div>");
		}
		quotes.append(arr.join(""));
	});
	console.log(quotes);
	console.log(arr);
});