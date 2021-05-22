import { Dried } from 'src/app/shared/models/dried.interface';
import { createReducer, on, Action } from '@ngrx/store';
import {
  addBasicInformationDried,
  addFirstAdditionalInformationDried,
  addSecondAdditionalInformationDried,
  clearEntryDried,
  saveEntryDriedSuccess,
  saveEntryDriedError,
  saveEntryDried,
} from './dried.actions';

export interface DriedState {
  loading: boolean;
  entryDried: Dried;
  error: string;
}

const initialState: DriedState = {
  loading: false,
  entryDried: null,
  error: null,
};

const _driedReducer = createReducer<DriedState>(
  initialState,
  on(addBasicInformationDried, (state, { basicInformation }) => ({
    ...state,
    entryDried: {
      ...basicInformation,
    },
  })),
  on(
    addFirstAdditionalInformationDried,
    (state, { firstAdditionalInformation }) => ({
      ...state,
      entryDried: {
        ...state.entryDried,
        ...firstAdditionalInformation,
      },
    })
  ),
  on(
    addSecondAdditionalInformationDried,
    (state, { secondAdditionalInformation }) => ({
      ...state,
      entryDried: {
        ...state.entryDried,
        ...secondAdditionalInformation,
      },
    })
  ),
  on(saveEntryDriedSuccess, (state) => ({
    ...state,
    loading: false
  })),
  on(saveEntryDried,(state)=>({
    ...state,loading: true
  })),
  on(
    saveEntryDriedError, (state) => ({
      ...state,
      loading: false
    })
  ),
  on(clearEntryDried, (state) => ({
    ...state,
    entryDried: null,
    error: null,
  }))
);

export function driedReducer(state: DriedState, action: Action) {
  return _driedReducer(state, action);
}
