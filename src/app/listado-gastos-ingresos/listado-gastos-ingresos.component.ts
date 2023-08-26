import { Component, OnInit } from '@angular/core';
import { GastosIngresosService } from '../services/gastos-ingresos.service';
import { Gasto, Ingreso } from '../models/models';

@Component({
  selector: 'app-listado-gastos-ingresos',
  templateUrl: './listado-gastos-ingresos.component.html',
  styleUrls: ['./listado-gastos-ingresos.component.css']
})
export class ListadoGastosIngresosComponent implements OnInit {
  gastos: Gasto[] = [];
  ingresos: Ingreso[] = [];

  constructor(private gastosIngresosService: GastosIngresosService) {}

  ngOnInit(): void {
    this.gastos = this.gastosIngresosService.getGastos();
    this.ingresos = this.gastosIngresosService.getIngresos();
  }
}
