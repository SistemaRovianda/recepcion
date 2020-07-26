import { Packaging } from 'src/app/shared/models/packaging.interface';
import { createReducer, on, Action } from '@ngrx/store';
import {
  addBasicInformationPackaging,
  addAdditionalInformationPackaging,
  addReviewersInformationPackaging,
  clearEntryPackaging,
} from './packaging.actions';

export interface PackagingState {
  loading: boolean;
  entryPackaging: Packaging;
  error: string;
}

const initialState: PackagingState = {
  loading: false,
  entryPackaging: null,
  error: null,
};

const _packagingReducer = createReducer<PackagingState>(
  initialState,
  on(addBasicInformationPackaging, (state, { basicInformation }) => ({
    ...state,
    entryPackaging: {
      ...basicInformation,
    },
  })),
  on(addAdditionalInformationPackaging, (state, { selectionInformation }) => ({
    ...state,
    entryPackaging: {
      ...state.entryPackaging,
      ...selectionInformation,
    },
  })),
  on(addReviewersInformationPackaging, (state, { reviewersInformation }) => ({
    ...state,
    entryPackaging: {
      ...state.entryPackaging,
      ...reviewersInformation,
    },
  })),
  on(clearEntryPackaging, (state) => ({
    ...state,
    entryPackaging: null,
  }))
);

export function packagingReducer(state: PackagingState, action: Action) {
  return _packagingReducer(state, action);
}
