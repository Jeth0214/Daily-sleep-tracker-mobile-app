/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { Sleep } from './sleep.model';
import { SleepService } from './sleep.service';

@Component({
  selector: 'app-sleep-entries',
  templateUrl: './sleep-entries.page.html',
  styleUrls: ['./sleep-entries.page.scss'],
})
export class SleepEntriesPage implements OnInit {

  sleepEntries: Sleep[];
  week;
  currentPage;
  lastPage;

  constructor(
    private sleepService: SleepService
  ) { }

  ngOnInit() {
    this.getSleepEntries(2);

  }

  ionViewWillEnter() {
    this.getSleepEntries(2);
  };

  getPaginatedSleepEntries(userId, weekNum) {
    this.sleepService.getSleepEntries(userId, weekNum).subscribe(
      (res) => {
        // console.log(res);
        this.currentPage = res['current_page'];
        this.sleepEntries = res['data'];
      }
    );
  }

  getSleepEntries(userId) {
    this.sleepService.getSleepEntries(userId).subscribe(
      (res) => {
        this.lastPage = res['last_page'];
        this.week = res['last_page'];
        //console.log(this.lastPage);
        this.getPaginatedSleepEntries(userId, this.lastPage);
      }
    );
  }

  lastWeek() {
    this.week--;
    //console.log(this.week);
    this.getPaginatedSleepEntries(2, this.week);
  }

  nextWeek() {
    this.week++;
    //console.log(this.week);
    this.getPaginatedSleepEntries(2, this.week);
  }


}
