import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { PhotoDatas } from '../interfaces';
import { PhotoDataService } from '../rober-photos.service';

@Component({
  selector: 'app-mars',
  templateUrl: './mars.component.html',
  styleUrls: ['./mars.component.css'],
  providers: [MessageService],
})
export class MarsComponent implements OnInit {
  photos: PhotoDatas;
  constructor(
    private photoDataService: PhotoDataService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    //this.getImage();
  }
  getImage() {
    this.photoDataService.getPhotosData().subscribe(
      (res) => {
        this.photos = res;
        console.log('res', res);
      },
      (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Location error',
          detail: err.message,
        });
        console.log('err', err);
      }
    );
  }
}
