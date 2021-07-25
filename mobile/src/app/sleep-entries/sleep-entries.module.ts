import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SleepEntriesPageRoutingModule } from './sleep-entries-routing.module';

import { SleepEntriesPage } from './sleep-entries.page';
import { AddEntryComponent } from './add-entry/add-entry.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SleepEntriesPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SleepEntriesPage, AddEntryComponent]
})
export class SleepEntriesPageModule { }
