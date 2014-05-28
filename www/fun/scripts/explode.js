$(document).ready(function() {
	var pushFactor = 1000;
	
	$('#container li').each(function() {
		$(this).attr('startX', calculateShapeCenterX($(this)));
		$(this).attr('startY', calculateShapeCenterY($(this)));
	});
	
	$('body').click(function(e) {
		$('#container li').each(function() {
			var shape, mouseDistance, pushDistance, startX, startY, offsetX, offsetY;
			
			shape = $(this);
			mouseDistance = calculateDistance(e, shape);

			if(mouseDistance < pushFactor) {
				startX = eval(shape.attr('startX'));
				startY = eval(shape.attr('startY'));
				
				pushDistance = (pushFactor - mouseDistance) / Math.pow(mouseDistance, 1.5);
				
				offsetX = pushDistance * (e.pageX - calculateShapeCenterX(shape));
				offsetY = pushDistance * (e.pageY - calculateShapeCenterY(shape));
				
				$(this).stop().animate({
					left: -offsetX,
					top: -offsetY
				}, 1000, function() {
					$(this).animate({
						left: 0,
						top: 0
					}, 250);
				});
			
				//console.log('offsetX: ', offsetX, ', offsetY: ', offsetY);
			}		
		});
	});
});

function calculateDistance(e, shape) {
	var a, b;
	
	a = e.pageX - calculateShapeCenterX(shape);
	b = e.pageY - calculateShapeCenterY(shape);
	
	return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}

function calculateShapeCenterX(shape) {
	return (shape.offset().left + shape.width() / 2);
}

function calculateShapeCenterY(shape) {
	return (shape.offset().top + shape.height() / 2);
}