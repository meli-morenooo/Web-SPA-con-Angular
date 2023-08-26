import { Injectable } from '@angular/core';
import { Gasto, Ingreso } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class GastosIngresosService {
  private gastos: Gasto[] = [];
  private ingresos: Ingreso[] = [];

  addGasto(gasto: Gasto) {
    this.gastos.push(gasto);
  }

  addIngreso(ingreso: Ingreso) {
    this.ingresos.push(ingreso);
  }

  getGastos() {
    return this.gastos;
  }

  getIngresos() {
    return this.ingresos;
  }
}
