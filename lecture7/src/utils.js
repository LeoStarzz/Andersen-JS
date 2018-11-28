export function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function isProjectExists(projectName, projects, freeProjects) {
  return projects.find((item) => item.name === projectName) || freeProjects.find((item) => item.name === projectName);
}

export function isManagerExists(managerName, managerSurname, managers) {
  return managers.find((item) => item.name === managerName && item.surname === managerSurname);
}

export function isDeveloperExists(developerName, developerSurname, developers) {
  return developers.find((item) => item.name === developerName && item.surname === developerSurname);
}



