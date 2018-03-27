import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing'
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { OktaAuthModule, OktaCallbackComponent } from '@okta/okta-angular';
import { AuthInterceptor } from './shared/okta/auth.interceptor';


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


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [ 
        RouterTestingModule, materialModules, OktaAuthModule.initAuth(config) 
      ],
      providers: [ {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true} ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a span tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    //expect(compiled.querySelector('h1').innerHTML).toContain('Welcome to app!');
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
    

  }));
});
