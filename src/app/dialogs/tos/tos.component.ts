import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-tos',
  standalone: true,
  imports: [],
  templateUrl: './tos.component.html',
  styleUrl: './tos.component.css'
})
export class TosComponent {

  constructor(private dialog: MatDialog) { }

  closeTOS(): void {
    this.dialog.closeAll();
  }

}
