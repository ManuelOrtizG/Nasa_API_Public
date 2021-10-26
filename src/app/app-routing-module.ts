import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EarthComponent } from './earth/earth.component';
import { HomeComponent } from './home/home.component';
import { MarsComponent } from './mars/mars.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'mars',
    loadChildren: () => import('./mars/mars.module').then((m) => m.MarsModule),
  },
  { path: 'earth', component: EarthComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
