'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Project = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = require('../utils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Project = exports.Project = function () {
	function Project() {
		var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'New project';

		_classCallCheck(this, Project);

		this.name = name;
		this.cost;
		this.linesOfCode;
		this.manager;
		this.remainsLinesOfCode;
	}

	_createClass(Project, [{
		key: 'getCost',
		value: function getCost(mode) {
			if (mode === 'easy') {
				this.cost = (0, _utils.getRandomInRange)(30000, 100000);
				return this.cost;
			} else if (mode === 'medium') {
				this.cost = (0, _utils.getRandomInRange)(15000, 60000);
				return this.cost;
			} else if (mode === 'hard') {
				this.cost = (0, _utils.getRandomInRange)(10000, 40000);
				return this.cost;
			}
		}
	}, {
		key: 'getLinesOfCode',
		value: function getLinesOfCode(mode) {
			if (mode === 'easy') {
				this.linesOfCode = (0, _utils.getRandomInRange)(4000, 8000);
				this.remainsLinesOfCode = this.linesOfCode;
				return this.linesOfCode;
			} else if (mode === 'medium') {
				this.linesOfCode = (0, _utils.getRandomInRange)(6000, 12000);
				this.remainsLinesOfCode = this.linesOfCode;
				return this.linesOfCode;
			} else if (mode === 'hard') {
				this.linesOfCode = (0, _utils.getRandomInRange)(10000, 20000);
				this.remainsLinesOfCode = this.linesOfCode;
				return this.linesOfCode;
			}
		}
	}]);

	return Project;
}();