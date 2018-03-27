import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarListComponent } from './car-list.component';

import { CarService } from '../shared/car/car.service';

import { RouterTestingModule } from '@angular/router/testing'

import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';

import { GiphyService } from '../shared/giphy/giphy.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';




const materialModules = [
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule
];


describe('CarListComponent', () => {
  let component: CarListComponent;
  let fixture: ComponentFixture<CarListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarListComponent ],
       imports: [ 
         RouterTestingModule, materialModules, HttpClientTestingModule
      ],
      providers: [ CarService, GiphyService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
