import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrackingComponent } from './tracking/tracking.component';

const routes: Routes = [
  {
    path: 'tracking',
    component: TrackingComponent,
  },
  {
    path: '**',
    redirectTo: 'tracking',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
