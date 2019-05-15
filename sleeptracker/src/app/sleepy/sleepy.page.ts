import { Component } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { FormGroup, FormControl } from '@angular/forms';
import { NavController, AlertController, Platform} from '@ionic/angular';
import { ToastController } from '@ionic/angular';
declare var cordova;

@Component({
  selector: 'app-sleepy',
  templateUrl: 'sleepy.page.html',
  styleUrls: ['sleepy.page.scss'],
})
export class Sleepy {
	public sleepinessTime: Date;
	public SleepinessData: StanfordSleepinessData[];
	public selectedSleepiness: number;
	public testArray: Array<any>;


	constructor(private platform: Platform,  public sleepService:SleepService, public toastController:ToastController, public alertController: AlertController) {
			

			var twelve_pm = new Date(2018,12,11,12);

			var four_pm = new Date(2018,12,11,16);

			var nine_pm = new Date(2018,12,11,16,21);


			this.platform.ready().then(() => {
			if(this.platform.is('cordova')) {
			// Schedule a single notification
			cordova.plugins.notification.local.schedule(
			[	
			   {
				 	id: 1,
				 	text: 'Time to log your sleepiness!',
	 			 	firstAt: new Date(twelve_pm),
	 			 	every: "day"
				},
			 {
				id:2,
				text: "Time to log your sleepiness!",
				firstAt: new Date(four_pm),
				every:"day"
			 },
			 {
				id:3,
				text: "Time to log your sleepiness!",
				firstAt: new Date(nine_pm),
				every:"day"
			 }
				
			]);
			
			}
		});
	
	}





	ngOnInit() {
	}


	/* Ionic doesn't allow bindings to static variables, so this getter can be used instead. */
	get allSleepData() {
		return SleepService.AllSleepData;
	}

	radioChangedHandler(event)
	{
		this.testArray = [];
		this.selectedSleepiness = event.target.value;
	}

	recordTime()
	{
		var d = new Date(); // for now
		d.getHours(); // => 9
		d.getMinutes(); // =>  30
		d.getSeconds(); 
		this.sleepinessTime = d;
		var sleepinessData = new StanfordSleepinessData(this.selectedSleepiness, this.sleepinessTime);
		this.sleepService.logSleepinessData(sleepinessData);

		this.SleepinessData = SleepService.AllSleepinessData;
		console.log(SleepService.AllSleepinessData);

	}


	async presentToast() {
      const toast = await this.toastController.create({
      message: 'Added Sleepy Data',
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }


  

}