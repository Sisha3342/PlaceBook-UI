import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  isLoginPage: boolean;

  constructor() {
    this.isLoginPage = true;
  }
}
