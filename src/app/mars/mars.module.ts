import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { MarsComponent } from './mars.component';
import { PhotoDataService } from '../rober-photos.service';

//primeng
import { DataViewModule } from 'primeng/dataview';

@NgModule({
  imports: [FormsModule, HttpClientModule, ReactiveFormsModule, DataViewModule],
  declarations: [MarsComponent],
  providers: [HttpClient, PhotoDataService],
})
export class MarsModule {}
