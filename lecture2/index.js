// Задача 1
function numbers(a, b) {
	if (a > b) {
		return true;
	} else {
		return false;
	}
}

// Задача 2
function string(str) {
  return 'Вы ввели ' + str;
}

// Задача 3
function check(param) {
	if (param === null || param === undefined) {
		return true;
	}
}

// Задача 4
function addField(obj) {
	obj.checked = true;
}

// Задача 5
function allNumbers(number) {
  if (number >= 0) {
    for (var i = 0; i <= number; i++) {
			console.log(i);
		}
	} else {
		for (var j = 0; j >= number; j--) {
			console.log(j);
		}
	}
}