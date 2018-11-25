'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Company = exports.Company = function Company() {
	var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Your company';

	_classCallCheck(this, Company);

	this.name = name;
};