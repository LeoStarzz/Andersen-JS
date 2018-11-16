var module = (function () {
	return {
		isUndefined: function (param) {
			return param === undefined;
		},

		isNull: function (param) {
		  return param === null;
		},

		isNotaNumber: function (param) {
			return param !== param;
		},

		checkObject: function (object) {
			var keys = Object.keys(object);
			return keys.length === 0;
		},

		mapObject: function (object, mapFn) {
			return Object.keys(object).reduce(function (result, key) {
				result[key] = mapFn(object[key]);
				return result;
			}, {})
		},

		getRandomNumber: function (start, end) {
			return Math.floor(Math.random() * (end - start)) + start;
		},

		deepCompare: function (a, b) {
			var aProps = Object.getOwnPropertyNames(a);
			var bProps = Object.getOwnPropertyNames(b);

			if (aProps.length != bProps.length) {
				return false;
			}

			for (var i = 0; i < aProps.length; i++) {
				var propName = aProps[i];
				if (a[propName] !== b[propName]) {
					return false;
				}
			}

			return true;
		},

		deleteProperties: function (object, fn) {
			return Object.keys(object).reduce(function (result, key) {
				if (fn(object[key])) {
					result[key] = object[key];
				}
				return result;
			}, {})
		}
	};
})();

console.log(module.deleteProperties({ a: 1, b: -2, c: 2 },
	function () { if (arguments[0] > 0) { return true; } }
));

