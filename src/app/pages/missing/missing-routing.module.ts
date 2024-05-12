import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissingComponent } from './missing.component';

const routes: Routes = [{ path: '', component: MissingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MissingRoutingModule { }
