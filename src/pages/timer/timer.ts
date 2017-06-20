import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TimerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-timer',
  templateUrl: 'timer.html',
})
export class TimerPage {
  private currentMinutes: number = 0;
  private currentSeconds: number = 0;
  private totalSeconds: number = 60;
  private timerRunning: boolean = false;
  private numberOfMinutes: number = 0;
  private degrees: number = 0;
  private formattedSeconds: string = "00";
  private formattedMinutes: string = "00";
  private timerArc: string = "";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

private startTimer() {
  if (this.timerRunning) {
    return;
  }
  this.timerRunning = true;
  this.currentSeconds = 0;
  this.totalSeconds = this.numberOfMinutes * 60;	
  console.log('started');
  let that=this;
    let timer= setInterval(function(){
    console.log('Running');
      that.currentSeconds++;
      that.degrees = (that.currentSeconds / that.totalSeconds) * 360;
      that.timerArc = that.describeArc(200, 400, 100, 0, that.degrees);
      that.formattedSeconds = (that.currentSeconds % 60).toString();
      that.formattedMinutes = Math.floor(that.currentSeconds/60).toString();
      that.formattedSeconds = that.pad(that.formattedSeconds);
      that.formattedMinutes = that.pad(that.formattedMinutes);
      if (that.currentSeconds >= that.totalSeconds) {
      	clearInterval(timer);
        this.timerRunning = false;
      }
    }, 1000);
}

private pad(str : string) {
  if (str.length < 2) {
    str = "0" + str;
  }
  return str;
}

private polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
}

private describeArc(x, y, radius, startAngle, endAngle){

  var start = this.polarToCartesian(x, y, radius, endAngle);
  var end = this.polarToCartesian(x, y, radius, startAngle);

  var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  var d = [
      "M", start.x, start.y, 
      "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
  ].join(" ");

  return d;       
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimerPage');
  }

}


