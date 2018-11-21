var Manager = (function () {
	function Manager(name, surname, experience) {
		this.name = name;
		this.surname = surname;
		this.experience = experience;
		this.salary;
	}

	Manager.prototype.getSalary = function() {
		if (this.experience < 0) {
			alert('Опыт должен быть больше 0 лет');
	}
		else if (this.experience < 2) {
			return 400;
		}
		else if (this.experience < 5) {
			return 600;
		}
		else {
			return 1000;
		}
	};

	Manager.prototype.getQuotient = function() {
		if (this.experience < 0) {
			alert('Опыт должен быть больше 0 лет');
	}
		else if (this.experience < 2) {
			return 1.2;
		}
		else if (this.experience < 5) {
			return 1.5;
		}
		else {
			return 2.5;
		}
	}

	return Manager;
})();