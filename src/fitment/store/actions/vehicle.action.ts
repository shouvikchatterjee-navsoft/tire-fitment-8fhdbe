import { Action } from '@ngrx/store';
import { createAction, props } from '@ngrx/store';
// import model/interface from db.json here...

// Action constants
/* export const LOAD_YEARS = '[Fitment] Load Years';
export const LOAD_YEARS_FAIL = '[Fitment] Load Years Fail';
export const LOAD_YEARS_SUCCESS = '[Fitment] Load Years Success';

// Action creators
export class LoadYears implements Action {
  readonly type = LOAD_YEARS;
}
export class LoadYearsFail implements Action {
  readonly type = LOAD_YEARS_FAIL;
  constructor(public payload: any){};
}
export class LoadYearsSuccess implements Action{
  readonly type = LOAD_YEARS_SUCCESS;
  constructor(public payload: any){};  // Replace 'any' with interface
}

// Action types
export type VehicleAction = LoadYears | LoadYearsFail | LoadYearsSuccess; */

export const loadYears = createAction(
  '[Fitment] Load Years'
  );
export const loadYearsSuccess = createAction(
  '[Fitment] Load Years Success',
  props<{
    payload: {
      body: any[];
    };
  }>(),
);
export const loadYearsFailure = createAction(
  '[Fitment] Load Years Failure',
  props<{ payload: string }>(),
);

export const loadMakes = createAction(
  '[Fitment] Load Makes'
  );
export const loadMakesSuccess = createAction(
  '[Fitment] Load Makes Success',
  props<{
    payload: {
      body: any[];
    };
  }>(),
);
export const loadMakesFailure = createAction(
  '[Fitment] Load Makes Failure',
  props<{ payload: string }>(),
);

export const loadModels = createAction(
  '[Fitment] Load Models'
  );
export const loadModelsSuccess = createAction(
  '[Fitment] Load Models Success',
  props<{
    payload: {
      body: any[];
    };
  }>(),
);
export const loadModelsFailure = createAction(
  '[Fitment] Load Models Failure',
  props<{ payload: string }>(),
);

export const loadTrims = createAction(
  '[Fitment] Load Trims'
  );
export const loadTrimsSuccess = createAction(
  '[Fitment] Load Trims Success',
  props<{
    payload: {
      body: any[];
    };
  }>(),
);
export const loadTrimsFailure = createAction(
  '[Fitment] Load Trims Failure',
  props<{ payload: string }>(),
);