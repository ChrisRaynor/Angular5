import { Component } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
//import { RouterTestingModule } from '@angular/router/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private oktaAuth: OktaAuthService) {
  }
}
