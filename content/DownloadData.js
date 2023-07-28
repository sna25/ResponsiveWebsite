$(document).ready(function(){
	$.getJSON( "./data/mydata.json.txt", function(data) {
		$.each(data.person, function(i, f) {
			var tblRow = "<tr>" + "<td>" + f.firstName + "</td>" +
			"<td>" + f.lastName + "</td>" + "<td>" + f.job + "</td>" + "<td>" + f.roll + "</td>" + "</tr>"
			$(tblRow).appendTo("#userdata tbody");
		});
	});
});