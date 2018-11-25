'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Manager = exports.Manager = function () {
	function Manager(name, surname) {
		var experience = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

		_classCallCheck(this, Manager);

		this.name = name;
		this.surname = surname;
		this.experience = experience;
		this.salary;
		this.state;
		this.developers = [];
	}

	_createClass(Manager, [{
		key: 'getSalary',
		value: function getSalary() {
			if (this.experience < 0) {
				alert('Опыт должен быть больше 0 лет');
			} else if (this.experience < 2) {
				return 400;
			} else if (this.experience < 5) {
				return 600;
			} else {
				return 1000;
			}
		}
	}, {
		key: 'getQuotient',
		value: function getQuotient() {
			if (this.experience < 0) {
				alert('Опыт должен быть больше 0 лет');
			} else if (this.experience < 2) {
				return 1.2;
			} else if (this.experience < 5) {
				return 1.5;
			} else {
				return 2.5;
			}
		}
	}]);

	return Manager;
}();