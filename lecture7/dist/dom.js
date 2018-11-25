'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.clearDOM = clearDOM;
exports.createNewDeveloper = createNewDeveloper;
exports.createNewManager = createNewManager;
exports.createNewProject = createNewProject;
exports.isEasySelected = isEasySelected;
exports.isMediumSelected = isMediumSelected;
exports.isHardSelected = isHardSelected;
var companyNameInput = exports.companyNameInput = document.querySelector('.company-name-input');
var startButton = exports.startButton = document.querySelector('.start');
var stopButton = exports.stopButton = document.querySelector('.stop');
var easyButton = exports.easyButton = document.querySelector('.easy');
var mediumButton = exports.mediumButton = document.querySelector('.medium');
var hardButton = exports.hardButton = document.querySelector('.hard');
var timeDiv = exports.timeDiv = document.querySelector('.time');
var budgetDiv = exports.budgetDiv = document.querySelector('.budget');
var addProjectButton = exports.addProjectButton = document.querySelector('.add-project');
var projectNameInput = exports.projectNameInput = document.querySelector('.project-name-input');
var addManagerButton = exports.addManagerButton = document.querySelector('.add-manager');
var managerNameInput = exports.managerNameInput = document.querySelector('.manager-name-input');
var managerSurnameInput = exports.managerSurnameInput = document.querySelector('.manager-surname-input');
var managerExperienceInput = exports.managerExperienceInput = document.querySelector('.manager-experience-input');
var developerNameInput = exports.developerNameInput = document.querySelector('.developer-name-input');
var developerSurnameInput = exports.developerSurnameInput = document.querySelector('.developer-surname-input');
var developerExperienceInput = exports.developerExperienceInput = document.querySelector('.developer-experience-input');
var addDeveloperButton = exports.addDeveloperButton = document.querySelector('.add-developer');
var userProjects = exports.userProjects = document.querySelector('.user-projects');
var userManagers = exports.userManagers = document.querySelector('.user-managers');
var userDevelopers = exports.userDevelopers = document.querySelector('.user-developers');
var userCompanyName = exports.userCompanyName = document.querySelector('.user-company-name');
var userSettings = exports.userSettings = document.querySelector('.settings');
var userStatistics = exports.userStatistics = document.querySelector('.statistics');

function clearDOM() {
	dom.timeDiv.innerHTML = '';
	dom.budgetDiv.innerHTML = '';
	dom.companyNameInput.value = '';
	dom.projectNameInput.value = '';
	dom.managerNameInput.value = '';
	dom.managerSurnameInput.value = '';
	dom.managerExperienceInput.value = '';
	dom.developerNameInput.value = '';
	dom.developerSurnameInput.value = '';
	dom.developerExperienceInput.value = '';
	dom.easyButton.classList.remove('button-active');
	dom.mediumButton.classList.remove('button-active');
	dom.hardButton.classList.remove('button-active');
	dom.userSettings.className = "show";

	while (dom.userProjects.firstChild) {
		dom.userProjects.removeChild(dom.userProjects.firstChild);
	}
	while (dom.userManagers.firstChild) {
		dom.userManagers.removeChild(dom.userManagers.firstChild);
	}
	while (dom.userDevelopers.firstChild) {
		dom.userDevelopers.removeChild(dom.userDevelopers.firstChild);
	}
}

function createNewDeveloper(name, surname, experience, lines, state, fireButton, div) {
	fireButton.className = 'fire';
	fireButton.innerHTML = 'Fire';
	div.appendChild(document.createTextNode('Name:' + ' ' + name + ', '));
	div.appendChild(document.createTextNode('Surname:' + ' ' + surname + ', '));
	div.appendChild(document.createTextNode('Experience:' + ' ' + experience + ', '));
	div.appendChild(document.createTextNode('Lines:' + ' ' + lines + ', '));
	var p = document.createElement('p');
	p.className = "inline";
	p.appendChild(document.createTextNode('Project:' + ' ' + state));
	div.appendChild(p);
	div.appendChild(fireButton);
	dom.userDevelopers.appendChild(div);
};

function createNewManager(name, surname, experience, quotient, state, fireButton, div) {
	fireButton.className = 'fire';
	fireButton.innerHTML = 'Fire';
	div.appendChild(document.createTextNode('Name:' + ' ' + name + ', '));
	div.appendChild(document.createTextNode('Surname:' + ' ' + surname + ', '));
	div.appendChild(document.createTextNode('Experience:' + ' ' + experience + ', '));
	div.appendChild(document.createTextNode('Quotient:' + ' ' + quotient + ', '));
	var p = document.createElement('p');
	p.appendChild(document.createTextNode('Project:' + ' ' + state));
	p.className = "inline";
	div.appendChild(p);
	div.appendChild(fireButton);
	dom.userManagers.appendChild(div);
};

function createNewProject(name, cost, linesOfCode, remainsLinesOfCode) {
	var div = document.createElement('div');
	div.appendChild(document.createTextNode('Name:' + ' ' + name + ', '));
	div.appendChild(document.createTextNode('Cost:' + ' ' + cost + ', '));
	div.appendChild(document.createTextNode('Lines needed:' + ' ' + linesOfCode + ', '));
	var p = document.createElement('p');
	p.appendChild(document.createTextNode('Lines remain:' + ' ' + remainsLinesOfCode));
	div.appendChild(p);
	dom.userProjects.appendChild(div);
};

function isEasySelected(time, budget) {
	dom.timeDiv.innerHTML = time;
	dom.budgetDiv.innerHTML = budget;
	dom.easyButton.className = 'easy button-active';
	dom.mediumButton.className = 'medium';
	dom.hardButton.className = 'hard';
};

function isMediumSelected(time, budget) {
	dom.timeDiv.innerHTML = time;
	dom.budgetDiv.innerHTML = budget;
	dom.mediumButton.className = 'medium button-active';
	dom.easyButton.className = 'easy';
	dom.hardButton.className = 'hard';
};

function isHardSelected(time, budget) {
	dom.timeDiv.innerHTML = time;
	dom.budgetDiv.innerHTML = budget;
	dom.hardButton.className = 'hard button-active';
	dom.easyButton.className = 'easy';
	dom.mediumButton.className = 'medium';
}