$(document).ready(function() {
	//$('h1').text(prompt('Enter your name'));
	
	$('body').click(function() {
		var r = Math.floor(Math.random()*256);
		var g = Math.floor(Math.random()*256);
		var b = Math.floor(Math.random()*256);
		
		$(this).animate({ backgroundColor: getHex(r,g,b) }, 1000);
		
		$('div.action').text("Clicked!");
	});
	
	$().mousemove(function(e) {
		var newAlpha = e.pageY / $(document).height();
		$('h1 span').css("opacity", 1 - newAlpha);
		$('h1 span').css("filter", "alpha(opacity=" + 100 - Math.round(newAlpha * 100) + ")");
		
		$('div.action').text("Moving!");
	});
});
 
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