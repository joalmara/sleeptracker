import { Component } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { FormGroup, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

import { EndPagePage } from '../end-page/end-page.page';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	public  startTime: any; 
	private singleValue: Number;
	private myDate: String;
	private schloc: any;



	
	constructor(public navCrl:NavController, public sleepService:SleepService, public modalController: ModalController) {

	}

	ngOnInit() {

	}

	  async presentModal() {
	    const modal = await this.modalController.create({
	      component: EndPagePage,
	      componentProps: { value: this.startTime }
	    });
	    return await modal.present();
	  }



	  

	/* Ionic doesn't allow bindings to static variables, so this getter can be used instead. */
	get allSleepData() {
		return SleepService.AllSleepData;
	}

	getStartTime(){
		var d = new Date(); // for now
		d.getHours(); // => 9
		d.getMinutes(); // =>  30
		d.getSeconds(); 
		this.startTime = d;
		//console.log("START TIME: " + this.startTime);
		return d;
	}



	getTime(){
		console.log(this.myDate);
	}

	getScale(){
		console.log(this.singleValue);
	}





	

	

	
	

 




}
 
 
 