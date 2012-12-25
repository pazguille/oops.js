(function (window) {
    'use strict';

    function clone(o) {
        var obj = {},
            member;

        for (member in o) {
            if (o.hasOwnProperty(member)) {
                obj[member] = o[member];
            }
        }

        return obj;
    }

    function Class(klass) {

        function Klass(options) {

            var that = this,
                prop,
                arg = 0;

            options = options || {};

            if (Klass.parent) {
                Klass.parent.call(that, options);
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

            if (Klass.init) {
                Klass.init.call(that, options);
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
        }

        Klass.prototype.name = klass.toString();
        Klass.prototype.constructor = klass;

        var definitor = {

            'inherit': function (Parent) {
                Klass.parent = Parent;

                return definitor;
            },

            'mixin': function () {
                Klass.mixin = arguments;

                return definitor;
            },

            'init': function (func) {
                Klass.init = func;

                return definitor;
            },

            'add': function (members) {
                Klass.members = members;

                return definitor;
            },

            'build': function () {
                return Klass;
            }

        };

        return definitor;
    }

    var oops = {
        'Class': Class
    };

    /**
     * Expose OopsJS
     */
    // AMD suppport
    if (typeof window.define === 'function' && window.define.amd !== undefined) {
        window.define('oops', [], function () {
            return oops;
        });

    // CommonJS suppport
    } else if (module !== undefined && module.exports !== undefined) {
        module.exports = oops;

    // Default
    } else {
        window.oops = oops;
    }

}(this));