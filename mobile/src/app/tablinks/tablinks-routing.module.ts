import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablinksPage } from './tablinks.page';

const routes: Routes = [
  {
    path: 'tablinks',
    component: TablinksPage,
    children: [
      {
        path: 'sleep-entries',
        loadChildren: () => import('../sleep-entries/sleep-entries.module').then(m => m.SleepEntriesPageModule)
      },
      {
        path: 'sleep-stats',
        loadChildren: () => import('../sleep-stats/sleep-stats.module').then(m => m.SleepStatsPageModule)
      },
      {
        path: 'reminder',
        loadChildren: () => import('../reminder/reminder.module').then(m => m.ReminderPageModule)
      },
      {
        path: '',
        redirectTo: '/tablinks/sleep-entries',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tablinks/sleep-entries',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablinksPageRoutingModule { }
