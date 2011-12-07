(function(window, undefined) {

  var oop = (function(){

	var Class = function (klass) {
		var Klass, definitor;

		Klass = function (conf) {
			var that = this;
			var conf = conf || {};
			this.type = klass;

			if (Klass.parent && Klass.parent.hasOwnProperty("construct")) {				Klass.parent.construct.call(this, conf);
			}
			
			if (Klass.prototype.hasOwnProperty("construct")) {
				Klass.prototype.construct.call(this, conf);			}

			return this;
		};
	
		definitor = {
	
			"extends": (function () {
				var F = function () {};
				return function (Parent) {
					F.prototype = Parent.prototype;
					Klass.prototype = new F();
					Klass.parent = Parent.prototype;
					Klass.prototype.constructor = Klass;
	
					return definitor;
				}
			}()),
	
			"construct": function (func) {
				Klass.prototype.construct = func;
	
				return definitor;
			},
	
			"method": function (member, param) {
				Klass.prototype[member] = param;
	
				return definitor;
			},

			"build": function () {
				return Klass;
			}
	
	    };
	
	    return definitor;
	
	};

    var core = {
		"Class": Class
    };

    return core;

  })();

  window.oop = oop;

})(window);