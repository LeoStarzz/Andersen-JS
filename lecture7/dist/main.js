'use strict';

var _Company = require('../entities/Company');

var _Company2 = _interopRequireDefault(_Company);

var _Developer = require('../entities/Developer');

var _Developer2 = _interopRequireDefault(_Developer);

var _Manager = require('../entities/Manager');

var _Manager2 = _interopRequireDefault(_Manager);

var _Project = require('../entities/Project');

var _Project2 = _interopRequireDefault(_Project);

var _dom = require('dom');

var dom = _interopRequireWildcard(_dom);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function main() {

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
			var mainFunc = function mainFunc() {
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
								dom.userDevelopers.children[p].children[0].innerHTML = 'Project: Free';
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
						dom.userProjects.children[i].children[0].innerHTML = 'Lines remain:\'\n\t\t\t\t\t\t                                                     ' + projects[i].remainsLinesOfCode;
						totalLines = 0;
					}
				}

				dom.timeDiv.innerHTML = time;
				dom.budgetDiv.innerHTML = budget;
				dom.userStatistics.innerHTML = 'You have ' + managers.length + ' managers\n\t\t\t\t                                and ' + developers.length + ' developers';

				budget = budget - getTotalSalary();

				if (budget <= 0) {
					stop();
					alert("You lose :(");
				}
			};

			isOn = true;
			var companyName = dom.companyNameInput.value;
			var company = new _Company2.default(companyName);
			dom.userCompanyName.innerHTML = company.name;
			dom.userSettings.className = "hide";
			intervalID = window.setInterval(mainFunc, tick);
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
			var project = new _Project2.default(projectName);

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
						if (dom.userDevelopers.children[j].children[0].innerHTML === 'Project: Free') {
							dom.userDevelopers.children[j].children[0].innerHTML = 'Project: ' + freeProjects[0].name;
							count++;
						}
					}
				}

				freeManagers.pop();

				for (var _i = 0; _i < dom.userManagers.childElementCount; _i++) {
					if (dom.userManagers.children[_i].children[0].innerHTML === 'Project: Free') {
						dom.userManagers.children[_i].children[0].innerHTML = 'Project: ' + freeProjects[0].name;
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

			var manager = new _Manager2.default(managerName, managerSurname, managerExperience);
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
				for (var _i2 = 0; _i2 < dom.userDevelopers.childElementCount; _i2++) {
					if (count < 5) {
						if (dom.userDevelopers.children[_i2].children[0].innerHTML === 'Project: Free') {
							dom.userDevelopers.children[_i2].children[0].innerHTML = 'Project: ' + freeProjects[0].name;
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
					for (var _i3 = 0; _i3 < manager.developers.length; _i3++) {
						manager.developers[_i3].state = 'Free';
						freeDevelopers.push(manager.developers[_i3]);
					}

					for (var j = 0; j < projects.length; j++) {
						if (projects[j].manager !== null) {
							if (projects[j].manager.name === manager.name && projects[j].manager.surname === manager.surname) {
								freeProjects.push(projects[j]);
								projects[j].manager = null;
								for (var _i4 = 0; _i4 < dom.userDevelopers.childElementCount; _i4++) {
									if (dom.userDevelopers.children[_i4].children[0].innerHTML === 'Project: ' + projects[j].name) {
										dom.userDevelopers.children[_i4].children[0].innerHTML = 'Project: Free';
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
				var developer = new _Developer2.default(developerName, developerSurname, developerExperience);
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
						for (var _i5 = 0; _i5 < projects.length; _i5++) {
							if (projects[_i5].manager.developers.indexOf(developer) !== -1) {
								projects[_i5].manager.developers.splice(projects[_i5].manager.developers.indexOf(developer), 1);
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
		for (var _i6 = 0; _i6 < managers.length; _i6++) {
			totalSalary = totalSalary + managers[_i6].getSalary();
		}
		return totalSalary;
	}
}