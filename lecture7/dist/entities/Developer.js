'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Developer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = require('utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Developer = exports.Developer = function () {
	function Developer(name, surname) {
		var experience = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

		_classCallCheck(this, Developer);

		this.name = name;
		this.surname = surname;
		this.experience = experience;
		this.lines;
		this.state;
	}

	_createClass(Developer, [{
		key: 'getSalary',
		value: function getSalary() {
			if (this.experience < 2) {
				return 300;
			} else if (this.experience < 5) {
				return 600;
			} else {
				return 1000;
			}
		}
	}, {
		key: 'getLines',
		value: function getLines(mode) {
			if (mode === 'easy') {
				if (this.experience < 0) {
					alert('Опыт должен быть больше 0 лет');
				} else if (this.experience < 2) {
					this.lines = (0, _utils2.default)(400, 600);
					return this.lines;
				} else if (this.experience < 5) {
					this.lines = (0, _utils2.default)(700, 900);
					return this.lines;
				} else {
					this.lines = (0, _utils2.default)(1000, 1400);
					return this.lines;
				}
			} else if (mode === 'medium') {
				if (this.experience < 0) {
					alert('Опыт должен быть больше 0 лет');
				} else if (this.experience < 2) {
					this.lines = (0, _utils2.default)(300, 500);
					return this.lines;
				} else if (this.experience < 5) {
					this.lines = (0, _utils2.default)(600, 800);
					return this.lines;
				} else {
					this.lines = (0, _utils2.default)(800, 1200);
					return this.lines;
				}
			} else if (mode === 'hard') {
				if (this.experience < 0) {
					alert('Опыт должен быть больше 0 лет');
				} else if (this.experience < 2) {
					this.lines = (0, _utils2.default)(200, 400);
					return this.lines;
				} else if (this.experience < 5) {
					this.lines = (0, _utils2.default)(500, 700);
					return this.lines;
				} else {
					this.lines = (0, _utils2.default)(800, 1000);
					return this.lines;
				}
			}
		}
	}]);

	return Developer;
}();