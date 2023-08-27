# ACCIONES E IMPLEMENTACIONES REALIZADAS EN LA CREACIÓN DEL PROYECTO ANGULAR

## 1. Crear un proyecto Angular:
```
ng new GastosIngresosApp
```

## 2. Navega al directorio del proyecto:
```
cd GastosIngresosApp
```

## 3. Creación de Componentes:
```
ng generate component CargarGastos
```
```
ng generate component CargarIngresos
```
```
ng generate component CargarCategorias
```
```
ng generate component ListadoGastosIngresos
```

## 4. Definición de Modelos:
Creación de un directorio llamado models y dentro un archivo models.ts

## 5. Creación de Servicios:
```
ng generate service GastosIngresos
```
```
ng generate service Categorias
```

## 6. Implementación de Componentes y Servicios:
Se implemento la lógica en cada uno de los componentes y servicios, siguiendo las directivas de Angular.

## 7. Almacenamiento en LocalStorage:
Se ajustaron los services y componentes para utilizar el almacenado en LocalStorage.

## 8. Enrutamiento:
Se configuro en el archivo app-routing.module.ts el enrutamiento de la aplicación para navegar entre los diferentes componentes.

## 9. Interfaz de Usuario:
```
ng add @angular/material
```
Se utilizaron los componentes de Angular Material para los archivos html de cada componente del proyecto.

## 10. Ajustes de Interfaz
Con Angular Material instalado se ajusto el componente de Categoria para utilizar como una lista desplegable en los componentes de cargas de gastos e ingresos.

## 11. Pruebas y Depuración:
```
ng serve
```
Durante cada creación de componente y posteriores ajustes se fueron haciendo las pertinentes pruebas de funcionamiento.

## 12. Publicación:
Se creo un repositorio en Github y se subió todo el proyecto.

## 13. Documentación:
Se creo el archivo README que proporciona instrucciones detalladas sobre cómo clonar, instalar y usar el proyecto.
