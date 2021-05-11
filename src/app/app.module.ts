import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { FitmentModule } from '../fitment/fitment.module';

import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as store from '../fitment/store/index';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    FitmentModule,
    RouterModule,
    HttpClientModule,
    StoreModule.forRoot(store.reducers),
    EffectsModule.forRoot(store.effects)
  ],
  declarations: [AppComponent, HelloComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
