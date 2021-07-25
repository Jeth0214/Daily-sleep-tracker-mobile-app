import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEntryComponent } from './add-entry/add-entry.component';

import { SleepEntriesPage } from './sleep-entries.page';

const routes: Routes = [
  {
    path: '',
    component: SleepEntriesPage
  },
  {
    path: 'add-entry',
    component: AddEntryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SleepEntriesPageRoutingModule { }
