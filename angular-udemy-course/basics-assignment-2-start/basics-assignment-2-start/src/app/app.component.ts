import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: string = 'Username';

  onReset() {
    this.userName = '';
  }

  isDisabled() {
    if (this.userName) {
      return false
    } else {
      return true
    }
  }
}
