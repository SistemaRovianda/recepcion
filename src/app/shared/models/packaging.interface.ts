export interface Packaging {
  proveedor?: string;
  lotProveedor?: string;
  productId?: number;
  date?: string;
  obervations?: string;
  quantity?: string;
  quality?: boolean;
  strageMaterial?: boolean;
  transport?: boolean;
  isPz?: boolean;
  isBox?:boolean,
  makeId?: string;
  verifitId?: string;
}

export interface SelectionInformation {
  quality?: boolean;
  // rawMaterial?: boolean;
  // expiration?: boolean;
  strageMaterial?: boolean;
  //strangeMaterial?: boolean; //error de sintaxis provoca que realice una propiedad separada
  transport?: boolean;
  paking?: boolean;
  // isPz?: boolean;
  // odor?: boolean;
  // paking?: boolean;
  makeId?: string;
  verifitId?: string;
}

export interface ReviewersInformation {
  makeId?: string;
  verifitId?: string;
}
