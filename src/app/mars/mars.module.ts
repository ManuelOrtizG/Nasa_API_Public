import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { MarsComponent } from './mars.component';
import { PhotoDataService } from '../rober-photos.service';
import { MarsRoutingModule } from './mars-routing.module';

//primeng
import { DataViewModule } from 'primeng/dataview';

@NgModule({
  imports: [HttpClientModule, DataViewModule, MarsRoutingModule],
  declarations: [MarsComponent],
  providers: [HttpClient, PhotoDataService],
})
export class MarsModule {}
