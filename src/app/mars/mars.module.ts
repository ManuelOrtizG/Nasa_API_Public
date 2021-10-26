import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { MarsComponent } from './mars.component';
import { PhotoDataService } from '../rober-photos.service';

//primeng
import { DataViewModule } from 'primeng/dataview';

@NgModule({
  imports: [HttpClientModule, DataViewModule],
  declarations: [MarsComponent],
  providers: [HttpClient, PhotoDataService],
})
export class MarsModule {}
