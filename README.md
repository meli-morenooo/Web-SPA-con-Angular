# Aplicación Web de Registro de Gastos e Ingresos

Esta es una aplicación web de página única (SPA) desarrollada con Angular para gestionar el registro de gastos e ingresos de una casa. Puedes agregar y listar tus gastos e ingresos, así como gestionar categorías asociadas a tus transacciones.

## Requisitos Previos

Asegúrate de tener instalado Node.js y Angular CLI en tu sistema. Si no los tienes instalados, sigue los siguientes pasos:

1. Instala Node.js desde [nodejs.org](https://nodejs.org/).
2. Instala Angular CLI usando el siguiente comando en tu terminal:
   
   ```
   npm install -g @angular/cli
   ```
   
## Cómo Clonar y Usar el Proyecto

1. Clona este repositorio en tu máquina local:

   ```
   git clone https://github.com/meli-morenooo/Web-SPA-con-Angular.git
   ```

2. Navega al directorio del proyecto:

   ```
   cd GastosIngresosApp
   ```

3. Instala las dependencias del proyecto:

   ```
   npm install
   ```

4. Inicia el servidor de desarrollo:

   ```
   ng serve
   ```

5. Abre tu navegador y visita [http://localhost:4200/](http://localhost:4200/) para ver la aplicación en funcionamiento.

## Funcionalidades Implementadas

- **Agregar Gastos e Ingresos:** Puedes agregar nuevos gastos e ingresos, especificando detalles como nombre, monto y categoría.

- **Listado de Gastos e Ingresos:** Puedes ver una lista de tus gastos e ingresos registrados, incluyendo detalles como nombre y monto.

- **Gestión de Categorías:** Puedes gestionar las categorías asociadas a tus transacciones, agregando nuevas categorías y asignando categorías a tus gastos e ingresos.

- **Almacenamiento Local:** Los datos de gastos, ingresos y categorías se almacenan localmente utilizando LocalStorage para que los cambios persistan entre sesiones.
