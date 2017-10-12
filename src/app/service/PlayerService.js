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
var Observable_1 = require("rxjs/Observable");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/toPromise");
var PlayerService = PlayerService_1 = (function () {
    function PlayerService(http) {
        this.http = http;
    }
    PlayerService.prototype.getPlayer = function (idPlayer) {
        var url = PlayerService_1.PLAYER_URL + "/" + idPlayer;
        return this.http.get(url).map(function (response) {
            return response.json().data;
        }).catch(this.handleError);
    };
    PlayerService.prototype.getPlayers = function () {
        var url = "" + PlayerService_1.PLAYER_URL;
        return this.http.get(url).map(function (response) {
            return response.json().data;
        }).catch(this.handleError);
    };
    PlayerService.prototype.delete = function (idPlayer) {
        var url = PlayerService_1.PLAYER_URL + "/" + idPlayer;
        return this.http.delete(url, { headers: PlayerService_1.HEADERS })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    PlayerService.prototype.create = function (player) {
        return this.http
            .post(PlayerService_1.PLAYER_URL, JSON.stringify({ id: player.id, name: player.name }), { headers: PlayerService_1.HEADERS })
            .map(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    PlayerService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Observable_1.Observable.throw(error.statusText);
    };
    return PlayerService;
}());
PlayerService.HEADERS = new http_1.Headers({ 'Content-Type': 'application/json' });
PlayerService.PLAYER_URL = 'api/players';
PlayerService = PlayerService_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PlayerService);
exports.PlayerService = PlayerService;
var PlayerService_1;
//# sourceMappingURL=PlayerService.js.map