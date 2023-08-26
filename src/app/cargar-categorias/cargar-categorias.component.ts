import { Component } from '@angular/core';
import { CategoriasService } from '../services/categorias.service';
import { Categoria } from '../models/models';

@Component({
  selector: 'app-cargar-categorias',
  templateUrl: './cargar-categorias.component.html',
  styleUrls: ['./cargar-categorias.component.css']
})
export class CargarCategoriasComponent {
  nuevaCategoria: Categoria = {} as Categoria;

  constructor(private categoriasService: CategoriasService) {}

  agregarCategoria() {
    const nuevaCategoria: Categoria = {
      name: this.nuevaCategoria.name,
      detail: this.nuevaCategoria.detail
    };

    this.categoriasService.addCategoria(nuevaCategoria);
    this.nuevaCategoria = {} as Categoria; // Limpiar el formulario
  }
}

