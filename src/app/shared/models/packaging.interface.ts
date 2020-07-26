export interface Packaging {
  proveedor?: string;
  lotProveedor?: string;
  productId?: number;
  date?: string;
  osbervations?: string;
  quantity?: string;
  quality?: boolean;
  strageMaterial?: boolean;
  transport?: boolean;
  isPz?: true;
  makeId?: string;
  verifitId?: string;
}

export interface SelectionInformation {
  quality?: boolean;
  strageMaterial?: boolean;
  transport?: boolean;
  isPz?: true;
  makeId?: string;
  verifitId?: string;
}

export interface ReviewersInformation {
  makeId?: string;
  verifitId?: string;
}
