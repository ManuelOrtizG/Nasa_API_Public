import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MarsComponent } from './mars/mars.component';
import { EarthComponent } from './earth/earth.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing-module';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TodayDataService } from './today-data.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { SafePipe } from './safe.pipe';
import { EarthDataService } from './earth-data.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    MarsComponent,
    EarthComponent,
    HomeComponent,
    NotFoundComponent,
    TopBarComponent,
    SafePipe,
  ],
  bootstrap: [AppComponent],
  providers: [HttpClient, TodayDataService, EarthDataService],
})
export class AppModule {}
