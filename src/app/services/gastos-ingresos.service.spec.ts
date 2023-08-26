import { TestBed } from '@angular/core/testing';

import { GastosIngresosService } from './gastos-ingresos.service';

describe('GastosIngresosService', () => {
  let service: GastosIngresosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GastosIngresosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
