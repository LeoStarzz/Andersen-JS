var Project = (function () {
	function Project(name) {
		this.name = name;
		this.cost = 0;
		this.linesOfCode;
	}

	Project.prototype.getCost = function (mode) {
		if (mode === 'easy') {
			this.cost = Math.floor(Math.random() * (100000 - 30000 + 1)) + 30000;
			return this.cost;
		}
		else if (mode === 'medium') {
			this.cost = Math.floor(Math.random() * (60000 - 15000 + 1)) + 15000;
			return this.cost;

		}
		else if (mode === 'hard') {
			this.cost = Math.floor(Math.random() * (40000 - 10000 + 1)) + 10000;
			return this.cost;
		}
	};

	Project.prototype.getLinesOfCode = function (mode) {
		if (mode === 'easy') {
			this.linesOfCode =  Math.floor(Math.random() * (8000 - 4000 + 1)) + 4000;
			return this.linesOfCode;
		}
		else if (mode === 'medium') {
			this.linesOfCode = Math.floor(Math.random() * (12000 - 6000 + 1)) + 6000;
			return this.linesOfCode;
		}

		else if (mode === 'hard') {
			this.linesOfCode = Math.floor(Math.random() * (20000 - 10000 + 1)) + 10000;
			return this.linesOfCode;
		}
	}

	return Project;
})();