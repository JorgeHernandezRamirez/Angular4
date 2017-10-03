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
var DashboardCounterComponent = (function () {
    function DashboardCounterComponent() {
        this.valueCounter_ = 10;
    }
    Object.defineProperty(DashboardCounterComponent.prototype, "valueCounter", {
        get: function () {
            return this.valueCounter_;
        },
        set: function (valueCounter_) {
            this.valueCounter_ = valueCounter_;
        },
        enumerable: true,
        configurable: true
    });
    DashboardCounterComponent.prototype.countChange = function (event) {
        this.valueCounter = event;
    };
    return DashboardCounterComponent;
}());
DashboardCounterComponent = __decorate([
    core_1.Component({
        selector: 'dashboard-component',
        templateUrl: './template/dashboard.counter.component.template.html',
        styleUrls: ['./style/dashboard.counter.component.css']
    }),
    __metadata("design:paramtypes", [])
], DashboardCounterComponent);
exports.DashboardCounterComponent = DashboardCounterComponent;
//# sourceMappingURL=dashboard.counter.component.js.map