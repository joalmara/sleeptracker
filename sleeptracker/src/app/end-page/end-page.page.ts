import { Component, OnInit, Injectable } from '@angular/core';
import { NavController, ModalController, NavParams } from '@ionic/angular';
import { HomePage } from '../home/home.page';
import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';


import { Platform } from '@ionic/angular';
import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion/ngx';


@Component({
  selector: 'app-end-page',
  templateUrl: './end-page.page.html',
  styleUrls: ['./end-page.page.scss'],
})


export class EndPagePage implements OnInit {
  startTime;
  endTime;
  private overNightData: OvernightSleepData[];
  private timeDifference: any;


 public acceleration:string = 'No acceleration data';


 subscription: any;

 total: any; 
 public final: any; 



  constructor(private platform:Platform, private deviceMotion:DeviceMotion, public sleepService:SleepService, public navParam: NavParams, public navCtrl: NavController, public modalController: ModalController) { 
  this.startTime = this.navParam.get('value');

	this.platform.ready().then(() => {

		this.subscription = this.deviceMotion.watchAcceleration({frequency: 1000}).subscribe((acc) => {
				this.acceleration = acc.x + ' ' + acc.y + ' ' + acc.z;
				this.total = acc.x + acc.y + acc.z;
		});



	});


  }


  ngOnInit() {
  }

  dismiss(){
  		var d = new Date(); // for now
		d.getHours(); // => 9
		d.getMinutes(); // =>  30
		d.getSeconds(); 
		this.endTime = d;
		
		//console.log("END TIME: " + this.endTime);
		var overnight = new OvernightSleepData(this.startTime, this.endTime);

		var summary = overnight.summaryString();
		
		this.sleepService.logOvernightData(overnight);


		this.overNightData = SleepService.AllOvernightData;

		//console.log("ARRAY OF OVERNIGHT===" + SleepService.AllOvernightData);

		console.log(SleepService.AllOvernightData);


  		this.modalController.dismiss();

  		this.subscription.unsubscribe();

  		this.final = this.total;



		return d;
  }


  calculateTimeDifference(){
		var arrayTimeDiff = [];

		var loggedArray = [];

		for(var i = 0; i < this.overNightData.length; i++)
		{

			var sleepEnd = Number(this.overNightData[i]['sleepEnd']);
			var sleepStart = Number(this.overNightData[i]['sleepStart']);
			var loggedAt = this.overNightData[i]['loggedAt'];

			this.timeDifference = sleepEnd - sleepStart;
			arrayTimeDiff.push(this.timeDifference);

			var loggedAt = this.overNightData[i]['loggedAt'];

			var loggedAtStr = loggedAt.toString().slice(0,24);

			var sampleLabel = loggedAt.toString().slice(3,10);

			loggedArray.push(sampleLabel);
		}
		console.log(arrayTimeDiff);

		for(var i = 0; i < arrayTimeDiff.length; i++)
		{
			var seconds = parseFloat((arrayTimeDiff[i] / 1000).toFixed(1));

	        var minutes = parseFloat((arrayTimeDiff[i] / (1000 * 60)).toFixed(1));

	        var hours = parseFloat((arrayTimeDiff[i] / (1000 * 60 * 60)).toFixed(1));

	        var days = parseFloat((arrayTimeDiff[i] / (1000 * 60 * 60 * 24)).toFixed(1));

	       	console.log(seconds);

	       	//this.barChartData[0]['data'].push(seconds);

	        // if (seconds < 60) {
	        //     return seconds + " Sec";
	        // } else if (minutes < 60) {
	        //     return minutes + " Min";
	        // } else if (hours < 24) {
	        //     return hours + " Hrs";
	        // } else {
	        //     return days + " Days"
	        // }
	    // this.barChartLabels.push(loggedArray[i]);

		}
	}



}
