var module = (function () {
	return {
		debounce(func, time) {
			var timer;
			return function () {
				var args = arguments;

				if (timer) {
					clearTimeout(timer);
				}

				timer = setTimeout(function () {
					func.bind(null, args);
				}, time);
			};
		},

		promisifySetTimout(time) {
			return new Promise(function (res) {
				setTimeout(res, time);
			});
		},

		promisifyXMLHttpRequest(method, url, body) {
			return new Promise(function (res, rej) {
				var xhr = new XMLHttpRequest();
				xhr.open(method, url, true);
				xhr.send(body);
				xhr.onreadystatechange = function () {
					if (xhr.readyState !== 4) {
						rej(new Error("Network Error"));
					}

					if (xhr.status === 200) {
						res(xhr.response);
					} else {
						var error = new Error(xhr.statusText);
						error.code = xhr.status;
						rej(error);
					}
				}
			});
		},

		request(url) {
			return new Promise(function (res, rej) {
				const delayTime = Math.floor(Math.random() * 10000) + 1;
				setTimeout(() => res(url), delayTime);
			});
		},

		getUrls(arr) {
			var promises = arr.map(request);
			var result = [];

			return new Promise(function () {
				promises.forEach(function (promise) {
					promise
						.then(function (result) {
							result.push(result);
							if (result.length === promises.length) {
								res(result);
							}
						})
						.catch(function () {
							result.push(null);
							if (result.length === promises.length) {
								res(result);
							}
						});
				});
			});
		}
	}
})();


