var main = (function () {

	var tick = 0;
	var mode = undefined;
	var budget = 0;
	var expenses = 0;
	var time = 0;
	var intervalID;
	var projects = [];
	var managers = [];
	var developers = [];
	var totalSalary = 0;
	var totalLines = 0;
	var averageQuotient = 0;

	elements.startButton.addEventListener('click', function () {
		intervalID = window.setInterval(mainFunc, tick);
		function mainFunc() {
			time = time + 1;
			totalSalary = 0;
			averageQuotient = 0;
			for (var i = 0; i < developers.length; i++) {
				totalSalary = totalSalary + developers[i].getSalary();
				console.log(totalLines);
				totalLines = totalLines + developers[i].lines;
			}

			for (var i = 0; i < managers.length; i++) {
				totalSalary = totalSalary + managers[i].getSalary();
				averageQuotient = averageQuotient + managers[i].getQuotient();
			}

			averageQuotient = averageQuotient / managers.length;
			console.log('quotient', averageQuotient);
			totalLines = totalLines * averageQuotient;
			console.log('total lines', totalLines);
			for (var i = 0; i < projects.length; i++) {
				if (totalLines >= projects[i].linesOfCode) {
					console.log(projects[i].linesOfCode);
					totalLines = 0;
					budget = budget + projects[i].cost;
					projects.splice(projects[i], 1);
					elements.userProjects.removeChild(elements.userProjects.children[i]);
				}
			}

			expenses = expenses + totalSalary;
			elements.timeDiv.innerHTML = time;
			elements.budgetDiv.innerHTML = budget;
			budget = budget - expenses;
			if (budget <= 0) {
				stop();
				alert("You lose :(");
			}
		}

	});

	elements.stopButton.addEventListener('click', function () {
		stop();
	});

	elements.easyButton.addEventListener('click', function () {
		mode = 'easy';
		budget = 1000000;
		tick = 3000;
		elements.timeDiv.innerHTML = time;
		elements.budgetDiv.innerHTML = budget;
		elements.easyButton.className = 'easy button-active';
	});

	elements.mediumButton.addEventListener('click', function () {
		mode = 'medium';
		budget = 500000;
		tick = 2000;
		elements.timeDiv.innerHTML = time;
		elements.budgetDiv.innerHTML = budget;
		elements.mediumButton.className = 'medium button-active';
	});

	elements.hardButton.addEventListener('click', function () {
		mode = 'hard';
		budget = 250000;
		tick = 1000;
		elements.timeDiv.innerHTML = time;
		elements.budgetDiv.innerHTML = budget;
		elements.hardButton.className = 'hard button-active';
	});

	elements.addProjectButton.addEventListener('click', function () {
		var projectName = elements.projectNameInput.value;
		var project = new Project(projectName);
		var div = document.createElement('div');
		div.appendChild(document.createTextNode('Name:' + ' ' + project.name + ' '));
		div.appendChild(document.createTextNode('Cost:' + ' ' + project.getCost(mode) + ' '));
		div.appendChild(document.createTextNode('Lines:' + ' ' + project.getLinesOfCode(mode)));
		elements.userProjects.appendChild(div);
		projects.push(project);
	});

	elements.addManagerButton.addEventListener('click', function () {
		var managerName = elements.managerNameInput.value;
		var managerSurname = elements.managerSurnameInput.value;
		var managerExperience = elements.managerExperienceInput.value;
		var fireButton = document.createElement('div');
		fireButton.className = 'fire';
		fireButton.innerHTML = 'Fire';

		var manager = new Manager(managerName, managerSurname, managerExperience);
		var div = document.createElement('div');
		div.appendChild(document.createTextNode('Name:' + ' ' + manager.name + ' '));
		div.appendChild(document.createTextNode('Surname:' + ' ' + manager.surname + ' '));
		div.appendChild(document.createTextNode('Experience:' + ' ' + manager.experience));
		div.appendChild(fireButton);
		fireButton.addEventListener('click', function () {
			managers.splice(managers.indexOf(manager), 1);
			elements.userManagers.removeChild(div);
		});
		elements.userManagers.appendChild(div);
		managers.push(manager);
	});

	elements.addDeveloperButton.addEventListener('click', function () {
		if (developers.length >= managers.length * 5) {
			alert("You don't have enough managers!");
		} else {
			var developerName = elements.developerNameInput.value;
			var developerSurname = elements.developerSurnameInput.value;
			var developerExperience = elements.developerExperienceInput.value;

			var developer = new Developer(developerName, developerSurname, developerExperience);
			var div = document.createElement('div');
			var fireButton = document.createElement('div');
			fireButton.className = 'fire';
			fireButton.innerHTML = 'Fire';
			div.appendChild(document.createTextNode('Name:' + ' ' + developer.name + ' '));
			div.appendChild(document.createTextNode('Surname:' + ' ' + developer.surname + ' '));
			div.appendChild(document.createTextNode('Experience:' + ' ' + developer.experience + ' '));
			div.appendChild(document.createTextNode('Lines:' + ' ' + developer.getLines(mode)));
			div.appendChild(fireButton);
			fireButton.addEventListener('click', function () {
				developers.splice(developers.indexOf(developer), 1);
				elements.userDevelopers.removeChild(div);
			});
			fireButton.addEventListener('click', function () {

			});
			elements.userDevelopers.appendChild(div);
			developers.push(developer);
		}
	});

	function stop() {
		clearInterval(intervalID);
		time = 0;
		budget = 0;
		projects = [];
		managers = [];
		developers = [];
		elements.timeDiv.innerHTML = '';
		elements.budgetDiv.innerHTML = '';
		elements.companyNameInput.value = '';
		elements.projectNameInput.value = '';
		elements.managerNameInput.value = '';
		elements.managerSurnameInput.value = '';
		elements.managerExperienceInput.value = '';
		elements.developerNameInput.value = '';
		elements.developerSurnameInput.value = '';
		elements.developerExperienceInput.value = '';
		elements.easyButton.classList.remove('button-active');
		elements.mediumButton.classList.remove('button-active');
		elements.hardButton.classList.remove('button-active');

		while (elements.userProjects.firstChild) {
			elements.userProjects.removeChild(elements.userProjects.firstChild);
		}
		while (elements.userManagers.firstChild) {
			elements.userManagers.removeChild(elements.userManagers.firstChild);
		}
		while (elements.userDevelopers.firstChild) {
			elements.userDevelopers.removeChild(elements.userDevelopers.firstChild);
		}
	}

	return main;
})();