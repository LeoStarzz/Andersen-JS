import { getRandomInRange } from "../utils";

export class Project {
		constructor(name = 'New project') {
			this.name = name;
			this.cost;
			this.linesOfCode;
			this.manager;
			this.remainsLinesOfCode;
		}
		getCost(mode) {
			if (mode === 'easy') {
				this.cost = getRandomInRange(30000, 100000);
				return this.cost;
			}
			else if (mode === 'medium') {
				this.cost = getRandomInRange(15000, 60000);
				return this.cost;
			}
			else if (mode === 'hard') {
				this.cost = getRandomInRange(10000, 40000);
				return this.cost;
			}
		}
		getLinesOfCode(mode) {
			if (mode === 'easy') {
				this.linesOfCode = getRandomInRange(4000, 8000);
				this.remainsLinesOfCode = this.linesOfCode;
				return this.linesOfCode;
			}
			else if (mode === 'medium') {
				this.linesOfCode = getRandomInRange(6000, 12000);
				this.remainsLinesOfCode = this.linesOfCode;
				return this.linesOfCode;
			}
			else if (mode === 'hard') {
				this.linesOfCode = getRandomInRange(10000, 20000);
				this.remainsLinesOfCode = this.linesOfCode;
				return this.linesOfCode;
			}
		}
	}

