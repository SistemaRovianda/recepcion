import { props, createAction } from '@ngrx/store';

import {
  ReviewersInformation,
  Packaging,
  SelectionInformation,
} from 'src/app/shared/models/packaging.interface';
import { BasicInformation } from 'src/app/shared/models/meat.interface';

const ADD_BASIC_INFORMATION_PACKAGING = '[Packaging] Add Basic Information';

const ADD_ADDITIONAL_INFORMATION_PACKAGING =
  '[Packaging] Add Additional Information Packaging';

const ADD_REVIEWERS_INFORMATION_PACKAGING =
  '[Packaging] Add Reviewers Information';

const SAVE_ENTRY_PACKAGING = '[Packaging] Save Entry Packaging';

const SAVE_ENTRY_PACKAGING_SUCCESS = '[Packaging] Save Entry Packaging Success'

const SAVE_ENTRY_PACKAGING_ERROR = '[Packaging] Save Entry Packaging Error'

const GENERATE_REPORT_ENTRY_PACKAGING =
  '[Meat] Generate Report Entry Packaging';

const CLEAR_ENTRY_PACKAGING = '[Packaging] Clear Entry Packaging';

export const addBasicInformationPackaging = createAction(
  ADD_BASIC_INFORMATION_PACKAGING,
  props<{ basicInformation: BasicInformation }>()
);

export const addAdditionalInformationPackaging = createAction(
  ADD_ADDITIONAL_INFORMATION_PACKAGING,
  props<{ selectionInformation: SelectionInformation }>()
);

export const addReviewersInformationPackaging = createAction(
  ADD_REVIEWERS_INFORMATION_PACKAGING,
  props<{ reviewersInformation: ReviewersInformation }>()
);

export const saveEntryPackaging = createAction(
  SAVE_ENTRY_PACKAGING,
  props<{ entryPackaging: Packaging }>()
);

export const saveEntryPackagingSuccess = createAction(
  SAVE_ENTRY_PACKAGING_SUCCESS
);

export const saveEntryPackagingError = createAction(
  SAVE_ENTRY_PACKAGING_ERROR
);

export const generateReportEntryPackaging = createAction(
  GENERATE_REPORT_ENTRY_PACKAGING,
  props<{ entryPackagingId: string }>()
);

export const clearEntryPackaging = createAction(CLEAR_ENTRY_PACKAGING);
