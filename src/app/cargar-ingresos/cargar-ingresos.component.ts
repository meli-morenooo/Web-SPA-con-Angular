import { Component } from '@angular/core';
import { GastosIngresosService } from '../services/gastos-ingresos.service';
import { Ingreso } from '../models/models';

@Component({
  selector: 'app-cargar-ingresos',
  templateUrl: './cargar-ingresos.component.html',
  styleUrls: ['./cargar-ingresos.component.css']
})
export class CargarIngresosComponent {
  constructor(private gastosIngresosService: GastosIngresosService) {}

  agregarIngreso(ingreso: Ingreso) {
    this.gastosIngresosService.addIngreso(ingreso);
  }
}
