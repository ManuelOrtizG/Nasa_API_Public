import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { debounceTime } from 'rxjs/operators';
import { EarthDataService } from '../earth-data.service';

@Component({
  selector: 'app-earth',
  templateUrl: './earth.component.html',
  styleUrls: ['./earth.component.css'],
  providers: [MessageService],
})
export class EarthComponent implements OnInit {
  imageUrl: string;
  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private earthDataService: EarthDataService
  ) {
    this.formGroup = formBuilder.group({
      lon: ['-95.33', [Validators.required]],
      lat: ['29.78', [Validators.required]],
    });

    this.formGroup.valueChanges
      .pipe(debounceTime(500))
      .subscribe((value) => this.getImage(value.lon, value.lat));
  }

  ngOnInit() {
    this.getImage(-95.33, 29.78);
  }

  getImage(lon: number, lat: number) {
    this.earthDataService.getImageLocalized(lon, lat).subscribe(
      (res) => {
        this.imageUrl = res.url;
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
