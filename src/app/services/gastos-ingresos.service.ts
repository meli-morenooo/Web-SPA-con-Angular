import { Injectable } from '@angular/core';
import { Gasto, Ingreso } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class GastosIngresosService {
  private readonly localStorageKeyGastos = 'gastos';
  private readonly localStorageKeyIngresos = 'ingresos';
  private gastos: Gasto[] = [];
  private ingresos: Ingreso[] = [];

  constructor() {
    this.loadGastosFromLocalStorage();
    this.loadIngresosFromLocalStorage();
  }

  private saveGastosToLocalStorage() {
    localStorage.setItem(this.localStorageKeyGastos, JSON.stringify(this.gastos));
  }

  private loadGastosFromLocalStorage() {
    const savedGastos = localStorage.getItem(this.localStorageKeyGastos);
    this.gastos = savedGastos ? JSON.parse(savedGastos) : [];
  }

  addGasto(gasto: Gasto) {
    this.gastos.push(gasto);
    this.saveGastosToLocalStorage();
  }

  getGastos() {
    return this.gastos;
  }

  private saveIngresosToLocalStorage() {
    localStorage.setItem(this.localStorageKeyIngresos, JSON.stringify(this.ingresos));
  }

  private loadIngresosFromLocalStorage() {
    const savedIngresos = localStorage.getItem(this.localStorageKeyIngresos);
    this.ingresos = savedIngresos ? JSON.parse(savedIngresos) : [];
  }

  addIngreso(ingreso: Ingreso) {
    this.ingresos.push(ingreso);
    this.saveIngresosToLocalStorage();
  }

  getIngresos() {
    return this.ingresos;
  }
}
