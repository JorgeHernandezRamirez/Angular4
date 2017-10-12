"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/catch");
var ChildDataBindingComponent = (function () {
    function ChildDataBindingComponent() {
        this.varValueChangeEventEmitter = new core_1.EventEmitter();
    }
    Object.defineProperty(ChildDataBindingComponent.prototype, "value", {
        get: function () {
            return this.varValue;
        },
        set: function (value) {
            this.varValue = value;
            this.varValueChangeEventEmitter.emit(this.varValue);
        },
        enumerable: true,
        configurable: true
    });
    ChildDataBindingComponent.prototype.decrement = function () {
        this.value--;
    };
    ChildDataBindingComponent.prototype.increment = function () {
        this.value++;
    };
    return ChildDataBindingComponent;
}());
__decorate([
    core_1.Input('value'),
    __metadata("design:type", Number)
], ChildDataBindingComponent.prototype, "varValue", void 0);
__decorate([
    core_1.Output('value'),
    __metadata("design:type", Object)
], ChildDataBindingComponent.prototype, "varValueChangeEventEmitter", void 0);
ChildDataBindingComponent = __decorate([
    core_1.Component({
        selector: 'counter-databinding',
        templateUrl: './template/counter.component.template.html',
        styleUrls: ['./style/counter.component.css']
    }),
    __metadata("design:paramtypes", [])
], ChildDataBindingComponent);
exports.ChildDataBindingComponent = ChildDataBindingComponent;
//# sourceMappingURL=counter.databinding.component.js.map