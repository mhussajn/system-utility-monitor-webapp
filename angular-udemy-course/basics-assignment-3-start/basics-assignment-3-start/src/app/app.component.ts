import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isHidden = true;
  clickLog = [];

  countClicks() {
    this.isHidden = !this.isHidden;
    this.clickLog.push(
      'Time of click is: ' +
      new Date().getHours() +
      '.' + new Date().getMinutes() +
      '.' + new Date().getSeconds() +
      '.' + new Date().getMilliseconds());
  }
}
