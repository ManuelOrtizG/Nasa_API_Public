import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PhotoDatas } from './interfaces';
import { Observable } from 'rxjs';
import { environment } from '../environments/environmet';

@Injectable()
export class PhotoDataService {
  constructor(private http: HttpClient) {}

  getPhotosData(): Observable<PhotoDatas> {
    return this.http.get<PhotoDatas>(
      `${environment.API_NASA_URL}mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${environment.API_NASA_KEY}`
    );
  }
}
