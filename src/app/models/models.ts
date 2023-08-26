export interface Gasto {
  name: string;
  detail: string;
  Price: number;
  category: string;
  date: Date;
}

export interface Ingreso {
  name: string;
  detail: string;
  Price: number;
  category: string;
  date: Date;
}

export interface Categoria {
  name: string;
  detail: string;
}

export interface Balance {
  ingresosTotal: number;
  gastosTotal: number;
  balanceTotal: number;
}