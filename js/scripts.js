$(document).ready(function() {
	$("#entrys").submit(function(event) {
		var newArrays = [];
		var input = $("#entry").val();
		var sentenceArrays = input.split(' ');

		sentenceArrays.forEach(function(sentenceArray) {
		if (sentenceArray.length >=3) {
			newArrays.push(sentenceArray);
		}
	});
		alert(newArrays.join(' '));
	});
});