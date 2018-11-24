var Project = (function () {
	function Project(name) {
		this.name = name;
		this.cost = 0;
		this.linesOfCode;
		this.manager;
		this.remainsLinesOfCode;
	}

	Project.prototype.getCost = function (mode) {
		if (mode === 'easy') {
			this.cost = utils.getRandomInRange(30000, 100000);
			return this.cost;
		}
		else if (mode === 'medium') {
			this.cost = utils.getRandomInRange(15000, 60000);
			return this.cost;

		}
		else if (mode === 'hard') {
			this.cost = utils.getRandomInRange(10000, 40000);
			return this.cost;
		}
	};

	Project.prototype.getLinesOfCode = function (mode) {
		if (mode === 'easy') {
			this.linesOfCode =  utils.getRandomInRange(4000, 8000);
			this.remainsLinesOfCode = this.linesOfCode;
			return this.linesOfCode;
		}
		else if (mode === 'medium') {
			this.linesOfCode = utils.getRandomInRange(6000, 12000);
			this.remainsLinesOfCode = this.linesOfCode;
			return this.linesOfCode;
		}

		else if (mode === 'hard') {
			this.linesOfCode =utils.getRandomInRange(10000, 20000);
			this.remainsLinesOfCode = this.linesOfCode;
			return this.linesOfCode;
		}
	}

	return Project;
})();