# Aplicación Web de Registro de Gastos e Ingresos

Esta es una aplicación web de página única (SPA) desarrollada con Angular para gestionar el registro de gastos e ingresos de una casa.

## Requisitos Previos

Asegúrate de tener instalado Node.js y Angular CLI en tu sistema. Si no los tienes instalados, sigue los siguientes pasos:

1. Instala Node.js desde [nodejs.org](https://nodejs.org/).
2. Instala Angular CLI usando el siguiente comando en tu terminal:
   
   ```
   npm install -g @angular/cli
   ```

## Pasos para Crear y Ejecutar el Proyecto

1. **Clona el Repositorio:**

   Clona este repositorio en tu máquina local:

   ```
   git clone https://github.com/meli-morenooo/Web-SPA-con-Angular.git
   cd TU_REPOSITORIO
   ```

2. **Instala las Dependencias:**

   Instala las dependencias del proyecto ejecutando el siguiente comando:

   ```
   npm install
   ```

3. **Crea los Componentes:**

   Crea los componentes necesarios para la aplicación:

   ```
   ng generate component CargarGastos
   ng generate component CargarIngresos
   ng generate component CargarCategorias
   ng generate component ListadoGastosIngresos
   ```

4. **Define los Modelos:**

   Define los modelos para Gasto, Ingreso y Categoría en `src/app/shared/models.ts`.

5. **Crea los Servicios:**

   Crea los servicios para manejar gastos, ingresos, categorías y balance:

   ```
   ng generate service GastosIngresos
   ng generate service Categorias
   ng generate service Balance
   ```

6. **Implementa Componentes y Servicios:**

   Implementa la lógica en cada componente y servicio siguiendo las directivas de Angular.

7. **Configura el Enrutamiento:**

   Configura el enrutamiento de la aplicación en `src/app/app-routing.module.ts`.

8. **Diseña la Interfaz de Usuario:**

   Diseña la interfaz de usuario utilizando componentes de Angular Material u otras librerías de diseño.

9. **Almacenamiento en LocalStorage:**

   Implementa métodos en el servicio de Balance para guardar y recuperar el balance mensual en el LocalStorage.

10. **Muestra el Balance:**

    En el componente de Balance, muestra el balance total de ingresos, egresos y el balance resultante.

11. **Ejecuta la Aplicación:**

    Ejecuta la aplicación con el siguiente comando:

    ```
    ng serve
    ```

    La aplicación estará disponible en `http://localhost:4200/`.
