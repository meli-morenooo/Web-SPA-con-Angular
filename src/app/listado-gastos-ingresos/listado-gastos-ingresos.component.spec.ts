import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoGastosIngresosComponent } from './listado-gastos-ingresos.component';

describe('ListadoGastosIngresosComponent', () => {
  let component: ListadoGastosIngresosComponent;
  let fixture: ComponentFixture<ListadoGastosIngresosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoGastosIngresosComponent]
    });
    fixture = TestBed.createComponent(ListadoGastosIngresosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
