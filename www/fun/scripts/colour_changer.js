$(document).ready(function() {
	setupColourific();
});
 
function setupColourific() {
 	var elementToChange = $("body");
 	changeColour(elementToChange); 
 	window.setInterval( function(){changeColour(elementToChange)}, 2000); 
}

 
function changeColour(e) {
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	
	e.animate({ backgroundColor: getHex(r,g,b) }, 1000);
}
 
 
function intToHex(n) {
 	n = n.toString(16);
 	
 	if( n.length < 2) {
 		n = "0"+n;
 	}
 	
 	return n;
}
 
function getHex(r, g, b) {
	return '#'+intToHex(r)+intToHex(g)+intToHex(b); 
}