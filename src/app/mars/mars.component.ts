import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { PhotoData, PhotoDatas } from '../interfaces';
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
    this.getImage();
  }
  getImage() {
    this.photoDataService.getPhotosData().subscribe(
      (res: any) => {
        this.photos = res.photos;
        console.log('res', res);
        console.log('photod', this.photos);
        console.log('res', res.photos);
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
