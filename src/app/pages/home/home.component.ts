import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TosComponent } from '../../dialogs/tos/tos.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  showContent: boolean = false;

  constructor(
    private router: Router,
    private dialog: MatDialog
  ) {
    this.router.events.subscribe(event => {
        this.showContent = false; // Hide content when navigation to home starts
        setTimeout(() => {
          this.showContent = true; // Show content after 3 seconds
        }, 3000);
    });
  }

  openTOS(): void {
    this.dialog.open(TosComponent, {width: '500px'});
  }

}
