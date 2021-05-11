import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FitmentContainerComponent } from '../fitment/fitment-container/fitment-container.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: FitmentContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
