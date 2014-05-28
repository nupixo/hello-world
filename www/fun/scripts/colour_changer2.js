$(document).ready(function() {
	$().mousemove(function(e) {
		changeColour(e.pageX, e.pageY);
	});
});

function changeColour(x, y) {
	var r = Math.floor(x/$(document).width()*256);
	var g = '0';
	var b = Math.floor(y/$(document).height()*256);
	
	var newColour = '#'+intToHex(r)+intToHex(g)+intToHex(b);

	$("body").css("background-color", newColour);
}
 
 
function intToHex(n) {
 	n = n.toString(16);
 	
 	if( n.length < 2) {
 		n = "0"+n;
 	}
 	
 	return n;
}