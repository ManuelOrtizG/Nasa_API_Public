import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarsComponent } from './mars.component';

const routes: Routes = [{ path: '', component: MarsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarsRoutingModule {}
