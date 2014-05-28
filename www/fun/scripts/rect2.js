$(document).ready(function() {
	var startX, startY = 0;
	
	$('body').mousedown(function(e) {
		resizeCurrent(e);
		
		startX = e.pageX;
		startY = e.pageY;
		
		var newItem = $('<li></li>').addClass('current').css({
			top: startY,
			left: startX		
		});
		
		$('#container').append(newItem);
		
		$('body').mousemove(function(e) {
			resizeCurrent(e);
		});
	});
	
	$('body').mouseup(function() {
		$('.current').removeClass('current');
		$('body').unbind('mousemove');
	});
	
	function resizeCurrent(e) {
		var newWidth, newHeight;
		
		newWidth = e.pageX - startX;
		newHeight = e.pageY - startY;
		
		if(newWidth < 0) {
			$('.current').css({
				left: e.pageX
			});
		}
		
		if(newHeight < 0) {
			$('.current').css({
				top: e.pageY
			});
		}
		
		$('.current').height(Math.abs(newHeight)).width(Math.abs(newWidth));
	}
});