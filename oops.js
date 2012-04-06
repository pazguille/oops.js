;(function (exports) {
	"use strict";

	Object.create = Object.create || (function(){
		var F = function () {};
		return function (obj) {
			F.prototype = obj;
			return new F();
		};
	}());

	var oops = (function () {

		var clone = function (o) {
			var obj = {}, x;
			for (x in o) {
				obj[x] = o[x]; 
			};
			return obj;
		};
		var Class = function (klass) {

			var Klass = function (conf) {

				var that = this,
					conf = conf || {},
					prop,
					arg = 0;

				if (Klass.parent) {
					Klass.parent.call(that, conf);
					Klass.parent = clone(that);
				}

				that.type = klass;

				if (Klass.mixin) {
					for (arg; arg < Klass.mixin.length; arg += 1) {
						for (prop in Klass.mixin[arg]) {
							if (Klass.mixin[arg].hasOwnProperty(prop)) {
								that[prop] = Klass.mixin[arg][prop];
							}
						}
					}
				}

				if (Klass["init"]) {
					Klass["init"].call(that, conf);
				}

				if (Klass.members) {
					for (prop in Klass.members) {
						if (Klass.members.hasOwnProperty(prop)) {
							that[prop] = Klass.members[prop];
						}
					}
				}

				delete Klass.init;
				delete Klass.mixin;
				delete Klass.members;

				return that;
			},
		
			definitor = {

				"inherit": function (Parent) {
					Klass.parent = Parent;

					return definitor;
				},

				"mixin": function () {
					Klass.mixin = arguments;

					return definitor;
				},

				"init": function (func) {
					Klass.init = func;

					return definitor;
				},

				"add": function (members) {
					Klass.members = members;

					return definitor;
				},

				"build": function () {
					return Klass;
				}
		
		    };
		
			return definitor;
		
		};

		// Core
		return {
			"Class": Class
		};

	}());

	exports.oops = exports.os = oops;

}(window));