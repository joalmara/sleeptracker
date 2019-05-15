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
var overnight_sleep_data_1 = require("../data/overnight-sleep-data");
var stanford_sleepiness_data_1 = require("../data/stanford-sleepiness-data");
var angular_1 = require("@ionic/angular");
var HomePage = /** @class */ (function () {
    function HomePage(navCrl, sleepService) {
        this.navCrl = navCrl;
        this.sleepService = sleepService;
        this.lineChartData = [
            { data: [2], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
            { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
        ];
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'bar';
    }
    HomePage.prototype.ngOnInit = function () {
    };
    Object.defineProperty(HomePage.prototype, "allSleepData", {
        /* Ionic doesn't allow bindings to static variables, so this getter can be used instead. */
        get: function () {
            return sleep_service_1.SleepService.AllSleepData;
        },
        enumerable: true,
        configurable: true
    });
    HomePage.prototype.getStartTime = function () {
        var d = new Date(); // for now
        d.getHours(); // => 9
        d.getMinutes(); // =>  30
        d.getSeconds();
        this.startTime = d;
        //console.log("START TIME: " + this.startTime);
        return d;
    };
    HomePage.prototype.getEndTime = function () {
        var d = new Date(); // for now
        d.getHours(); // => 9
        d.getMinutes(); // =>  30
        d.getSeconds();
        this.endTime = d;
        //console.log("END TIME: " + this.endTime);
        var overnight = new overnight_sleep_data_1.OvernightSleepData(this.startTime, this.endTime);
        var summary = overnight.summaryString();
        this.sleepService.logOvernightData(overnight);
        //console.log("ARRAY OF OVERNIGHT===" + SleepService.AllOvernightData);
        console.log(sleep_service_1.SleepService.AllOvernightData);
        return d;
    };
    HomePage.prototype.getTime = function () {
        console.log(this.myDate);
    };
    HomePage.prototype.getScale = function () {
        console.log(this.singleValue);
    };
    HomePage.prototype.radioChangedHandler = function (event) {
        this.testArray = [];
        this.selectedSleepiness = event.target.value;
    };
    HomePage.prototype.recordTime = function () {
        var d = new Date(); // for now
        d.getHours(); // => 9
        d.getMinutes(); // =>  30
        d.getSeconds();
        this.sleepinessTime = d;
        var sleepinessData = new stanford_sleepiness_data_1.StanfordSleepinessData(this.selectedSleepiness, this.sleepinessTime);
        this.sleepService.logSleepinessData(sleepinessData);
        console.log(sleep_service_1.SleepService.AllSleepinessData);
    };
    HomePage.prototype.calculateTimeDifference = function () {
        this.timeDifference = this.endTime - this.startTime;
        console.log(this.timeDifference);
        var seconds = parseFloat((this.timeDifference / 1000).toFixed(1));
        var minutes = parseFloat((this.timeDifference / (1000 * 60)).toFixed(1));
        var hours = parseFloat((this.timeDifference / (1000 * 60 * 60)).toFixed(1));
        var days = parseFloat((this.timeDifference / (1000 * 60 * 60 * 24)).toFixed(1));
        if (seconds < 60) {
            return seconds + " Sec";
        }
        else if (minutes < 60) {
            return minutes + " Min";
        }
        else if (hours < 24) {
            return hours + " Hrs";
        }
        else {
            return days + " Days";
        }
    };
    HomePage.prototype.createArrayofSleepy = function () {
        console.log(this.SleepinessData);
        // for(var i = 0; i < this.SleepinessData.length; i++)
        // {
        // 	this.testArray.push(this.SleepinessData[i][2]);
        // }
        // console.log(this.testArray);
    };
    HomePage.prototype.randomize = function () {
        var _lineChartData = new Array(this.lineChartData.length);
        for (var i = 0; i < this.lineChartData.length; i++) {
            _lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
            for (var j = 0; j < this.lineChartData[i].data.length; j++) {
                _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
            }
        }
        this.lineChartData = _lineChartData;
    };
    // events
    HomePage.prototype.chartClicked = function (e) {
        console.log(e);
    };
    HomePage.prototype.chartHovered = function (e) {
        console.log(e);
    };
    HomePage = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        __metadata("design:paramtypes", [angular_1.NavController, sleep_service_1.SleepService])
    ], HomePage);
    return HomePage;
}());
exports.HomePage = HomePage;
//# sourceMappingURL=home.page.js.map