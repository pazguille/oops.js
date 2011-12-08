
(function(window, undefined) {

	Object.create = Object.create || (function(){
		var F = function(){};
		return function (obj) {
			F.prototype = obj;
			return new F();
		};
	}());

	var oop = (function(){

		var Class = function (klass) {
			var Klass, definitor;
	
			Klass = function (conf) {
				// Forget new prefix?
				var that = (this instanceof Klass) ? this : Object.create(Klass.prototype);

				var conf = conf || {};
				that.type = klass;
	
				if (Klass.parent && Klass.parent.hasOwnProperty("construct")) {					Klass.parent.construct.call(that, conf);
				}
				
				if (Klass.prototype.hasOwnProperty("construct")) {
					Klass.prototype.construct.call(that, conf);				}
	
				return that;
			};
		
			definitor = {

				"extends": function (Parent) {
					Klass.prototype = Object.create(Parent.prototype);
					Klass.parent = Parent.prototype;

					return definitor;
				},
		
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