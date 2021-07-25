import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sleep } from './sleep.model';

@Injectable({
  providedIn: 'root'
})
export class SleepService {

  url = 'http://127.0.0.1:8000/api/sleeps';
  constructor(
    private http: HttpClient
  ) { }

  addSleepEntry(data): Observable<Sleep> {
    return this.http.post<Sleep>(this.url, data);
  }

  getSleepEntries(id: number, num?: number): Observable<Sleep[]> {
    return this.http.get<Sleep[]>(`${this.url}/${id}?page=${num}`);
  }
}
