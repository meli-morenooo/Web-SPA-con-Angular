import { Injectable } from '@angular/core';
import { Categoria } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  private categorias: Categoria[] = [];

  addCategoria(categoria: Categoria) {
    this.categorias.push(categoria);
  }

  getCategorias() {
    return this.categorias;
  }
}
