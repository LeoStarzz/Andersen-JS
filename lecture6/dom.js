var dom = (function () {
	return {
		companyNameInput: document.querySelector('.company-name-input'),
		startButton: document.querySelector('.start'),
		stopButton: document.querySelector('.stop'),
		easyButton: document.querySelector('.easy'),
		mediumButton: document.querySelector('.medium'),
		hardButton: document.querySelector('.hard'),
		timeDiv: document.querySelector('.time'),
		budgetDiv: document.querySelector('.budget'),
		addProjectButton: document.querySelector('.add-project'),
		projectNameInput: document.querySelector('.project-name-input'),
		addManagerButton: document.querySelector('.add-manager'),
		managerNameInput: document.querySelector('.manager-name-input'),
		managerSurnameInput: document.querySelector('.manager-surname-input'),
		managerExperienceInput: document.querySelector('.manager-experience-input'),
		developerNameInput: document.querySelector('.developer-name-input'),
		developerSurnameInput: document.querySelector('.developer-surname-input'),
		developerExperienceInput: document.querySelector('.developer-experience-input'),
		addDeveloperButton: document.querySelector('.add-developer'),
		userProjects: document.querySelector('.user-projects'),
		userManagers: document.querySelector('.user-managers'),
		userDevelopers: document.querySelector('.user-developers'),
		userCompanyName: document.querySelector('.user-company-name'),
		userSettings: document.querySelector('.settings'),
		userStatistics: document.querySelector('.statistics'),

		clearDOM() {
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
			dom.userCompanyName.innerHTML = '';

			while (dom.userProjects.firstChild) {
				dom.userProjects.removeChild(dom.userProjects.firstChild);
			}
			while (dom.userManagers.firstChild) {
				dom.userManagers.removeChild(dom.userManagers.firstChild);
			}
			while (dom.userDevelopers.firstChild) {
				dom.userDevelopers.removeChild(dom.userDevelopers.firstChild);
			}
		},

		createNewDeveloper(name, surname, experience, lines, state, fireButton, div) {
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
		},

		createNewManager(name, surname, experience, quotient, state, fireButton, div) {
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
		},

		createNewProject(name, cost, linesOfCode, linesOfCodeLeft) {
			var div = document.createElement('div');
			div.appendChild(document.createTextNode('Name:' + ' ' + name + ', '));
			div.appendChild(document.createTextNode('Cost:' + ' ' + cost + ', '));
			div.appendChild(document.createTextNode('Lines needed:' + ' ' + linesOfCode + ', '));
			var p = document.createElement('p');
			p.appendChild(document.createTextNode('Lines left:' + ' ' + linesOfCodeLeft));
			div.appendChild(p);
			dom.userProjects.appendChild(div);
		},

		isEasySelected(time, budget) {
			dom.timeDiv.innerHTML = time;
			dom.budgetDiv.innerHTML = budget;
			dom.easyButton.className = 'easy button-active';
			dom.mediumButton.className = 'medium';
			dom.hardButton.className = 'hard';
		},

		isMediumSelected(time, budget) {
			dom.timeDiv.innerHTML = time;
			dom.budgetDiv.innerHTML = budget;
			dom.mediumButton.className = 'medium button-active';
			dom.easyButton.className = 'easy';
			dom.hardButton.className = 'hard';
		},

		isHardSelected(time, budget) {
			dom.timeDiv.innerHTML = time;
			dom.budgetDiv.innerHTML = budget;
			dom.hardButton.className = 'hard button-active';
			dom.easyButton.className = 'easy';
			dom.mediumButton.className = 'medium';
		},
	}
})();