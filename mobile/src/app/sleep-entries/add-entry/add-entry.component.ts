/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { SleepService } from '../sleep.service';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.scss'],
})
export class AddEntryComponent implements OnInit {


  addSleepEntryForm: FormGroup;
  sleepDuration;

  constructor(
    private fb: FormBuilder,
    private sleepService: SleepService,
    private loadingController: LoadingController,
    private router: Router
  ) { }

  ngOnInit() {
    this.addSleepEntryForm = this.fb.group({
      date: ['', Validators.required],
      time_of_sleep: ['', Validators.required],
      wake_up_time: ['', Validators.required],
    });
  };

  async onSubmit(form: FormGroup) {
    const loading = await this.loadingController.create({
      spinner: 'bubbles',
      message: 'Saving sleep entry..'
    });

    await loading.present();


    const sleepData = form.value;
    sleepData.time_of_sleep = this.setTime(form.value.time_of_sleep);
    sleepData.wake_up_time = this.setTime(form.value.wake_up_time);
    sleepData.date = this.setDate(form.value.date);
    sleepData.user_id = 2;
    sleepData.sleep_duration = +this.sleepDuration;
    console.log(sleepData);
    this.sleepService.addSleepEntry(sleepData).subscribe(
      async (data) => {
        console.log(data);
        this.reset();
        await this.loadingController.dismiss();
        this.router.navigate(['/tablinks/sleep-entries']);
      }, error => console.log(error)
    );
  }

  setTime(date) {
    const getHour = new Date(date).getHours();
    const getMinutes = new Date(date).getMinutes();
    const hour = getHour < 10 ? `0${getHour}` : getHour;
    const minutes = getMinutes < 10 ? `0${getMinutes}` : getMinutes;
    return `${hour}:${minutes}`;
  }

  setDate(date) {
    const month = new Date(date).getMonth() + 1;
    const day = new Date(date).getDate();
    return `${month}/${day}`;
  }


  setSleepDuration() {
    const sleepValue = this.addSleepEntryForm.get('time_of_sleep').value;
    const wakeUpValue = this.addSleepEntryForm.get('wake_up_time').value;
    const sleepInSeconds = (new Date(sleepValue).getHours() * 60) + (new Date(sleepValue).getMinutes());
    const wakeInSeconds = (new Date(wakeUpValue).getHours() * 60) + (new Date(wakeUpValue).getMinutes());
    // console.log(sleepInSeconds);
    // console.log(wakeInSeconds);

    if (sleepInSeconds >= 0 && wakeInSeconds >= 0) {

      if (sleepInSeconds > wakeInSeconds) {
        this.sleepDuration = ((1440 - sleepInSeconds) + wakeInSeconds) / 60;
      } else {
        this.sleepDuration = (wakeInSeconds - sleepInSeconds) / 60;
      };
    }
    else {
      return;
    }
    this.sleepDuration = this.sleepDuration.toFixed(2);
  };




  reset() {
    //console.log('reset');
    this.addSleepEntryForm.reset();
    this.sleepDuration = null;
  }


}
