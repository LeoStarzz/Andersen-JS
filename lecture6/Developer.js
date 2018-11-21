var Developer = (function () {
	function Developer(name, surname, experience) {
		this.name = name;
		this.surname = surname;
		this.experience = experience;
		this.lines = 0;
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
				this.lines = Math.floor(Math.random() * (600 - 400 + 1)) + 400;
				return this.lines;
			}
			else if (this.experience < 5) {
				this.lines = Math.floor(Math.random() * (900 - 700 + 1)) + 700;
				return this.lines;
			}
			else {
				this.lines = Math.floor(Math.random() * (1400 - 1000 + 1)) + 1000;
				return this.lines;
			}
		}
		else if (mode === 'medium') {
			if (this.experience < 0) {
				alert('Опыт должен быть больше 0 лет');
			}
			else if (this.experience < 2) {
				this.lines = Math.floor(Math.random() * (500 - 300 + 1)) + 300;
				return this.lines;
			}
			else if (this.experience < 5) {
				this.lines = Math.floor(Math.random() * (800 - 600 + 1)) + 600;
				return this.lines;
			}
			else {
				this.lines = Math.floor(Math.random() * (1200 - 800 + 1)) + 800;
				return this.lines;
			}
		}

		else if (mode === 'hard') {
			if (this.experience < 0) {
				alert('Опыт должен быть больше 0 лет');
			}
			else if (this.experience < 2) {
				this.lines = Math.floor(Math.random() * (400 - 200 + 1)) + 200;
				return this.lines;
			}
			else if (this.experience < 5) {
				this.lines = Math.floor(Math.random() * (700 - 500 + 1)) + 500;
				return this.lines;
			}
			else {
				this.lines = Math.floor(Math.random() * (1000 - 600 + 1)) + 600;
				return this.lines;
			}
		}
	};

	return Developer;
})();