(function(window, undefined) {

	function pervitin() {};

	pervitin.prototype.generate = function(param) {
		var el = document.createElement(param.tagName);

		if(param.id) {
			el.id = param.id;
		}

		if(param.className) {
			el.className = param.className;
		}

		if(param.text) {
			el.textContent = param.text;
		}

		if(param.attr) {
			Object.keys(param.attr).forEach(function(key){
				el.setAttribute(key, param.attr[key]);
			});
		}

		if(param.el && param.el.length) {
			for(var i in param.el) {
				el.appendChild(this.generate(param.el[i]));
			}
		}

		return el;
	};

	pervitin.prototype.render = function(param) {

		if(param.length != 1) {
			var df = document.createDocumentFragment();

			for(var i in param) {
				df.appendChild(this.generate(param[i]));
			}

			return df;
		} else {
			return this.generate(param[0]);
		}

	};

	if(typeof define === 'function' && define.amd) {
		define('pervitin', [], function() {
			return pervitin;
		});
	}

	if(window && !window.pervitin) {
		window.pervitin = pervitin;
	}

	return pervitin;
})(window);