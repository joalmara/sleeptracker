

import { Component, Input } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { FormGroup, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Sleepy } from '../sleepy/sleepy.page';
import { HomePage } from '../home/home.page';


@Component({
  selector: 'app-visual',
  templateUrl: './visual.page.html',
  styleUrls: ['./visual.page.scss'],
})
export class VisualPage{

	toggleValue: boolean = false;

	sleepyToggle: boolean = false;

	public timeDifference: any;
	@Input() sleepy: Sleepy;

	public whichGraph: string;
	
	public SleepinessData: StanfordSleepinessData[];
	public overNightData: OvernightSleepData[];

	public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales : {
			    yAxes: [{
			       ticks: { min: 0, fontColor: '#ffffff', fontSize:12 },
			       scaleLabel : {
			       	display: true, labelString: 'Hours'
			       }
			    }],

			    xAxes:[{
			    	ticks: {fontColor: '#ffffff', fontSize:12}
			    }]
			  },
	legend: {
        	labels: {
        		fontColor: '#ffffff'
        	}
        }
 	 };

  	public barChartLabels:string[] = [];
  	public barChartType:string = 'bar';
  	public barChartLegend:boolean = true;
 
 	public barChartData:any[] = [
  	 	{data: [], label: 'Sleep Duration'},
 	 ];

	  public barChartColors:Array<any> = [
	    {
	      backgroundColor: 'rgba(66,105,234,1)',
	      borderColor: 'rgba(255,255,255,1)',
	      pointBackgroundColor: 'rgba(148,159,177,1)',
	      pointBorderColor: '#fff',
	      pointHoverBackgroundColor: '#fff',
	      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
	    },

	  ];


	  public lineChartData:Array<any> = [
	    {data: [], label: 'Sleepiness'},
	  ];

	  public lineChartLabels:Array<any> = [];
	  public lineChartOptions:any = {
	  	scaleShowVerticalLines: false,
	    responsive: true,
		scales : {
			    yAxes: [{
			       ticks: { min: 0, fontColor: '#ffffff', fontSize:12},
			       scaleLabel : {
			       	display: true, labelString: 'Value',fontColor: '#ffffff', fontSize:20

			       }
			    }], 
			    xAxes: [{ ticks: {fontColor: '#ffffff', fontSize:12}}]
			  },
		animation: {
          duration: 5000
        },
        legend: {
        	labels: {
        		fontColor: '#ffffff'
        	}
        }

	  };
	  public lineChartColors:Array<any> = [
	    {
	      backgroundColor: 'rgba(212,134,247,1)',
	      borderColor: 'rgba(255,255,255,1)',
	      pointBackgroundColor: 'rgba(148,159,177,1)',
	      pointBorderColor: '#fff',
	      pointHoverBackgroundColor: '#fff',
	      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
	    },

	  ];
	  public lineChartLegend:boolean = true;
	  public lineChartType:string = 'bar';

	  private recentEntries:Array<any>;

	  private recentSleepDuration: Array <any>;



  constructor(public sleepService:SleepService) { }

  ngOnInit() {
  }

	get allSleepData() {
		return SleepService.AllSleepData;
	}


  	displaySleepinessGraph()
  	{
  			this.SleepinessData = SleepService.AllSleepinessData;
  			var valueArray = [];

  			var labelArray = [];

  			console.log(this.SleepinessData);
  			for(var i = 0; i < this.SleepinessData.length; i++)
			{
				var loggedValue = Number(this.SleepinessData[i]['loggedValue']);

				valueArray.push(loggedValue);

				var loggedAt = this.SleepinessData[i]['loggedAt'];

				var loggedAtStr = loggedAt.toString().slice(4,10) + loggedAt.toString().slice(15,21);

				labelArray.push(loggedAtStr);
			}

			this.lineChartData[0]['data'] = valueArray;

			this.lineChartLabels = labelArray;


			this.recentEntries = valueArray.map(function(e, i) {
  				return [e + " at ", labelArray[i]];
			});

  		}




  	calculateTimeDifference(){
		var arrayTimeDiff = [];

		var loggedArray = [];
  	
  		this.overNightData = SleepService.AllOvernightData;

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

		var secondArray = [];
		var labelArray = [];
		for(var i = 0; i < arrayTimeDiff.length; i++)
		{
			var seconds = parseFloat((arrayTimeDiff[i] / 1000).toFixed(1));

	        var minutes = parseFloat((arrayTimeDiff[i] / (1000 * 60)).toFixed(1));

	        var hours = parseFloat((arrayTimeDiff[i] / (1000 * 60 * 60)).toFixed(1));

	        var days = parseFloat((arrayTimeDiff[i] / (1000 * 60 * 60 * 24)).toFixed(1));

	       	//console.log(seconds);

	      	secondArray.push(hours);

	        // if (seconds < 60) {
	        //     return seconds + " Sec";
	        // } else if (minutes < 60) {
	        //     return minutes + " Min";
	        // } else if (hours < 24) {
	        //     return hours + " Hrs";
	        // } else {
	        //     return days + " Days"
	        // }
	    	
	    	labelArray.push(loggedArray[i]);


		}

		this.barChartData[0]['data'] = secondArray;
		this.barChartLabels = labelArray;


		this.recentSleepDuration = secondArray.map(function(e, i) {
  				return ["Slept " + e + " hours on ", labelArray[i]];
			});

		console.log(this.recentSleepDuration);
	}

	  	// events
		  public chartClicked(e:any):void {
		    console.log(e);
		  }
		 
		  public chartHovered(e:any):void {
		    console.log(e);
		  }
		 
		  public randomize():void {
		    // Only Change 3 values
		    let data = [
		      Math.round(Math.random() * 100),
		      59,
		      80,
		      (Math.random() * 100),
		      56,
		      (Math.random() * 100),
		      40];
		    let clone = JSON.parse(JSON.stringify(this.barChartData));
		    clone[0].data = data;
		    this.barChartData = clone
		}
		
		public chartClicked2(e:any):void {
	    console.log(e);
	  }
	 
	  public chartHovered2(e:any):void {
	    console.log(e);
	  }


	segmentChanged(event)
	{
		console.log(event.target.value);
		this.whichGraph = event.target.value;
		if (this.whichGraph = "SleepDuration")
		{
			this.calculateTimeDifference();
		}
		else{
			this.displaySleepinessGraph();
		}

	}


}
