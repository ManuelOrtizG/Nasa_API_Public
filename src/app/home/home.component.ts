import { Component, OnInit } from '@angular/core';
import { TodayData } from '../interfaces';
import { TodayDataService } from '../today-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  data: TodayData;
  constructor(private todayDataService: TodayDataService) {}

  ngOnInit() {
    this.todayDataService.getTodayData().subscribe(
      (res) => {
        this.data = res;
        console.log('res', res);
      },
      (err) => {
        console.log('err', err);
      }
    );
  }
}
