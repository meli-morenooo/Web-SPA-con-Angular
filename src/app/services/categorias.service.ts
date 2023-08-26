import { Injectable } from "@angular/core";
import { Categoria } from "../models/models";

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  private readonly localStorageKeyCategorias = 'categorias';
  private categorias: Categoria[] = [];

  constructor() {
    this.loadCategoriasFromLocalStorage();
  }

  private saveCategoriasToLocalStorage() {
    localStorage.setItem(this.localStorageKeyCategorias, JSON.stringify(this.categorias));
  }

  private loadCategoriasFromLocalStorage() {
    const savedCategorias = localStorage.getItem(this.localStorageKeyCategorias);
    this.categorias = savedCategorias ? JSON.parse(savedCategorias) : [];
  }

  addCategoria(categoria: Categoria) {
    this.categorias.push(categoria);
    this.saveCategoriasToLocalStorage();
  }

  getCategorias() {
    return this.categorias;
  }
}