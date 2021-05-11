// HOW TO SET UP A reducer.ts FILE:
// Import actions and interfaces
// Create interface for initial state
// Create initial state
// Create reducer function and pass in initial state and actions.
// Return new state

import { Action, createReducer, on } from '@ngrx/store';
import * as fromActions from '../actions/vehicle.action';

export interface VehicleState {
  years: string[];
  makes:string[];
  models:string[];
  trims:string[];
  tires:string[];
  loaded: boolean;
  loading: boolean;
  errorMessage: string;
}

export const initialState: VehicleState = {
  years: [],
  makes: [],
  models: [],
  trims: [],
  tires: [],
  loaded: false,
  loading: false,
  errorMessage: ''
};

/* export function reducer(
  state = initialState,
  action: fromVehicle.VehicleAction
): VehicleState {

  switch(action.type){

    case fromVehicle.LOAD_YEARS: {
      return {
        ...state,
        loading: true
      }
    }
    case fromVehicle.LOAD_YEARS_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      }
    }
    case fromVehicle.LOAD_YEARS_SUCCESS: {
      return {
        ...state,
        loaded: true,
        loading: false
      }
    }
  }

  return state;
} */

const vehicleReducer = createReducer(
  initialState,
  // load users
  on(fromActions.loadYears, state => ({
    ...state,
    isLoading: true,
    isLoaded: false
  })),
  on(fromActions.loadYearsSuccess, (state, { payload }) => (
    {
    ...state,
    isLoading: false,
    isLoaded: true,    
    years: payload.body
  })),
  on(fromActions.loadYearsFailure, (state, { payload }) => ({
    ...state,
    isLoading: false,
    isLoaded: false,
    errorMessage: payload
  })),

  on(fromActions.loadMakes, state => ({
    ...state,
    isLoading: true,
    isLoaded: false
  })),
  on(fromActions.loadMakesSuccess, (state, { payload }) => ({
    ...state,
    isLoading: false,
    isLoaded: true,    
    makes: payload.body
  })),
  on(fromActions.loadMakesFailure, (state, { payload }) => ({
    ...state,
    isLoading: false,
    isLoaded: false,
    errorMessage: payload
  })),

  on(fromActions.loadModels, state => ({
    ...state,
    isLoading: true,
    isLoaded: false
  })),
  on(fromActions.loadModelsSuccess, (state, { payload }) => ({
    ...state,
    isLoading: false,
    isLoaded: true,    
    models: payload.body
  })),
  on(fromActions.loadModelsFailure, (state, { payload }) => ({
    ...state,
    isLoading: false,
    isLoaded: false,
    errorMessage: payload
  })),

  on(fromActions.loadTrims, state => ({
    ...state,
    isLoading: true,
    isLoaded: false
  })),
  on(fromActions.loadTrimsSuccess, (state, { payload }) => ({
    ...state,
    isLoading: false,
    isLoaded: true,    
    trims: payload.body
  })),
  on(fromActions.loadTrimsFailure, (state, { payload }) => ({
    ...state,
    isLoading: false,
    isLoaded: false,
    errorMessage: payload
  })),
);

export function reducer(state: VehicleState | undefined, action: Action) {
  return vehicleReducer(state, action);
}
