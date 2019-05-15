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
var sleep_service_1 = require("../services/sleep.service");
var Sleepy = /** @class */ (function () {
    function Sleepy(sleepService) {
        this.sleepService = sleepService;
    }
    Sleepy.prototype.ngOnInit = function () {
    };
    Object.defineProperty(Sleepy.prototype, "allSleepData", {
        /* Ionic doesn't allow bindings to static variables, so this getter can be used instead. */
        get: function () {
            return sleep_service_1.SleepService.AllSleepData;
        },
        enumerable: true,
        configurable: true
    });
    Sleepy = __decorate([
        core_1.Component({
            selector: 'app-sleepy',
            templateUrl: 'sleepy.page.html',
            styleUrls: ['sleepy.page.scss'],
        }),
        __metadata("design:paramtypes", [sleep_service_1.SleepService])
    ], Sleepy);
    return Sleepy;
}());
exports.Sleepy = Sleepy;
//# sourceMappingURL=sleepy.page.js.map