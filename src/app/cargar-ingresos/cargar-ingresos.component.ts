import { Component, OnInit } from '@angular/core';
import { GastosIngresosService } from '../services/gastos-ingresos.service';
import { CategoriasService } from '../services/categorias.service';
import { Categoria, Ingreso } from '../models/models';

@Component({
  selector: 'app-cargar-ingresos',
  templateUrl: './cargar-ingresos.component.html',
  styleUrls: ['./cargar-ingresos.component.css']
})
export class CargarIngresosComponent implements OnInit {
  nuevoIngreso: Ingreso = {} as Ingreso;
  categorias: Categoria[] = [];

  constructor(
    private gastosIngresosService: GastosIngresosService,
    private categoriasService: CategoriasService
  ) {}

  ngOnInit(): void {
    this.categorias = this.categoriasService.getCategorias();
  }

  agregarIngreso() {
    const nuevoIngreso: Ingreso = {
      name: this.nuevoIngreso.name,
      detail: this.nuevoIngreso.detail,
      Price: this.nuevoIngreso.Price,
      category: this.nuevoIngreso.category,
      date: new Date() // Agrega la fecha actual o la que corresponda
    };

    this.gastosIngresosService.addIngreso(nuevoIngreso);
    this.nuevoIngreso = {} as Ingreso; // Limpiar el formulario
  }
}
