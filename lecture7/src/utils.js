export function getRandomInRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function isProjectExists(projectName, projects, freeProjects) {
	for (var i = 0; i < projects.length; i++) {
		if (projectName === projects[i].name) {
			return true;
		}
	}

	for (var j = 0; j < freeProjects.length; j++) {
		if (projectName === freeProjects[j].name) {
			return true;
		}
	}

	return false;
}

export function isManagerExists(managerName, managerSurname, managers) {
	for (var i = 0; i < managers.length; i++) {
		if (managerName === managers[i].name && managerSurname === managers[i].surname) {
			return true;
		}
	}
	return false;
}

export function isDeveloperExists(developerName, developerSurname, developers) {
	for (var i = 0; i < developers.length; i++) {
		if (developerName === developers[i].name && developerSurname === developers[i].surname) {
			return true;
		}
	}
	return false;
}


