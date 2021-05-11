import { createSelector } from '@ngrx/store';
import * as fromFeature from '../reducers';

export const getSelectedVehicleState = createSelector(
  fromFeature.getVehicleState,
  (state: fromFeature.VehicleState) => state.vehicle
); 

export const getYears = createSelector(
  getSelectedVehicleState,
  vehicleState => vehicleState.years
);

export const getMakes = createSelector(
  getSelectedVehicleState,
  vehicleState => vehicleState.makes
);

export const getModels = createSelector(
  getSelectedVehicleState,
  vehicleState => vehicleState.models
);

export const getTrims = createSelector(
  getSelectedVehicleState,
  vehicleState => vehicleState.trims
);
