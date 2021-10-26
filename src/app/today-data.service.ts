import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodayData } from './interfaces';
import { Observable } from 'rxjs';
import { environment } from '../environments/environmet';

@Injectable()
export class TodayDataService {
  constructor(private http: HttpClient) {}

  getTodayData(): Observable<TodayData> {
    return this.http.get<TodayData>(
      `${environment.API_NASA_URL}/apod?api_key=${environment.API_NASA_KEY}`
    );
  }
}
