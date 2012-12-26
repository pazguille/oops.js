(function (window) {
    'use strict';

    function inherits(Child, superConstructor) {
        var member;

        for (member in superConstructor) {
            if (superConstructor.hasOwnProperty(member)) {
                Child.prototype[member] = superConstructor[member];
            }
        }

        Child.parent = superConstructor;
    }

    function Oops(klass) {

        if (!(this instanceof Oops)) {
            return new Oops(klass);
        }

        var that = this;

        function Klass(options) {
            var that = this;

            options = options || {};

            that.init(options);

            return that;
        }

        Klass.prototype = {};
        Klass.prototype.constructor = Klass;

        that.Klass = Klass;
        that.name = klass;

        return that;
    }

    Oops.prototype.inherits = function (Parent) {
        inherits(this.Klass, Parent.prototype);

        return this;
    };

    Oops.prototype.init = function (fn) {
        this.Klass.prototype.init = fn;

        return this;
    };

    Oops.prototype.add = function (members) {
        var that = this,
            prop;

        for (prop in members) {
            if (members.hasOwnProperty(prop)) {
                that.Klass.prototype[prop] = members[prop];
            }

        }

        return that;
    };

    Oops.prototype.build = function () {
        window[this.name] = this.Klass;

        return this.Klass;
    };

    /**
     * Expose OopsJS
     */
    // AMD suppport
    if (typeof window.define === 'function' && window.define.amd !== undefined) {
        window.define('Oops', [], function () {
            return Oops;
        });

    // CommonJS suppport
    } else if (typeof module !== 'undefined' && module.exports !== undefined) {
        module.exports = Oops;

    // Default
    } else {
        window.Oops = Oops;
    }

}(this));