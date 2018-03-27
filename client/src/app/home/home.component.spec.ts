import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

import { CarService } from '../shared/car/car.service';

import { RouterTestingModule } from '@angular/router/testing'

import { OktaAuthModule, OktaCallbackComponent } from '@okta/okta-angular';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from '../shared/okta/auth.interceptor';
import { HttpClient, HttpHandler } from '@angular/common/http';



import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';


const config = {
  issuer: 'https://dev-435609.oktapreview.com/oauth2/default',
  redirectUri: 'http://localhost:4200/implicit/callback',
  clientId: '0oaedhhexkyqGLtrc0h7'
};

const materialModules = [
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule
];


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [ 
        RouterTestingModule, materialModules, OktaAuthModule.initAuth(config) 
      ],
      providers: [ CarService, HttpClient, HttpHandler, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
