"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var JHR = (function () {
    function JHR() {
        this._count = 0;
        this._value = new BehaviorSubject_1.BehaviorSubject(this._count);
    }
    JHR.prototype.increment = function () {
        this._value.next(++this._count);
    };
    JHR.prototype.decrement = function () {
        this._value.next(--this._count);
    };
    Object.defineProperty(JHR.prototype, "value", {
        get: function () {
            return this._value.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    return JHR;
}());
exports.JHR = JHR;
//# sourceMappingURL=MyTest.js.map