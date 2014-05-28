$(document).ready(function() {
	var pushFactor = 10000;
	var clickCount = 0;
	var minX = 0;
	var minY = 0;
	var maxX = $('body').width();
	var maxY = $('body').height();
	
	$('body').click(function(e) {
		$('#counter').html('Mouse Clicks: ' + ++clickCount);
		
		$('#container li').each(function() {
			var shape, mouseDistance, pushDistance, pushRatio, offsetX, offsetY;
			
			shape = $(this);
			mouseDistance = calculateDistance(e, shape);
			
			pushDistance = Math.abs(pushFactor / mouseDistance);
			pushRatio = pushDistance / mouseDistance;
			
			offsetX = (calculateShapeCenterX(shape) - e.pageX) * pushRatio;
			offsetY = (calculateShapeCenterY(shape) - e.pageY) * pushRatio;
			
			$(this).clearQueue().animate({
				left: '+=' + offsetX,
				top: '+=' + offsetY
			}, 'slow', function() {
				if(!$(this).isOnScreen()) {
					$('#message').animate({
						top: '45%'
					});
					
					$('body').unbind('click').click(function() {
						window.location.reload(true);
					});
				}
			});
			
			//console.log('offsetX: ', offsetX, ', offsetY: ', offsetY);
		
		});
	});
});

function calculateDistance(e, shape) {
	var a, b;
	
	a = e.pageX - calculateShapeCenterX(shape);
	b = e.pageY - calculateShapeCenterY(shape);
	
	return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
}

function calculateShapeCenterX(shape) {
	return (shape.offset().left + shape.width() / 2);
}

function calculateShapeCenterY(shape) {
	return (shape.offset().top + shape.height() / 2);
}