/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Cafes.servicioService } from './cafes.servicio.service';

describe('Service: Cafes.servicio', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Cafes.servicioService]
    });
  });

  it('should ...', inject([Cafes.servicioService], (service: Cafes.servicioService) => {
    expect(service).toBeTruthy();
  }));
});
