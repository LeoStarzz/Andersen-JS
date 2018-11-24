var utils = (function () {
  return {
		getRandomInRange: function(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}
	}
})();