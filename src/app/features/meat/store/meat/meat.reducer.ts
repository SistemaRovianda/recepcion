import { EntryMeat } from 'src/app/shared/models/meat.interface';
import { on, createReducer, Action } from '@ngrx/store';
import {
  addBasicInformation,
  addTemperatureData,
  addWeightData,
  addStrageMaterialData,
  addExpirationData,
  addPackingData,
  addOdorData,
  addTransportData,
  addTextureData,
  addFridgeData,
  addSlaughterDateData,
  addFinalData,
  clearEntryMeat,
  addColorData,
} from './meat.actions';
import { state } from '@angular/animations';

export interface MeatState {
  loadind: boolean;
  entryMeat: EntryMeat;
  error: string;
}

const initialState: MeatState = {
  loadind: false,
  entryMeat: null,
  error: null,
};

const _meatReducer = createReducer<MeatState>(
  initialState,
  on(addBasicInformation, (state, { basicInformation }) => ({
    ...state,
    entryMeat: {
      ...basicInformation,
    },
  })),
  on(addTemperatureData, (state, { temperature }) => ({
    ...state,
    entryMeat: {
      ...state.entryMeat,
      temperature: {
        ...temperature,
      },
    },
  })),
  on(addWeightData, (state, { weight }) => ({
    ...state,
    entryMeat: {
      ...state.entryMeat,
      temperature: {
        ...state.entryMeat.temperature,
      },
      weight: {
        ...weight,
      },
    },
  })),
  on(addStrageMaterialData, (state, { strageMaterial }) => ({
    ...state,
    entryMeat: {
      ...state.entryMeat,
      temperature: {
        ...state.entryMeat.temperature,
      },
      weight: {
        ...state.entryMeat.weight,
      },
      strageMaterial: {
        ...strageMaterial,
      },
    },
  })),
  on(addExpirationData, (state, { expiration }) => ({
    ...state,
    entryMeat: {
      ...state.entryMeat,
      temperature: {
        ...state.entryMeat.temperature,
      },
      weight: {
        ...state.entryMeat.weight,
      },
      strageMaterial: {
        ...state.entryMeat.strageMaterial,
      },
      expiration: {
        ...expiration,
      },
    },
  })),
  on(addPackingData, (state, { packing }) => ({
    ...state,
    entryMeat: {
      ...state.entryMeat,
      temperature: {
        ...state.entryMeat.temperature,
      },
      weight: {
        ...state.entryMeat.weight,
      },
      strageMaterial: {
        ...state.entryMeat.strageMaterial,
      },
      expiration: {
        ...state.entryMeat.expiration,
      },
      packing: {
        ...packing,
      },
    },
  })),
  on(addOdorData, (state, { odor }) => ({
    ...state,
    entryMeat: {
      ...state.entryMeat,
      temperature: {
        ...state.entryMeat.temperature,
      },
      weight: {
        ...state.entryMeat.weight,
      },
      strageMaterial: {
        ...state.entryMeat.strageMaterial,
      },
      expiration: {
        ...state.entryMeat.expiration,
      },
      packing: {
        ...state.entryMeat.packing,
      },
      odor: {
        ...odor,
      },
    },
  })),
  on(addTransportData, (state, { transport }) => ({
    ...state,
    entryMeat: {
      ...state.entryMeat,
      temperature: {
        ...state.entryMeat.temperature,
      },
      weight: {
        ...state.entryMeat.weight,
      },
      strageMaterial: {
        ...state.entryMeat.strageMaterial,
      },
      expiration: {
        ...state.entryMeat.expiration,
      },
      packing: {
        ...state.entryMeat.packing,
      },
      odor: {
        ...state.entryMeat.odor,
      },
      transport: {
        ...transport,
      },
    },
  })),
  on(addTextureData, (state, { texture }) => ({
    ...state,
    entryMeat: {
      ...state.entryMeat,
      temperature: {
        ...state.entryMeat.temperature,
      },
      weight: {
        ...state.entryMeat.weight,
      },
      strageMaterial: {
        ...state.entryMeat.strageMaterial,
      },
      expiration: {
        ...state.entryMeat.expiration,
      },
      packing: {
        ...state.entryMeat.packing,
      },
      odor: {
        ...state.entryMeat.odor,
      },
      transport: {
        ...state.entryMeat.transport,
      },
      texture: {
        ...texture,
      },
    },
  })),
  on(addColorData, (state, { color }) => ({
    ...state,
    entryMeat: {
      ...state.entryMeat,
      temperature: {
        ...state.entryMeat.temperature,
      },
      weight: {
        ...state.entryMeat.weight,
      },
      strageMaterial: {
        ...state.entryMeat.strageMaterial,
      },
      expiration: {
        ...state.entryMeat.expiration,
      },
      packing: {
        ...state.entryMeat.packing,
      },
      odor: {
        ...state.entryMeat.odor,
      },
      transport: {
        ...state.entryMeat.transport,
      },
      texture: {
        ...state.entryMeat.texture,
      },
      color: {
        ...color,
      },
    },
  })),
  on(addFridgeData, (state, { fridge }) => ({
    ...state,
    entryMeat: {
      ...state.entryMeat,
      temperature: {
        ...state.entryMeat.temperature,
      },
      weight: {
        ...state.entryMeat.weight,
      },
      strageMaterial: {
        ...state.entryMeat.strageMaterial,
      },
      expiration: {
        ...state.entryMeat.expiration,
      },
      packing: {
        ...state.entryMeat.packing,
      },
      odor: {
        ...state.entryMeat.odor,
      },
      transport: {
        ...state.entryMeat.transport,
      },
      texture: {
        ...state.entryMeat.texture,
      },
      color: {
        ...state.entryMeat.color,
      },
      fridge: {
        ...fridge,
      },
    },
  })),
  on(addSlaughterDateData, (state, { slaughterDate }) => ({
    ...state,
    entryMeat: {
      ...state.entryMeat,
      temperature: {
        ...state.entryMeat.temperature,
      },
      weight: {
        ...state.entryMeat.weight,
      },
      strageMaterial: {
        ...state.entryMeat.strageMaterial,
      },
      expiration: {
        ...state.entryMeat.expiration,
      },
      packing: {
        ...state.entryMeat.packing,
      },
      odor: {
        ...state.entryMeat.odor,
      },
      transport: {
        ...state.entryMeat.transport,
      },
      texture: {
        ...state.entryMeat.texture,
      },
      color: {
        ...state.entryMeat.color,
      },
      fridge: {
        ...state.entryMeat.fridge,
      },
      slaughterDate: {
        ...slaughterDate,
      },
    },
  })),
  on(addFinalData, (state, { final }) => ({
    ...state,
    entryMeat: {
      ...state.entryMeat,
      temperature: {
        ...state.entryMeat.temperature,
      },
      weight: {
        ...state.entryMeat.weight,
      },
      strageMaterial: {
        ...state.entryMeat.strageMaterial,
      },
      expiration: {
        ...state.entryMeat.expiration,
      },
      packing: {
        ...state.entryMeat.packing,
      },
      odor: {
        ...state.entryMeat.odor,
      },
      transport: {
        ...state.entryMeat.transport,
      },
      texture: {
        ...state.entryMeat.texture,
      },
      color: {
        ...state.entryMeat.color,
      },
      fridge: {
        ...state.entryMeat.fridge,
      },
      slaughterDate: {
        ...state.entryMeat.slaughterDate,
      },
      ...final,
    },
  })),
  on(clearEntryMeat, (state) => ({
    ...state,
    entryMeat: null,
    error: null,
  }))
);

export function meatReducer(state: MeatState, action: Action) {
  return _meatReducer(state, action);
}
