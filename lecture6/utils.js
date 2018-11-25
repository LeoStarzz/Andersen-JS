var utils = (function () {
	return {
		getRandomInRange(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		},

		isProjectExists(projectName, projects, freeProjects) {
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
		},

		isManagerExists(managerName, managerSurname, managers) {
			for (var i = 0; i < managers.length; i++) {
				if (managerName === managers[i].name && managerSurname === managers[i].surname) {
					return true;
				}
			}
			return false;
		},

		isDeveloperExists(developerName, developerSurname, developers) {
			for (var i = 0; i < developers.length; i++) {
				if (developerName === developers[i].name && developerSurname === developers[i].surname) {
					return true;
				}
			}
			return false;
		}
	}
})();