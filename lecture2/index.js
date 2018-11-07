// Задача 1
function numbers(a, b) {
	return a > b;
}

// Задача 2
function string(str) {
	return 'Вы ввели * ' + str + ' *';
}

// Задача 3
function check(param) {
	return (param === null || param === undefined);
}

// Задача 4
function addField(obj) {
	obj.checked = true;
}

// Задача 5
function allNumbers(number) {
	for (var i = 0; i <= number; i++) {
		console.log(i);
	}
	for (var j = number; j >= 0; j--) {
		console.log(j);
	}
}
