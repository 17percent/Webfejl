import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { TosComponent } from './tos.component';



@NgModule({
  declarations: [TosComponent],
  imports: [
    CommonModule,
    MatDialogModule
  ]
})
export class TosModule { }
