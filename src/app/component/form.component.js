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
var forms_1 = require("@angular/forms");
var player_1 = require("./player");
var IPlayerService_1 = require("../injectable/IPlayerService");
require("rxjs/add/operator/catch");
var FormComponent = (function () {
    function FormComponent(playerService) {
        this.playerService = playerService;
    }
    FormComponent.prototype.ngOnInit = function () {
        this.userForm = new forms_1.FormGroup({
            'name': new forms_1.FormControl(null, forms_1.Validators.required),
            'age': new forms_1.FormControl('20', [forms_1.Validators.required, forms_1.Validators.maxLength(2)])
        });
        this.playerVar = undefined;
        this.findAll();
    };
    FormComponent.prototype.onFormSubmit = function () {
        console.log('Name:' + this.userForm.get('name').value + ' Age: ' + this.userForm.get('age').value);
    };
    FormComponent.prototype.find = function (idPlayer) {
        var _this = this;
        this.playerService.getPlayer(idPlayer).subscribe(function (player) {
            _this.playerVar = player;
        });
    };
    FormComponent.prototype.findAll = function () {
        this.playersVar = this.playerService.getPlayers();
    };
    FormComponent.prototype.delete = function (idPlayer) {
        var _this = this;
        this.playerService.delete(idPlayer).then(function (value) {
            _this.findAll();
            _this.errorMessage = "Se ha borrado el usuario " + idPlayer + " correctamente";
        });
    };
    FormComponent.prototype.create = function (idPlayer, name) {
        var _this = this;
        this.playerService.getPlayer(idPlayer).subscribe(function (player) {
            _this.errorMessage = "Ya existe un usuario con id " + idPlayer;
        }, function () { return _this.doCreate(idPlayer, name); });
    };
    FormComponent.prototype.doCreate = function (idPlayer, name) {
        var _this = this;
        this.playerService.create(new player_1.Player(idPlayer, name)).subscribe(function (idPlayer) {
            _this.findAll();
            _this.errorMessage = "Se ha creado el usuario " + idPlayer.name + " correctamente";
        }, function () { _this.errorMessage = "Ha ocurrido un error"; });
    };
    Object.defineProperty(FormComponent.prototype, "player", {
        get: function () {
            return this.playerVar;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormComponent.prototype, "players", {
        get: function () {
            return this.playersVar;
        },
        enumerable: true,
        configurable: true
    });
    return FormComponent;
}());
FormComponent = __decorate([
    core_1.Component({
        selector: 'my-test-form',
        templateUrl: './template/form.component.template.html',
        styleUrls: ['./style/form.component.css']
    }),
    __metadata("design:paramtypes", [IPlayerService_1.IPlayerService])
], FormComponent);
exports.FormComponent = FormComponent;
//# sourceMappingURL=form.component.js.map