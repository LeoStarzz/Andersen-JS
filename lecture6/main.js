var main = (function () {

	var isOn = false;
	var tick = 0;
	var mode = undefined;
	var budget = 0;
	var time = 0;
	var intervalID;
	var totalSalary = 0;
	var totalLines = 0;
	var isModeSelected = false;

	var projects = [];
	var managers = [];
	var developers = [];
	var busyDevelopers = [];
	var busyManagers = [];
	var freeDevelopers = [];
	var freeManagers = [];
	var freeProjects = [];

	dom.startButton.addEventListener('click', function () {
		if (!isModeSelected) {
			alert("Choose mode!");
		} else {
			isOn = true;
			var companyName = dom.companyNameInput.value;
			var company = new Company(companyName);
			dom.userCompanyName.innerHTML = company.name;
			dom.userSettings.className = "hide";
			intervalID = window.setInterval(mainFunc, tick);

			function mainFunc() {
				time = time + 1;
				totalLines = 0;

				for (var i = 0; i < projects.length; i++) {
					if (projects[i].remainsLinesOfCode <= 0) {
						budget = budget + projects[i].cost;
						projects[i].manager.state = 'Free';
						freeManagers.push(projects[i].manager);
						dom.userManagers.children[i].children[0].innerHTML = 'Project: ' + projects[i].manager.state;
						for (var k = 0; k < projects[i].manager.developers.length; k++) {
							projects[i].manager.developers[k].state = 'Free';
							freeDevelopers.push(projects[i].manager.developers[k]);
						}
						for (var p = 0; p < dom.userDevelopers.childElementCount; p++) {
							if (dom.userDevelopers.children[p].children[0].innerHTML === 'Project: ' + projects[i].name) {
								dom.userDevelopers.children[p].children[0].innerHTML = 'Project: ' + 'Free';
							}
						}
						projects.splice(projects.indexOf(projects[i]), 1);
						dom.userProjects.removeChild(dom.userProjects.children[i]);
					} else {
						if (projects[i].manager !== null) {
							for (var j = 0; j < projects[i].manager.developers.length; j++) {
								totalLines = totalLines + projects[i].manager.developers[j].lines;
							}

							totalLines = totalLines * projects[i].manager.getQuotient();
						}
						if (projects[i].remainsLinesOfCode - totalLines < 0) {
							projects[i].remainsLinesOfCode = 0;
						} else {
							projects[i].remainsLinesOfCode = projects[i].remainsLinesOfCode - totalLines;
						}
						dom.userProjects.children[i].children[0].innerHTML = 'Lines remain: ' + projects[i].remainsLinesOfCode;
						totalLines = 0;
					}
				}

				dom.timeDiv.innerHTML = time;
				dom.budgetDiv.innerHTML = budget;
				dom.userStatistics.innerHTML = 'You have ' + managers.length + ' managers and ' + developers.length + ' developers';

				budget = budget - getTotalSalary();

				if (budget <= 0) {
					stop();
					alert("You lose :(");
				}
			}
		}
	});

	dom.stopButton.addEventListener('click', function () {
		stop();
	});

	dom.easyButton.addEventListener('click', function () {
		isModeSelected = true;
		mode = 'easy';
		budget = 1000000;
		tick = 3000;
		dom.isEasySelected(time, budget);
	});

	dom.mediumButton.addEventListener('click', function () {
		isModeSelected = true;
		mode = 'medium';
		budget = 500000;
		tick = 2000;
		dom.isMediumSelected(time, budget);
	});

	dom.hardButton.addEventListener('click', function () {
		isModeSelected = true;
		mode = 'hard';
		budget = 250000;
		tick = 1000;
		dom.isHardSelected(time, budget);
	});

	dom.addProjectButton.addEventListener('click', function () {
		if (isOn) {
			var projectName = dom.projectNameInput.value;
			var project = new Project(projectName);

			dom.createNewProject(project.name, project.getCost(mode), project.getLinesOfCode(mode), project.remainsLinesOfCode);

			freeProjects.push(project);
			var manager = null;
			if (freeManagers.length !== 0) {
				manager = freeManagers[0];
				manager.state = freeProjects[0].name;
				managers.push(manager);
				busyManagers.push(manager);
				freeProjects[0].manager = manager;
				projects.push(freeProjects[0]);


				for (var i = 0; i < freeDevelopers.length; i++) {
					if (manager.developers < 5) {
						manager.developers.push(freeDevelopers[i]);
					}
				}
				var count = 0;
				for (var j = 0; j < dom.userDevelopers.childElementCount; j++) {
					if (count < 5) {
						if (dom.userDevelopers.children[j].children[0].innerHTML === 'Project: ' + 'Free') {
							dom.userDevelopers.children[j].children[0].innerHTML = 'Project: ' + freeProjects[0].name;
							count++;
						}
					}
				}

				freeManagers.pop();

				for (var i = 0; i < dom.userManagers.childElementCount; i++) {
					if (dom.userManagers.children[i].children[0].innerHTML === 'Project: ' + 'Free') {
						dom.userManagers.children[i].children[0].innerHTML = 'Project: ' + freeProjects[0].name;
						break;
					}
				}
				freeProjects.shift();
			}
		} else {
			alert('You need to choose mode and start the game first!');
		}
	});

	dom.addManagerButton.addEventListener('click', function () {
		if (isOn) {
			var managerName = dom.managerNameInput.value;
			var managerSurname = dom.managerSurnameInput.value;
			var managerExperience = dom.managerExperienceInput.value;
			var fireButton = document.createElement('div');
			var div = document.createElement('div');

			var manager = new Manager(managerName, managerSurname, managerExperience);
			if (freeProjects.length === 0) {
				manager.state = 'Free';
				managers.push(manager);
				freeManagers.push(manager);
			} else {
				manager.state = freeProjects[0].name;
				managers.push(manager);
				busyManagers.push(manager);
				freeProjects[0].manager = manager;
				projects.push(freeProjects[0]);

				for (var i = 0; i < freeDevelopers.length; i++) {
					if (manager.developers < 5) {
						manager.developers.push(freeDevelopers[i]);
					}
				}
				var count = 0;
				for (var i = 0; i < dom.userDevelopers.childElementCount; i++) {
					if (count < 5) {
						if (dom.userDevelopers.children[i].children[0].innerHTML === 'Project: ' + 'Free') {
							dom.userDevelopers.children[i].children[0].innerHTML = 'Project: ' + freeProjects[0].name;
							count++;
						}
					}
				}
			}
			freeProjects.shift();

			dom.createNewManager(manager.name, manager.surname, manager.experience, manager.getQuotient(), manager.state, fireButton, div);

			fireButton.addEventListener('click', function () {
				if (manager.state === 'Free') {
					managers.splice(managers.indexOf(manager), 1);
					freeManagers.splice(managers.indexOf(manager), 1);
					dom.userManagers.removeChild(div);
					console.log(freeProjects);
				} else {
					managers.splice(managers.indexOf(manager), 1);
					busyManagers.splice(managers.indexOf(manager), 1);
					for (var i = 0; i < manager.developers.length; i++) {
						manager.developers[i].state = 'Free';
						freeDevelopers.push(manager.developers[i]);
					}

					for (var j = 0; j < projects.length; j++) {
						if (projects[j].manager !== null) {
							if (projects[j].manager.name === manager.name && projects[j].manager.surname === manager.surname) {
								freeProjects.push(projects[j]);
								projects[j].manager = null;
								for (var i = 0; i < dom.userDevelopers.childElementCount; i++) {
									if (dom.userDevelopers.children[i].children[0].innerHTML === 'Project: ' + projects[j].name) {
										dom.userDevelopers.children[i].children[0].innerHTML = 'Project: ' + 'Free';
									}
								}
								console.log(freeProjects);
							}
						}
					}
					dom.userManagers.removeChild(div);
				}
			});
		} else {
			alert('You need to choose mode and start the game first!');
		}
	});

	dom.addDeveloperButton.addEventListener('click', function () {
		if (isOn) {
			if (developers.length >= managers.length * 5) {
				alert("You don't have enough managers!");
			} else {
				var developerName = dom.developerNameInput.value;
				var developerSurname = dom.developerSurnameInput.value;
				var developerExperience = dom.developerExperienceInput.value;
				var developer = new Developer(developerName, developerSurname, developerExperience);
				var hired = false;
				var fireButton = document.createElement('div');
				var div = document.createElement('div');

				for (var i = 0; i < projects.length; i++) {
					if (projects[i].manager !== null) {
						if (projects[i].manager.developers.length < 5) {
							projects[i].manager.developers.push(developer);
							developer.state = projects[i].name;
							busyDevelopers.push(developer);
							hired = true;
							break;
						}
					}
				}

				if (hired === false) {
					freeDevelopers.push(developer);
					developer.state = 'Free';
				}

				dom.createNewDeveloper(developer.name, developer.surname, developer.experience, developer.getLines(mode), developer.state, fireButton, div);

				fireButton.addEventListener('click', function () {
					if (developer.state === 'Free') {
						freeDevelopers.splice(developers.indexOf(developer), 1);
						developers.splice(developers.indexOf(developer), 1);
						dom.userDevelopers.removeChild(div);
					} else {
						for (var i = 0; i < projects.length; i++) {
							if (projects[i].manager.developers.indexOf(developer) !== -1) {
								projects[i].manager.developers.splice(projects[i].manager.developers.indexOf(developer), 1);
							}
						}
						developers.splice(developers.indexOf(developer), 1);
						dom.userDevelopers.removeChild(div);
					}
				});
				developers.push(developer);
			}
		} else {
			alert('You need to choose mode and start the game first!');
		}
	});

	function stop() {
		clearInterval(intervalID);
		dom.clearDOM();
		time = 0;
		budget = 0;
		projects = [];
		managers = [];
		developers = [];
		isOn = false;
	}

	function getTotalSalary() {
		totalSalary = 0;
		for (var i = 0; i < developers.length; i++) {
			totalSalary = totalSalary + developers[i].getSalary();
		}
		for (var i = 0; i < managers.length; i++) {
			totalSalary = totalSalary + managers[i].getSalary();
		}
		return totalSalary;
	}

	return main;
})();