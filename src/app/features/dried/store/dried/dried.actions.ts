import { createAction, props } from '@ngrx/store';
import {
  BasicInformation,
  AdditionalInformation,
} from 'src/app/shared/models/meat.interface';
import { SelectionInformation } from 'src/app/shared/models/packaging.interface';
import {
  Dried,
  FeatureSelectionTwoInformation,
  BasicInformationDried,
} from 'src/app/shared/models/dried.interface';

const ADD_BASIC_INFORMATION_DRIED = '[Dried] Add Basic Information dried';

const ADD_FIRST_ADDITIONAL_INFORMATION_DRIED =
  '[Dried] Add First Additional Information dried';

const ADD_SECOND_ADDITIONAL_INFORMATION_DRIED =
  '[Dried] Add Second Additional Information dried';

const SAVE_ENTRY_DRIED = '[Dried] Savae Entry Dried';

const SAVE_ENTRY_DRIED_SUCCESS = '[Dried] Savae Entry Dried Success';

const SAVE_ENTRY_DRIED_ERROR = '[Dried] Savae Entry Dried Error';

const GENERATE_REPORT_ENTRY_DRIED = '[Dried] Generate Report Entry Dried';

const CLEAR_ENTRY_DRIED = '[Dried] Clear Entry Dried';

export const addBasicInformationDried = createAction(
  ADD_BASIC_INFORMATION_DRIED,
  props<{ basicInformation: BasicInformationDried }>()
);

export const addFirstAdditionalInformationDried = createAction(
  ADD_FIRST_ADDITIONAL_INFORMATION_DRIED,
  props<{ firstAdditionalInformation: SelectionInformation }>()
);

export const addSecondAdditionalInformationDried = createAction(
  ADD_SECOND_ADDITIONAL_INFORMATION_DRIED,
  props<{ secondAdditionalInformation: FeatureSelectionTwoInformation }>()
);

export const saveEntryDried = createAction(
  SAVE_ENTRY_DRIED,
  props<{ entryDried: Dried }>()
);

export const saveEntryDriedSuccess = createAction(
  SAVE_ENTRY_DRIED_SUCCESS,
);

export const saveEntryDriedError = createAction(
  SAVE_ENTRY_DRIED_ERROR,
);

export const generateReportEntryDried = createAction(
  GENERATE_REPORT_ENTRY_DRIED,
  props<{ entryDriedId: string }>()
);

export const clearEntryDried = createAction(CLEAR_ENTRY_DRIED);
