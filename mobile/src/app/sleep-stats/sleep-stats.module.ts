import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SleepStatsPageRoutingModule } from './sleep-stats-routing.module';

import { SleepStatsPage } from './sleep-stats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SleepStatsPageRoutingModule
  ],
  declarations: [SleepStatsPage]
})
export class SleepStatsPageModule {}
