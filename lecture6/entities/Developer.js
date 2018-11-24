var Developer = (function () {
	function Developer(name, surname, experience) {
		this.name = name;
		this.surname = surname;
		this.experience = experience;
		this.lines;
		this.state;
	}

	Developer.prototype.getSalary = function () {
		if (this.experience < 2) {
			return 300;
		}
		else if (this.experience < 5) {
			return 600;
		}
		else {
			return 1000;
		}
	};

	Developer.prototype.getLines = function (mode) {
		if (mode === 'easy') {
			if (this.experience < 0) {
				alert('Опыт должен быть больше 0 лет');
			}
			else if (this.experience < 2) {
				this.lines = utils.getRandomInRange(400, 600);
				return this.lines;
			}
			else if (this.experience < 5) {
				this.lines = utils.getRandomInRange(700, 900);
				return this.lines;
			}
			else {
				this.lines = utils.getRandomInRange(1000, 1400);
				return this.lines;
			}
		}
		else if (mode === 'medium') {
			if (this.experience < 0) {
				alert('Опыт должен быть больше 0 лет');
			}
			else if (this.experience < 2) {
				this.lines = utils.getRandomInRange(300, 500);
				return this.lines;
			}
			else if (this.experience < 5) {
				this.lines = utils.getRandomInRange(600, 800);
				return this.lines;
			}
			else {
				this.lines = utils.getRandomInRange(800, 1200);
				return this.lines;
			}
		}

		else if (mode === 'hard') {
			if (this.experience < 0) {
				alert('Опыт должен быть больше 0 лет');
			}
			else if (this.experience < 2) {
				this.lines = utils.getRandomInRange(200, 400);
				return this.lines;
			}
			else if (this.experience < 5) {
				this.lines = utils.getRandomInRange(500, 700);
				return this.lines;
			}
			else {
				this.lines = utils.getRandomInRange(800, 1000);
				return this.lines;
			}
		}
	};

	return Developer;
})();