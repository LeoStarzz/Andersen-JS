import getRandomInRange  from "utils";

export class Developer {
	constructor(name, surname, experience = 1) {
		this.name = name;
		this.surname = surname;
		this.experience = experience;
		this.lines;
		this.state;
	}
	getSalary() {
		if (this.experience < 2) {
			return 300;
		}
		else if (this.experience < 5) {
			return 600;
		}
		else {
			return 1000;
		}
	}
	getLines(mode) {
		if (mode === 'easy') {
			if (this.experience < 0) {
				alert('Опыт должен быть больше 0 лет');
			}
			else if (this.experience < 2) {
				this.lines = getRandomInRange(400, 600);
				return this.lines;
			}
			else if (this.experience < 5) {
				this.lines = getRandomInRange(700, 900);
				return this.lines;
			}
			else {
				this.lines = getRandomInRange(1000, 1400);
				return this.lines;
			}
		}
		else if (mode === 'medium') {
			if (this.experience < 0) {
				alert('Опыт должен быть больше 0 лет');
			}
			else if (this.experience < 2) {
				this.lines = getRandomInRange(300, 500);
				return this.lines;
			}
			else if (this.experience < 5) {
				this.lines = getRandomInRange(600, 800);
				return this.lines;
			}
			else {
				this.lines = getRandomInRange(800, 1200);
				return this.lines;
			}
		}
		else if (mode === 'hard') {
			if (this.experience < 0) {
				alert('Опыт должен быть больше 0 лет');
			}
			else if (this.experience < 2) {
				this.lines = getRandomInRange(200, 400);
				return this.lines;
			}
			else if (this.experience < 5) {
				this.lines = getRandomInRange(500, 700);
				return this.lines;
			}
			else {
				this.lines = getRandomInRange(800, 1000);
				return this.lines;
			}
		}
	}
}

