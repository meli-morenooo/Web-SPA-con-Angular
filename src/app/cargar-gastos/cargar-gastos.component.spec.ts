import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarGastosComponent } from './cargar-gastos.component';

describe('CargarGastosComponent', () => {
  let component: CargarGastosComponent;
  let fixture: ComponentFixture<CargarGastosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CargarGastosComponent]
    });
    fixture = TestBed.createComponent(CargarGastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
