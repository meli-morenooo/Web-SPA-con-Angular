import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargarGastosComponent } from './cargar-gastos/cargar-gastos.component';
import { CargarIngresosComponent } from './cargar-ingresos/cargar-ingresos.component';
import { CargarCategoriasComponent } from './cargar-categorias/cargar-categorias.component';
import { ListadoGastosIngresosComponent } from './listado-gastos-ingresos/listado-gastos-ingresos.component';

const routes: Routes = [
  { path: 'cargar-gastos', component: CargarGastosComponent },
  { path: 'cargar-ingresos', component: CargarIngresosComponent },
  { path: 'cargar-categorias', component: CargarCategoriasComponent },
  { path: 'listado-gastos-ingresos', component: ListadoGastosIngresosComponent },
  { path: '', redirectTo: '/cargar-gastos', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
