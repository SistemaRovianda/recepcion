import { createAction, props } from '@ngrx/store';
import {
  BasicInformation,
  AdditionalInformation,
  finalInformation,
  EntryMeat,
} from 'src/app/shared/models/meat.interface';

const ADD_BASIC_INFORMATION = '[Meat] Add Basic Information';

const ADD_TEMPERATURE_DATA = '[Meat] Add Temperature Data';

const ADD_WEIGHT_DATA = '[Meat] Add Weight Data';

const ADD_STRAGE_MATERIAL_DATA = '[Meat] Add Strage Material Data';

const ADD_EXPIRATION_DATA = '[Meat] Add Expiration Data';

const ADD_PACKING_DATA = '[Meat] Add Packing Data';

const ADD_ODOR_DATA = '[Meat] Add Odor Data';

const ADD_TRANSPORT_DATA = '[Meat] Add Transport Data';

const ADD_TEXTURE_DATA = '[Meat] Add Texture Data';

const ADD_FRIDGE_DATA = '[Meat] Add Fridge Data';

const ADD_SLAUGHTER_DATE_DATA = '[Meat] Add Slaughter Date Data';

const ADD_FINAL_DATA = '[Meat] Add Final Data';

const SAVE_ENTRY_MEAT = '[Meat] Save Entry Meat';

const GENERATE_REPORT_ENTRY_MEAT = '[Meat] Generate Report Entry Meat';

const CLEAR_ENTRY_MEAT = '[Meat] Clear Entry Meat';

export const addBasicInformation = createAction(
  ADD_BASIC_INFORMATION,
  props<{ basicInformation: BasicInformation }>()
);

export const addTemperatureData = createAction(
  ADD_TEMPERATURE_DATA,
  props<{ temperature: AdditionalInformation }>()
);

export const addWeightData = createAction(
  ADD_WEIGHT_DATA,
  props<{ weight: AdditionalInformation }>()
);

export const addStrageMaterialData = createAction(
  ADD_STRAGE_MATERIAL_DATA,
  props<{ strageMaterial: AdditionalInformation }>()
);

export const addExpirationData = createAction(
  ADD_EXPIRATION_DATA,
  props<{ expiration: AdditionalInformation }>()
);

export const addPackingData = createAction(
  ADD_PACKING_DATA,
  props<{ packing: AdditionalInformation }>()
);

export const addOdorData = createAction(
  ADD_ODOR_DATA,
  props<{ odor: AdditionalInformation }>()
);

export const addTransportData = createAction(
  ADD_TRANSPORT_DATA,
  props<{ transport: AdditionalInformation }>()
);

export const addTextureData = createAction(
  ADD_TEXTURE_DATA,
  props<{ texture: AdditionalInformation }>()
);

export const addFridgeData = createAction(
  ADD_FRIDGE_DATA,
  props<{ fridge: AdditionalInformation }>()
);

export const addSlaughterDateData = createAction(
  ADD_SLAUGHTER_DATE_DATA,
  props<{ slaughterDate?: AdditionalInformation }>()
);

export const addFinalData = createAction(
  ADD_FINAL_DATA,
  props<{ final: finalInformation }>()
);

export const saveEntryMeat = createAction(
  SAVE_ENTRY_MEAT,
  props<{ entryMeat: EntryMeat }>()
);

export const generateReportEntryMeat = createAction(
  GENERATE_REPORT_ENTRY_MEAT,
  props<{ entryMeatId: string }>()
);

export const clearEntryMeat = createAction(CLEAR_ENTRY_MEAT);
