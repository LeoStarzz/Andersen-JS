var calculator = (function () {
	document.addEventListener("DOMContentLoaded", function () {
		var result = '';
		var finalResult = 0;
		var area = document.querySelector(".result");
		var buttonEqual = document.querySelector(".button_equal");
		var buttonAC = document.querySelector(".button_ac");
		var history = document.querySelector(".history");
		var buttonClear = document.querySelector("button");
		var buttons = document.querySelector(".buttons");

		var data = JSON.parse(localStorage.getItem('items')) || [];
		if (data !== null) {
			data.forEach(item => {
				var div = document.createElement("div");
				div.innerHTML += item;
				history.appendChild(div);
			});
		}

		window.addEventListener('keydown', function (event) {
			switch (event.keyCode) {
				case 96: case 97: case 98: case 99: case 100: case 101: case 102: case 103: case 104: case 105:
					result = result + (event.keyCode - 96).toString();
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
				case 110:
					result = result + '.';
					area.innerHTML = result;
					break;
				case 13:
					try {
						finalResult = eval(result);
					} catch (err) {
						alert("Введите правильное выражение!");
					}
					area.innerHTML = finalResult;
					var div = document.createElement("div");
					div.innerHTML += result + ' = ' + finalResult;
					data.push(result + ' = ' + finalResult);
					history.appendChild(div);
					localStorage.setItem('items', JSON.stringify(data));
					result = '';
					finalResult = '';
					break;
			}

		}, true);

		buttons.addEventListener('click', function () {
			if (event.target.innerHTML !== 'AC' && event.target.innerHTML !== '=') {
				if (event.target.innerHTML === '×') {
					result = result + '*';
					area.innerHTML = result;
				} else if (event.target.innerHTML === '÷') {
					result = result + '/';
					area.innerHTML = result;
				} else {
					result = result + event.target.innerHTML;
					area.innerHTML = result;
				}
			}
		});

		buttonEqual.addEventListener('click', function () {
			try {
				finalResult = eval(result);
			} catch (err) {
				alert("Введите правильное выражение!");
			}
			area.innerHTML = finalResult;
			var div = document.createElement("div");
			div.innerHTML += result + ' = ' + finalResult;
			data.push(result + ' = ' + finalResult);
			history.appendChild(div);
			localStorage.setItem('items', JSON.stringify(data));
			result = '';
			finalResult = '';
		});

		buttonAC.addEventListener('click', function () {
			finalResult = '';
			result = '';
			area.innerHTML = '';
		});

		buttonClear.addEventListener('click', function () {
			localStorage.clear();
			while (history.firstChild) {
				history.removeChild(history.firstChild);
			}
			history.innerHTML = 'History';
			data = [];

		});
	});
})();