import { Component } from '@angular/core';
import { TimerPage } from '../timer/timer';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
	timerPage = TimerPage;
  constructor() {

  }
}
