import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as vehicleActions from '../actions/index';
import { Router } from '@angular/router';
import { VehicleService } from '../../service/vehicle.service';

@Injectable()
export class VehicleEffects {
  constructor(
    private actions$: Actions,
    private vehicleService: VehicleService
  ) {}

  // load years
  loadYears$ = createEffect(() =>
    this.actions$.pipe(
      ofType(vehicleActions.loadYears),
      switchMap(action => {
        return this.vehicleService.getYears().pipe(
          map(years =>
            vehicleActions.loadYearsSuccess({
              payload: {
                body: years
              }
            })
          ),
          catchError(error =>
            of(vehicleActions.loadYearsFailure({ payload: error }))
          )
        );
      })
    )
  );

  // load makes
  loadMakes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(vehicleActions.loadMakes),
      switchMap(action => {
        return this.vehicleService.getMakes().pipe(
          map(makes =>
            vehicleActions.loadMakesSuccess({
              payload: {
                body: makes
              }
            })
          ),
          catchError(error =>
            of(vehicleActions.loadMakesFailure({ payload: error }))
          )
        );
      })
    )
  );

  // load models
  loadModels$ = createEffect(() =>
    this.actions$.pipe(
      ofType(vehicleActions.loadModels),
      switchMap(action => {
        return this.vehicleService.getModels().pipe(
          map(models =>
            vehicleActions.loadModelsSuccess({
              payload: {
                body: models
              }
            })
          ),
          catchError(error =>
            of(vehicleActions.loadModelsFailure({ payload: error }))
          )
        );
      })
    )
  );

  // load trims
  loadTrims$ = createEffect(() =>
    this.actions$.pipe(
      ofType(vehicleActions.loadTrims),
      switchMap(action => {
        return this.vehicleService.getTrims().pipe(
          map(trims =>
            vehicleActions.loadTrimsSuccess({
              payload: {
                body: trims
              }
            })
          ),
          catchError(error =>
            of(vehicleActions.loadTrimsFailure({ payload: error }))
          )
        );
      })
    )
  );
}
