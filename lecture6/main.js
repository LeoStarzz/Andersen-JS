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
			error('Choose mode!');
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
					// Если проект завершен
					if (projects[i].linesOfCodeLeft <= 0) {
						budget = budget + projects[i].cost;
						projects[i].manager.state = 'Free';
						freeManagers.push(projects[i].manager);
						dom.userManagers.children[i].children[0].innerHTML = 'Project: ' + projects[i].manager.state;
						// Все разработчики, связанные с выполненным проектом помещаются в freeDevelopers
						for (var k = 0; k < projects[i].manager.developers.length; k++) {
							projects[i].manager.developers[k].state = 'Free';
							freeDevelopers.push(projects[i].manager.developers[k]);
						}
						// Обновление DOM для всех разработчиков, связанных с выполненным проектом
						for (var p = 0; p < dom.userDevelopers.childElementCount; p++) {
							if (dom.userDevelopers.children[p].children[0].innerHTML === 'Project: ' + projects[i].name) {
								dom.userDevelopers.children[p].children[0].innerHTML = 'Project: Free';
							}
						}
						// Удаление проекта в projects и DOM
						projects.splice(projects.indexOf(projects[i]), 1);
						dom.userProjects.removeChild(dom.userProjects.children[i]);
					} else {
						// Если проект не завершён
						if (projects[i].manager !== null) {
							// Если есть менеждер считаем строки кода
							for (var j = 0; j < projects[i].manager.developers.length; j++) {
								totalLines = totalLines + projects[i].manager.developers[j].lines;
							}

							totalLines = totalLines * projects[i].manager.getQuotient();
						}
						// Обновляем оставшееся количество строк у проекта
						if (projects[i].linesOfCodeLeft - totalLines < 0) {
							projects[i].linesOfCodeLeft = 0;
						} else {
							projects[i].linesOfCodeLeft = Math.round(projects[i].linesOfCodeLeft - totalLines);
						}
						dom.userProjects.children[i].children[0].innerHTML = 'Lines left: ' + projects[i].linesOfCodeLeft;
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

	// Добавление нового проекта
	dom.addProjectButton.addEventListener('click', function () {
		if (isOn) {
			var projectName = dom.projectNameInput.value;
			if (utils.isProjectExists(projectName, projects, freeProjects)) {
				error('Project with this name already exists!');
			} else {
				var project = new Project(projectName);

				dom.createNewProject(project.name, project.getCost(mode), project.getLinesOfCode(mode), project.linesOfCodeLeft);

				freeProjects.push(project);
				var manager = null;
				if (freeManagers.length !== 0) {
					// Берём первого свободного менеджера на проект
					manager = freeManagers[0];
					manager.state = freeProjects[0].name;
					busyManagers.push(manager);
					freeProjects[0].manager = manager;
					projects.push(freeProjects[0]);

					// Берём макс. 5 свободных разработчиков на проект
					for (var i = 0; i < freeDevelopers.length; i++) {
						if (manager.developers < 5) {
							manager.developers.push(freeDevelopers[i]);
						}
					}

					// Обновляем DOM для разработчиков, взятых на проект
					var count = 0;
					for (var j = 0; j < dom.userDevelopers.childElementCount; j++) {
						if (count < 5) {
							if (dom.userDevelopers.children[j].children[0].innerHTML === 'Project: Free') {
								dom.userDevelopers.children[j].children[0].innerHTML = 'Project: ' + freeProjects[0].name;
								count++;
							}
						}
					}

					freeManagers.pop();

					// Обновляем DOM для менеждера, взятого на проект
					for (var i = 0; i < dom.userManagers.childElementCount; i++) {
						if (dom.userManagers.children[i].children[0].innerHTML === 'Project: Free') {
							dom.userManagers.children[i].children[0].innerHTML = 'Project: ' + freeProjects[0].name;
							break;
						}
					}
					freeProjects.shift();
				}
			}
		} else {
			error("You need to choose mode and start the game first!");
		}
	});

	// Добавление нового менеджера
	dom.addManagerButton.addEventListener('click', function () {
		if (isOn) {
			var managerName = dom.managerNameInput.value;
			var managerSurname = dom.managerSurnameInput.value;
			if (utils.isManagerExists(managerName, managerSurname, managers)) {
				error("Manager with this name and surname already exists!");
			} else {
				var managerExperience = dom.managerExperienceInput.value;
				var fireButton = document.createElement('div');
				var div = document.createElement('div');

				var manager = new Manager(managerName, managerSurname, managerExperience);
				if (freeProjects.length === 0) {
					// Если нет свободных проектов
					manager.state = 'Free';
					managers.push(manager);
					freeManagers.push(manager);
				} else
				  // Если есть свободный проект
				{
					manager.state = freeProjects[0].name;
					managers.push(manager);
					busyManagers.push(manager);
					freeProjects[0].manager = manager;
					projects.push(freeProjects[0]);

					// Берём макс. 5 свободных разработчиков на проект
					for (var i = 0; i < freeDevelopers.length; i++) {
						if (manager.developers < 5) {
							manager.developers.push(freeDevelopers[i]);
						}
					}

					// Обновляем DOM для разработчиков, взятых на проект
					var count = 0;
					for (var i = 0; i < dom.userDevelopers.childElementCount; i++) {
						if (count < 5) {
							if (dom.userDevelopers.children[i].children[0].innerHTML === 'Project: Free') {
								dom.userDevelopers.children[i].children[0].innerHTML = 'Project: ' + freeProjects[0].name;
								count++;
							}
						}
					}
				}
				freeProjects.shift();

				dom.createNewManager(manager.name, manager.surname, manager.experience, manager.getQuotient(), manager.state, fireButton, div);

				// Увольнение менеджера
				fireButton.addEventListener('click', function () {
					if (manager.state === 'Free') {
						// Если свободный
						managers.splice(managers.indexOf(manager), 1);
						freeManagers.splice(managers.indexOf(manager), 1);
						dom.userManagers.removeChild(div);
						console.log(freeProjects);
					} else
					// Если занятый на проекте
					{
						managers.splice(managers.indexOf(manager), 1);
						busyManagers.splice(managers.indexOf(manager), 1);

						// Освобождем разработчиков, работающих на этом проекте
						for (var i = 0; i < manager.developers.length; i++) {
							manager.developers[i].state = 'Free';
							freeDevelopers.push(manager.developers[i]);
						}

						for (var j = 0; j < projects.length; j++) {
							// Находим проект, связанный с этим менеджером
							if (projects[j].manager !== null) {
								if (projects[j].manager.name === manager.name && projects[j].manager.surname === manager.surname) {
									freeProjects.push(projects[j]);
									projects[j].manager = null;
									// Обновляем DOM для разработчиков, работающих на проекте
									for (var i = 0; i < dom.userDevelopers.childElementCount; i++) {
										if (dom.userDevelopers.children[i].children[0].innerHTML === 'Project: ' + projects[j].name) {
											dom.userDevelopers.children[i].children[0].innerHTML = 'Project: Free';
										}
									}
									console.log(freeProjects);
								}
							}
						}
						dom.userManagers.removeChild(div);
					}
				});
			}
		} else {
			error("You need to choose mode and start the game first!");
		}
	});

	// Добавление нового разработчика
	dom.addDeveloperButton.addEventListener('click', function () {
		if (isOn) {
			if (developers.length >= managers.length * 5) {
				error("You don't have enough managers!");
			}
			else {
				var developerName = dom.developerNameInput.value;
				var developerSurname = dom.developerSurnameInput.value;
				if (utils.isDeveloperExists(developerName, developerSurname, developers)) {
					error("Developer with this name and surname already exists!");
				} else {
					var developerExperience = dom.developerExperienceInput.value;
					var developer = new Developer(developerName, developerSurname, developerExperience);
					var hired = false;
					var fireButton = document.createElement('div');
					var div = document.createElement('div');

					// Если есть проект с менеджером и менее 5 разработчиков, то добавляем разработчика на проект
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

					// Если подходящего проекта не нашлось
					if (hired === false) {
						freeDevelopers.push(developer);
						developer.state = 'Free';
					}

					dom.createNewDeveloper(developer.name, developer.surname, developer.experience, developer.getLines(mode), developer.state, fireButton, div);

					// Увольнение разработчика
					fireButton.addEventListener('click', function () {
						if (developer.state === 'Free') {
							// Если свободный
							freeDevelopers.splice(developers.indexOf(developer), 1);
							developers.splice(developers.indexOf(developer), 1);
							dom.userDevelopers.removeChild(div);
						} else
						// Если занятый на проекте
						{
							// Ищем на каком проекте работает и удаляем
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
			}
		} else {
			error('You need to choose mode and start the game first!');
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
		busyDevelopers = [];
		busyManagers = [];
		freeDevelopers = [];
		freeManagers = [];
		freeProjects = [];
		isOn = false;
	}

	function getTotalSalary() {
		totalSalary = 0;
		for (var i = 0; i < developers.length; i++) {
			totalSalary = totalSalary + developers[i].getSalary();
		}
		for (var j = 0; j < managers.length; j++) {
			totalSalary = totalSalary + managers[j].getSalary();
		}
		return totalSalary;
	}

	function error(text) {
		dom.error.innerHTML = 'Error: ' + text;
		setTimeout(function() {
			dom.error.innerHTML = '';
		}, 2000);
	}

	return main;
})();