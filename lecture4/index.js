document.addEventListener("DOMContentLoaded", function () {

	var result = '';
	var finalResult = 0;
	var area = document.querySelector(".result");
	var button1 = document.querySelector(".button1");
	var button2 = document.querySelector(".button2");
	var button3 = document.querySelector(".button3");
	var button4 = document.querySelector(".button4");
	var button5 = document.querySelector(".button5");
	var button6 = document.querySelector(".button6");
	var button7 = document.querySelector(".button7");
	var button8 = document.querySelector(".button8");
	var button9 = document.querySelector(".button9");
	var button0 = document.querySelector(".button0");
	var buttonMinus = document.querySelector(".button_minus");
	var buttonPlus = document.querySelector(".button_plus");
	var buttonDivide = document.querySelector(".button_divide");
	var buttonMultiply = document.querySelector(".button_multiply");
	var buttonEqual = document.querySelector(".button_equal");
	var buttonAC = document.querySelector(".button_ac");
	var history = document.querySelector(".history");

	window.addEventListener('keydown', function (event) {
		switch (event.keyCode) {
			case 97:
				result = result + '1';
				area.innerHTML = result;
				break;
			case 98:
				result = result + '2';
				area.innerHTML = result;
				break;
			case 99:
				result = result + '3';
				area.innerHTML = result;
				break;
			case 100:
				result = result + '4';
				area.innerHTML = result;
				break;
			case 101:
				result = result + '5';
				area.innerHTML = result;
				break;
			case 102:
				result = result + '6';
				area.innerHTML = result;
				break;
			case 103:
				result = result + '7';
				area.innerHTML = result;
				break;
			case 104:
				result = result + '8';
				area.innerHTML = result;
				break;
			case 105:
				result = result + '9';
				area.innerHTML = result;
				break;
			case 96:
				result = result + '0';
				area.innerHTML = result;
				break;
			case 107:
				result = result + '+';
				area.innerHTML = result;
				break;
			case 109:
				result = result + '-';
				area.innerHTML = result;
				break;
			case 106:
				result = result + '*';
				area.innerHTML = result;
				break;
			case 111:
				result = result + '/';
				area.innerHTML = result;
				break;
			case 13:
				finalResult = eval(result);
				area.innerHTML = finalResult;
				var div = document.createElement("div");
				div.innerHTML += result + ' = ' + finalResult;
				history.appendChild(div);
				result = '';
	    	finalResult = '';
				break;
		}

	}, true);

	button1.addEventListener('click', function () {
		result = result + '1';
		area.innerHTML = result;
	});

	button2.addEventListener('click', function () {
		result = result + '2';
		area.innerHTML = result;
	});

	button3.addEventListener('click', function () {
		result = result + '3';
		area.innerHTML = result;
	});

	button4.addEventListener('click', function () {
		result = result + '4';
		area.innerHTML = result;
	});

	button5.addEventListener('click', function () {
		result = result + '5';
		area.innerHTML = result;
	});

	button6.addEventListener('click', function () {
		result = result + '6';
		area.innerHTML = result;
	});

	button7.addEventListener('click', function () {
		result = result + '7';
		area.innerHTML = result;
	});

	button8.addEventListener('click', function () {
		result = result + '8';
		area.innerHTML = result;
	});

	button9.addEventListener('click', function () {
		result = result + '9';
		area.innerHTML = result;
	});

	button0.addEventListener('click', function () {
		result = result + '0';
		area.innerHTML = result;
	});

	buttonMinus.addEventListener('click', function () {
		result = result + '-';
		area.innerHTML = result;
	});

	buttonPlus.addEventListener('click', function () {
		result = result + '+';
		area.innerHTML = result;
	});

	buttonMultiply.addEventListener('click', function () {
		result = result + '*';
		area.innerHTML = result;
	});

	buttonDivide.addEventListener('click', function () {
		result = result + '/';
		area.innerHTML = result;
	});

	buttonEqual.addEventListener('click', function () {
		finalResult = eval(result);
		area.innerHTML = finalResult;
		var div = document.createElement("div");
		div.innerHTML += result + ' = ' + finalResult;
		history.appendChild(div);
		result = '';
		finalResult = '';
	});

	buttonAC.addEventListener('click', function () {
		finalResult = '';
		result = '';
		area.innerHTML = '';
	});

});