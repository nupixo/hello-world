var currentNumber = 1;

$(document).ready(function() {
	$('body').click(function() {
		$('div.number').text(currentNumber);
		$('h1').text(writtenNumbers[currentNumber++]);
	});
});

function processNumber(n) {
	var writtenNumbers = new Array();
	writtenNumbers['0'] = 'and';
	writtenNumbers['1'] = 'One'; 
	writtenNumbers['2'] = 'Two';
	writtenNumbers['3'] = 'Three';
	writtenNumbers['4'] = 'Four';
	writtenNumbers['5'] = 'Five';
	writtenNumbers['6'] = 'Six';
	writtenNumbers['7'] = 'Seven';
	writtenNumbers['8'] = 'Eight';
	writtenNumbers['9'] = 'Nine'; 
	writtenNumbers['10'] = 'Ten';
	writtenNumbers['11'] = 'Eleven';
	writtenNumbers['12'] = 'Twelve';
	writtenNumbers['13'] = 'Thirteen';
	writtenNumbers['14'] = 'Fourteen';
	writtenNumbers['15'] = 'Fifteen';
	writtenNumbers['16'] = 'Sixteen';
	writtenNumbers['17'] = 'Seventeen';
	writtenNumbers['18'] = 'Eighteen';
	writtenNumbers['19'] = 'Nineteen';
	writtenNumbers['20'] = 'Twenty';
	writtenNumbers['30'] = 'Thirty';
	writtenNumbers['40'] = 'Forty';
	writtenNumbers['50'] = 'Fifty';
	writtenNumbers['60'] = 'Sixty';
	writtenNumbers['70'] = 'Seventy';
	writtenNumbers['80'] = 'Eighty';
	writtenNumbers['90'] = 'Ninety';
	writtenNumbers['100'] = 'Hundred';
	writtenNumbers['1000'] = 'Thousand'
	
	var nString = n.toString();
	var nLength = n.length;
	
	if(n >= 10000) {
		alert('Too high');
	}
	
	if(n >= 100) {
	
	}
	
	if(n >= 20) {
		console.log(writtenNumbers[n]);
	}
	
	if(n > 0) {
		console.log(writtenNumbers[n]);
	}
	
	 {
		alert('Too low / undefined');
	}
}

processNumber(1);