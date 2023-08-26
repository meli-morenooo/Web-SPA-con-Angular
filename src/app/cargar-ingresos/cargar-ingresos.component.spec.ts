import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarIngresosComponent } from './cargar-ingresos.component';

describe('CargarIngresosComponent', () => {
  let component: CargarIngresosComponent;
  let fixture: ComponentFixture<CargarIngresosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CargarIngresosComponent]
    });
    fixture = TestBed.createComponent(CargarIngresosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
