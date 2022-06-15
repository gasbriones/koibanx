export type CommerceType = {
  ID: number;
  Comercio: string;
  CUIT: number;
  'Concepto 1': number;
  'Concepto 2': number;
  'Concepto 3': number;
  'Concepto 4': number;
  'Concepto 5': number;
  'Concepto 6': number;
  'Balance actual': number;
  Activo: boolean;
  'Ultima venta': string
};

export type MockDataType = {
  data: CommerceType[];
  page: number;
  pages: number;
  rowsPerPage: number;
  total: number;
};

export type PaginationDataType = {
  page: number;
  pages: number;
  rowsPerPage: number;
  total: number;
}

export type OrderByType = {
  columnName: string;
  direction: 'asc' | 'desc';
};
