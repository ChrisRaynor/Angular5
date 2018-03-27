import { TestBed, inject } from '@angular/core/testing';

import { CarService } from './car.service';

import { HttpClient, HttpHandler } from '@angular/common/http';


describe('CarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarService, HttpClient, HttpHandler ]
    });
  });

  it('should be created', inject([CarService], (service: CarService) => {
    expect(service).toBeTruthy();
  }));
});
