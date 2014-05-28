$(document).ready(function() {
	$('.colourSlider').slider({
		slide: function(event, ui) {
			changeColour();
			$('#colourCode').text(getColour());
		},
		stop: function(event, ui) {
			fadeColour();
			$('#colourCode').text(getColour());
		},
		animate: true
	});
	$('.colourSlider').slider('option','value', 50);
});

function changeColour() {
	$("body").css("background-color", getColour() );
}

function fadeColour() {
	$('body').animate({ backgroundColor: getColour() }, 1000);
}

function getColour() {
	var r = sliderToColourInt('r');
	var g = sliderToColourInt('g');
	var b = sliderToColourInt('b');
	
	return newColour = '#'+intToHex(r)+intToHex(g)+intToHex(b);
}

function intToHex(n) {
 	n = n.toString(16);
 	
 	if( n.length < 2) {
 		n = "0"+n;
 	}
 	
 	return n;
}

function sliderToColourInt(sliderColour) {
	return Math.floor($('#slider_' + sliderColour).slider('value')/100*255);
}