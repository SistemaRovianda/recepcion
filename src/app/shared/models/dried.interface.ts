export interface Dried {
  proveedor?: string;
  lotProveedor?: string;
  productId?: number;
  date?: string;
  observations?: string;
  quantity?: string;
  quality?: boolean;
  strangeMaterial?: boolean;
  transport?: boolean;
  isPz?: boolean;
  odor?: boolean;
  paking?: boolean;
  rawMaterial?: boolean;
  expiration?: boolean;
  color?: boolean;
  texture?: boolean;
  weight?: boolean;
}

export interface BasicInformationDried {
  proveedor?: string;
  lotProveedor?: string;
  productId?: number;
  date?: string;
  observations?: string;
  quantity?: string;
}

export interface FeatureSelectionTwoInformation {
  color?: boolean;
  texture?: boolean;
  weight?: boolean;
}
