export const companyNameInput = document.querySelector('.company-name-input');
export const startButton = document.querySelector('.start');
export const stopButton = document.querySelector('.stop');
export const easyButton = document.querySelector('.easy');
export const mediumButton = document.querySelector('.medium');
export const hardButton = document.querySelector('.hard');
export const timeDiv = document.querySelector('.time');
export const budgetDiv = document.querySelector('.budget');
export const addProjectButton = document.querySelector('.add-project');
export const projectNameInput = document.querySelector('.project-name-input');
export const addManagerButton = document.querySelector('.add-manager');
export const managerNameInput = document.querySelector('.manager-name-input');
export const managerSurnameInput = document.querySelector('.manager-surname-input');
export const managerExperienceInput = document.querySelector('.manager-experience-input');
export const developerNameInput = document.querySelector('.developer-name-input');
export const developerSurnameInput = document.querySelector('.developer-surname-input');
export const developerExperienceInput = document.querySelector('.developer-experience-input');
export const addDeveloperButton = document.querySelector('.add-developer');
export const userProjects = document.querySelector('.user-projects');
export const userManagers = document.querySelector('.user-managers');
export const userDevelopers = document.querySelector('.user-developers');
export const userCompanyName = document.querySelector('.user-company-name');
export const userSettings = document.querySelector('.settings');
export const userStatistics = document.querySelector('.statistics');

export function clearDOM() {
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

export function createNewDeveloper(name, surname, experience, lines, state, fireButton, div) {
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

export function createNewManager(name, surname, experience, quotient, state, fireButton, div) {
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

export function createNewProject(name, cost, linesOfCode, remainsLinesOfCode) {
	var div = document.createElement('div');
	div.appendChild(document.createTextNode('Name:' + ' ' + name + ', '));
	div.appendChild(document.createTextNode('Cost:' + ' ' + cost + ', '));
	div.appendChild(document.createTextNode('Lines needed:' + ' ' + linesOfCode + ', '));
	var p = document.createElement('p');
	p.appendChild(document.createTextNode('Lines remain:' + ' ' + remainsLinesOfCode));
	div.appendChild(p);
	dom.userProjects.appendChild(div);
};

export function isEasySelected(time, budget) {
	dom.timeDiv.innerHTML = time;
	dom.budgetDiv.innerHTML = budget;
	dom.easyButton.className = 'easy button-active';
	dom.mediumButton.className = 'medium';
	dom.hardButton.className = 'hard';
};

export function isMediumSelected(time, budget) {
	dom.timeDiv.innerHTML = time;
	dom.budgetDiv.innerHTML = budget;
	dom.mediumButton.className = 'medium button-active';
	dom.easyButton.className = 'easy';
	dom.hardButton.className = 'hard';
};

export function isHardSelected(time, budget) {
	dom.timeDiv.innerHTML = time;
	dom.budgetDiv.innerHTML = budget;
	dom.hardButton.className = 'hard button-active';
	dom.easyButton.className = 'easy';
	dom.mediumButton.className = 'medium';
}
