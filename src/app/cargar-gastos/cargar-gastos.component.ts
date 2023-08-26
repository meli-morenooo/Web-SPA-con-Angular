import { Component, OnInit } from '@angular/core';
import { GastosIngresosService } from '../services/gastos-ingresos.service';
import { CategoriasService } from '../services/categorias.service';
import { Categoria, Gasto } from '../models/models';

@Component({
  selector: 'app-cargar-gastos',
  templateUrl: './cargar-gastos.component.html',
  styleUrls: ['./cargar-gastos.component.css']
})
export class CargarGastosComponent implements OnInit {
  nuevoGasto: Gasto = {} as Gasto;
  categorias: Categoria[] = [];

  constructor(
    private gastosIngresosService: GastosIngresosService,
    private categoriasService: CategoriasService
  ) {}

  ngOnInit(): void {
    this.categorias = this.categoriasService.getCategorias();
  }

  agregarGasto() {
    const nuevoGasto: Gasto = {
      name: this.nuevoGasto.name,
      detail: this.nuevoGasto.detail,
      Price: this.nuevoGasto.Price,
      category: this.nuevoGasto.category,
      date: new Date() // Agrega la fecha actual o la que corresponda
    };

    this.gastosIngresosService.addGasto(nuevoGasto);
    this.nuevoGasto = {} as Gasto; // Limpiar el formulario
  }
}

