export interface EntryMeat {
  proveedor?: string;
  lotProveedor?: string;
  lotInternal?: string;
  rawMaterial?: string;
  date?: string;
  temperature?: AdditionalInformation;
  weight?: AdditionalInformation;
  strageMaterial?: AdditionalInformation;
  expiration?: AdditionalInformation;
  packing?: AdditionalInformation;
  odor?: AdditionalInformation;
  transport?: AdditionalInformation;
  texture?: AdditionalInformation;
  fridge?: AdditionalInformation;
  slaughterDate?: AdditionalInformation;
  photo?: string;
  qualityInspector?: string;
  job?: string;
}

export interface BasicInformation {
  proveedor?: string;
  lotProveedor?: string;
  productId?: number;
  quantity?: string;
  lotInternal?: string;
  rawMaterial?: string;
  date?: string;
}

export interface AdditionalInformation {
  value?: string;
  fridgeId?: number;
  observations?: string;
  description?: string;
  accepted: boolean;
}

export interface finalInformation {
  photo: string;
  qualityInspector: string;
  job: string;
}
