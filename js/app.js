$(document).ready(function() {
	var arr = [];
	var quotes = $("#quotes");

	$.getJSON("", function( data ) {  
    console.log( "JSON Data: " + data);
    $.each( data, function( key, val ) {
        console.log(key + "value:: " + val );
			  arr.push("<div class='pa4'>");
				arr.push("<blockquote class='athelas ml0 mt0 pl4 black-90 bl bw2 b--blue'>");
				arr.push("<p class='f5 f4-m f3-l lh-copy measure mt0'>");  
				arr.push(quote);
				arr.push("</p>");
				arr.push("<cite class='f6 ttu tracked fs-normal'>―");
			  arr.push(author);
			  arr.push("</cite>");
			  arr.push("</blockquote>");
				arr.push("</div>");
    });
	});

	quotes.append(arr);
});