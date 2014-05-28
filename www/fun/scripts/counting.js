var writtenNumbers = new Array(
	'Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',
	'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen',
	'Twenty', 'Twenty-One', 'Twenty-Two', 'Twenty-Three', 'Twenty-Four', 'Twenty-Five', 'Twenty-Six', 'Twenty-Seven', 'Twenty-Eight', 'Twenty-Nine',
	'Thirty', 'Thirty-One', 'Thirty-Two', 'Thirty-Three', 'Thirty-Four', 'Thirty-Five', 'Thirty-Six', 'Thirty-Seven', 'Thirty-Eight', 'Thirty-Nine',
	'Fourty', 'Fourty-One', 'Fourty-Two', 'Fourty-Three', 'Fourty-Four', 'Fourty-Five', 'Fourty-Six', 'Fourty-Seven', 'Fourty-Eight', 'Fourty-Nine',
	'Fifty', 'Fifty-One', 'Fifty-Two', 'Fifty-Three', 'Fifty-Four', 'Fifty-Five', 'Fifty-Six', 'Fifty-Seven', 'Fifty-Eight', 'Fifty-Nine',
	'Sixty', 'Sixty-One', 'Sixty-Two', 'Sixty-Three', 'Sixty-Four', 'Sixty-Five', 'Sixty-Six', 'Sixty-Seven', 'Sixty-Eight', 'Sixty-Nine',
	'Seventy', 'Seventy-One', 'Seventy-Two', 'Seventy-Three', 'Seventy-Four', 'Seventy-Five', 'Seventy-Six', 'Seventy-Seven', 'Seventy-Eight', 'Seventy-Nine',
	'Eighty', 'Eighty-One', 'Eighty-Two', 'Eighty-Three', 'Eighty-Four', 'Eighty-Five', 'Eighty-Six', 'Eighty-Seven', 'Eighty-Eight', 'Eighty-Nine',
	'Ninety', 'Ninety-One', 'Ninety-Two', 'Ninety-Three', 'Ninety-Four', 'Ninety-Five', 'Ninety-Six', 'Ninety-Seven', 'Ninety-Eight', 'Ninety-Nine',
	'One Hundred'
);

var currentNumber = 0;

$(document).ready(function() {
	$('body').click(function() {
		$('div.number').text(currentNumber);
		$('h1').text(writtenNumbers[currentNumber++]);
	});
});