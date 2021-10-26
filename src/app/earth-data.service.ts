import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environmet';

@Injectable()
export class EarthDataService {
  constructor(private http: HttpClient) {}

  getImageLocalized(lon: number, lat: number): Observable<any> {
    // const HTTPOptionsForText: any = {
    //   headers: new HttpHeaders().set(
    //     'Content-type',
    //     'text/plain; charset=uft-8'
    //   ),
    //   responseType: 'blob',
    // };

    return this.http.get<any>(
      `${environment.API_NASA_URL}/earth/assets?lon=${lon}&lat=${lat}&date=2018-01-01&dim=0.15&api_key=${environment.API_NASA_KEY}`
      // HTTPOptionsForText
    );
  }
}
