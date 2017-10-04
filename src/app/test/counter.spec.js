"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var counter_js_1 = require("./counter.js");
describe('Counter', function () {
    var counter;
    beforeEach(function () {
        counter = new counter_js_1.Counter();
    });
    it('should increase value of counter when incremented', function () {
        counter.increment();
        counter.value.subscribe(function (value) {
            expect(value).toEqual(1);
        });
    });
    it('should decrease value of counter when decremented', function () {
        counter.decrement();
        counter.value.subscribe(function (value) {
            expect(value).toEqual(-1);
        });
    });
});
//# sourceMappingURL=counter.spec.js.map