"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getRandomInRange = getRandomInRange;
function getRandomInRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}