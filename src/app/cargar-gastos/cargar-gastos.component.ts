import { Component } from '@angular/core';
import { GastosIngresosService } from '../services/gastos-ingresos.service';
import { Gasto } from '../models/models';

@Component({
  selector: 'app-cargar-gastos',
  templateUrl: './cargar-gastos.component.html',
  styleUrls: ['./cargar-gastos.component.css']
})
export class CargarGastosComponent {
  constructor(private gastosIngresosService: GastosIngresosService) {}

  agregarGasto(gasto: Gasto) {
    this.gastosIngresosService.addGasto(gasto);
  }
}
