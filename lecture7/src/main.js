import Company from './entities/Company';
import Developer from './entities/Developer';
import Manager from './entities/Manager';
import Project from './entities/Project';
import Dom from './dom';
import { isProjectExists, isManagerExists, isDeveloperExists } from './utils';

export const main = function () {

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
	var DOM = new Dom();

	DOM.startButton.addEventListener('click', () => {
		if (!isModeSelected) {
			alert("Choose mode!");
		} else {
			isOn = true;
			const companyName = DOM.companyNameInput.value;
			const company = new Company(companyName);
			DOM.userCompanyName.innerHTML = company.name;
			DOM.userSettings.className = "hide";
			intervalID = window.setInterval(mainFunc, tick);

			function mainFunc() {
				time = time + 1;
				totalLines = 0;

				for (let i = 0; i < projects.length; i++) {
					// Если проект завершен
					if (projects[i].remainsLinesOfCode <= 0) {
						budget = budget + projects[i].cost;
						projects[i].manager.state = 'Free';
						freeManagers.push(projects[i].manager);
						DOM.userManagers.children[i].children[0].innerHTML = 'Project: ' + projects[i].manager.state;
						// Все разработчики, связанные с выполненным проектом помещаются в freeDevelopers
						for (let k = 0; k < projects[i].manager.developers.length; k++) {
							projects[i].manager.developers[k].state = 'Free';
							freeDevelopers.push(projects[i].manager.developers[k]);
						}
						// Обновление DOM для всех разработчиков, связанных с выполненным проектом
						for (let p = 0; p < DOM.userDevelopers.childElementCount; p++) {
							if (DOM.userDevelopers.children[p].children[0].innerHTML === 'Project: ' + projects[i].name) {
								DOM.userDevelopers.children[p].children[0].innerHTML = 'Project: Free';
							}
						}
						// Удаление проекта в projects и DOM
						projects.splice(projects.indexOf(projects[i]), 1);
						DOM.userProjects.removeChild(DOM.userProjects.children[i]);
					} else {
						// Если проект не завершён
						if (projects[i].manager !== null) {
							// Если есть менеждер считаем строки кода
							for (let j = 0; j < projects[i].manager.developers.length; j++) {
								totalLines = totalLines + projects[i].manager.developers[j].lines;
							}

							totalLines = totalLines * projects[i].manager.getQuotient();
						}
						// Обновляем оставшееся количество строк у проекта
						if (projects[i].remainsLinesOfCode - totalLines < 0) {
							projects[i].remainsLinesOfCode = 0;
						} else {
							projects[i].remainsLinesOfCode = projects[i].remainsLinesOfCode - totalLines;
						}
						DOM.userProjects.children[i].children[0].innerHTML = `Lines remain:
																																 ${projects[i].remainsLinesOfCode}`;
					  totalLines = 0;
					}
				}

				DOM.timeDiv.innerHTML = time;
				DOM.budgetDiv.innerHTML = budget;
				DOM.userStatistics.innerHTML = `You have ${managers.length} managers
				                                and ${developers.length} developers`;

				budget = budget - getTotalSalary();

				if (budget <= 0) {
					stop();
					alert("You lose :(");
				}
			}
		}
	});

	DOM.stopButton.addEventListener('click', () => {
		stop();
	});

	DOM.easyButton.addEventListener('click', () => {
		isModeSelected = true;
		mode = 'easy';
		budget = 1000000;
		tick = 3000;
		DOM.isEasySelected(time, budget);
	});

	DOM.mediumButton.addEventListener('click', () => {
		isModeSelected = true;
		mode = 'medium';
		budget = 500000;
		tick = 2000;
		DOM.isMediumSelected(time, budget);
	});

	DOM.hardButton.addEventListener('click', () => {
		isModeSelected = true;
		mode = 'hard';
		budget = 250000;
		tick = 1000;
		DOM.isHardSelected(time, budget);
	});

	// Добавление нового проекта
	DOM.addProjectButton.addEventListener('click', () => {
		if (isOn) {
			const projectName = DOM.projectNameInput.value;
			if (isProjectExists(projectName, projects, freeProjects)) {
				alert('Project with this name already exists!');
			} else {
				const project = new Project(projectName);
				DOM.createNewProject(project.name, project.getCost(mode), project.getLinesOfCode(mode), project.remainsLinesOfCode);
				freeProjects.push(project);
				var manager = null;

				if (freeManagers.length !== 0) {
					// Берём первого свободного менеджера на проект
					manager = freeManagers[0];
					manager.state = freeProjects[0].name;
					managers.push(manager);
					busyManagers.push(manager);
					freeProjects[0].manager = manager;
					projects.push(freeProjects[0]);

					// Берём макс. 5 свободных разработчиков на проект
					for (let i = 0; i < freeDevelopers.length; i++) {
						if (manager.developers < 5) {
							manager.developers.push(freeDevelopers[i]);
						}
					}

					// Обновляем DOM для разработчиков, взятых на проект
					var count = 0;
					for (let j = 0; j < DOM.userDevelopers.childElementCount; j++) {
						if (count < 5) {
							if (DOM.userDevelopers.children[j].children[0].innerHTML === 'Project: Free') {
								DOM.userDevelopers.children[j].children[0].innerHTML = 'Project: ' + freeProjects[0].name;
								count++;
							}
						}
					}

					freeManagers.pop();

					// Обновляем DOM для менеждера, взятого на проект
					for (let i = 0; i < DOM.userManagers.childElementCount; i++) {
						if (DOM.userManagers.children[i].children[0].innerHTML === 'Project: Free') {
							DOM.userManagers.children[i].children[0].innerHTML = 'Project: ' + freeProjects[0].name;
							break;
						}
					}
					freeProjects.shift();
				}
			}
		} else {
			alert('You need to choose mode and start the game first!');
		}
	});

	// Добавление нового менеджера
	DOM.addManagerButton.addEventListener('click', () => {
		if (isOn) {
			const managerName = DOM.managerNameInput.value;
			const managerSurname = DOM.managerSurnameInput.value;
			if (isManagerExists(managerName, managerSurname, managers)) {
				alert("Manager with this name and surname already exists!");
			} else {
				const managerExperience = DOM.managerExperienceInput.value;
				const fireButton = document.createElement('div');
				const div = document.createElement('div');
				const manager = new Manager(managerName, managerSurname, managerExperience);

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
					for (let i = 0; i < freeDevelopers.length; i++) {
						if (manager.developers < 5) {
							manager.developers.push(freeDevelopers[i]);
						}
					}

					// Обновляем DOM для разработчиков, взятых на проект
					var count = 0;
					for (let i = 0; i < DOM.userDevelopers.childElementCount; i++) {
						if (count < 5) {
							if (DOM.userDevelopers.children[i].children[0].innerHTML === 'Project: Free') {
								DOM.userDevelopers.children[i].children[0].innerHTML = 'Project: ' + freeProjects[0].name;
								count++;
							}
						}
					}
				}
				freeProjects.shift();

				DOM.createNewManager(manager.name, manager.surname, manager.experience, manager.getQuotient(), manager.state, fireButton, div);

				// Увольнение менеджера
				fireButton.addEventListener('click', () => {
					if (manager.state === 'Free') {
						// Если свободный
						managers.splice(managers.indexOf(manager), 1);
						freeManagers.splice(managers.indexOf(manager), 1);
						DOM.userManagers.removeChild(div);
						console.log(freeProjects);
					} else
					// Если занятый на проекте
					{
						managers.splice(managers.indexOf(manager), 1);
						busyManagers.splice(managers.indexOf(manager), 1);

						// Освобождаем разработчиков, работающих на этом проекте
						for (let i = 0; i < manager.developers.length; i++) {
							manager.developers[i].state = 'Free';
							freeDevelopers.push(manager.developers[i]);
						}

						for (let j = 0; j < projects.length; j++) {
							// Находим проект, связанный с этим менеджером
							if (projects[j].manager !== null) {
								if (projects[j].manager.name === manager.name && projects[j].manager.surname === manager.surname) {
									freeProjects.push(projects[j]);
									projects[j].manager = null;
									// Обновляем DOM для разработчиков, работающих на проекте
									for (let i = 0; i < DOM.userDevelopers.childElementCount; i++) {
										if (DOM.userDevelopers.children[i].children[0].innerHTML === 'Project: ' + projects[j].name) {
											DOM.userDevelopers.children[i].children[0].innerHTML = 'Project: Free';
										}
									}
									console.log(freeProjects);
								}
							}
						}
						DOM.userManagers.removeChild(div);
					}
				});
			}
		} else {
			alert('You need to choose mode and start the game first!');
		}
	});

	// Добавление нового разработчика
	DOM.addDeveloperButton.addEventListener('click', () => {
		if (isOn) {
			if (developers.length >= managers.length * 5) {
				alert("You don't have enough managers!");
			} else {
				const developerName = DOM.developerNameInput.value;
				const developerSurname = DOM.developerSurnameInput.value;
				if (isDeveloperExists(developerName, developerSurname, developers)) {
					alert("Developer with this name and surname already exists!");
				} else {
					const developerExperience = DOM.developerExperienceInput.value;
					const developer = new Developer(developerName, developerSurname, developerExperience);
					var hired = false;
					const fireButton = document.createElement('div');
					const div = document.createElement('div');

					// Если есть проект с менеджером и менее 5 разработчиков, то добавляем разработчика на проект
					for (let i = 0; i < projects.length; i++) {
						if (projects[i].manager !== null) {
							if (projects[i].manager.developers.length < 5) {
								developers.push(developer);
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
						developers.push(developer);
						freeDevelopers.push(developer);
						developer.state = 'Free';
					}

					DOM.createNewDeveloper(developer.name, developer.surname, developer.experience, developer.getLines(mode), developer.state, fireButton, div);

					// Увольнение разработчика
					fireButton.addEventListener('click', () => {
						if (developer.state === 'Free') {
							// Если свободный
							freeDevelopers.splice(developers.indexOf(developer), 1);
							developers.splice(developers.indexOf(developer), 1);
							DOM.userDevelopers.removeChild(div);
						} else
						// Если занятый на проекте
						{
							// Ищем на каком проекте работает и удаляем
							for (let i = 0; i < projects.length; i++) {
								if (projects[i].manager.developers.indexOf(developer) !== -1) {
									projects[i].manager.developers.splice(projects[i].manager.developers.indexOf(developer), 1);
								}
							}
							developers.splice(developers.indexOf(developer), 1);
							DOM.userDevelopers.removeChild(div);
						}
					});
				}
			}
		} else {
			alert('You need to choose mode and start the game first!');
		}
	});

	function stop() {
		clearInterval(intervalID);
		DOM.clearDOM();
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
		for (let i = 0; i < developers.length; i++) {
			totalSalary = totalSalary + developers[i].getSalary();
		}
		for (let i = 0; i < managers.length; i++) {
			totalSalary = totalSalary + managers[i].getSalary();
		}
		return totalSalary;
	}
}();