import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SleepStatsPage } from './sleep-stats.page';

const routes: Routes = [
  {
    path: '',
    component: SleepStatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SleepStatsPageRoutingModule {}
