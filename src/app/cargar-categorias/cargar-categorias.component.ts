import { Component, OnInit } from '@angular/core';
import { Categoria } from '../models/models';
import { CategoriasService } from '../services/categorias.service';

@Component({
  selector: 'app-cargar-categorias',
  templateUrl: './cargar-categorias.component.html',
  styleUrls: ['./cargar-categorias.component.css']
})
export class CargarCategoriasComponent implements OnInit {
  nuevaCategoria: Categoria = {
    name: '',
    detail: ''
  };

  constructor(private categoriasService: CategoriasService) {}

  ngOnInit(): void {}

  guardarCategoria() {
    if (this.nuevaCategoria.name && this.nuevaCategoria.detail) {
      this.categoriasService.addCategoria(this.nuevaCategoria);
      this.nuevaCategoria = { name: '', detail: '' };
    }
  }
}
