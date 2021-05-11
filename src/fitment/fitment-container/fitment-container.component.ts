import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../store/index';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-fitment-container',
  templateUrl: './fitment-container.component.html',
  styleUrls: ['./fitment-container.component.css']
})
export class FitmentContainerComponent implements OnInit {
  years: string[] = [];
  makes: string[] = [];
  models: string[] = [];
  trims: string[] = [];
  tires: string[] = ['Michelin', 'Ceat', 'MRF'];
  isYearDisplay = false;
  isMakeDisplay = false;
  isModelDisplay = false;
  isTrimDisplay = false;
  isTireDisplay = false;

  // import the store into the constructor
  constructor(private store: Store<fromStore.VehicleState>) {}

  ngOnInit() {
    // this.years$ = this.store.pipe(select(fromStore.getYears));
    this.store
      .pipe(select(fromStore.getYears))
      .pipe(
        tap(years => {
          this.years = years;
        })
      )
      .subscribe();
    this.store
      .pipe(select(fromStore.getMakes))
      .pipe(
        tap(makes => {
          this.makes = makes;
        })
      )
      .subscribe();
    this.store
      .pipe(select(fromStore.getModels))
      .pipe(
        tap(models => {
          this.models = models;
        })
      )
      .subscribe();
    this.store
      .pipe(select(fromStore.getTrims))
      .pipe(
        tap(trims => {
          this.trims = trims;
        })
      )
      .subscribe();
  }

  getYears() {
    this.isYearDisplay = true;
    this.isMakeDisplay = false;
    this.isModelDisplay = false;
    this.isTrimDisplay = false;
    this.isTireDisplay = false;

    this.store.dispatch(fromStore.loadYears());
    // dispatch an action to get array of years

    // Year
    // https://6080be3273292b0017cdbf2a.mockapi.io/years
  }

  onClickYear() {
    this.isYearDisplay = false;
    this.isMakeDisplay = true;
    this.isModelDisplay = false;
    this.isTrimDisplay = false;

    this.store.dispatch(fromStore.loadMakes());
  }

  onClickMake() {
    this.isYearDisplay = false;
    this.isMakeDisplay = false;
    this.isModelDisplay = true;
    this.isTrimDisplay = false;

    this.store.dispatch(fromStore.loadModels());
  }

  onClickModel() {
    this.isYearDisplay = false;
    this.isMakeDisplay = false;
    this.isModelDisplay = false;
    this.isTrimDisplay = true;

    this.store.dispatch(fromStore.loadTrims());
  }

  onClickTrim() {
    this.isYearDisplay = false;
    this.isMakeDisplay = false;
    this.isModelDisplay = false;
    this.isTrimDisplay = false;
    this.isTireDisplay = true;
  }

  // Make with year (2021)
  // https://6080be3273292b0017cdbf2a.mockapi.io/makes

  // Model with year and make (Acura)
  // https://6080be3273292b0017cdbf2a.mockapi.io/models

  // Trim with year, make, model (RDX)
  // https://6080be3273292b0017cdbf2a.mockapi.io/trim
}
