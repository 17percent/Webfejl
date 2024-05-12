import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-missing',
  templateUrl: './missing.component.html',
  styleUrl: './missing.component.css'
})
export class MissingComponent {

  showContent: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      this.showContent = false; // Hide content when navigation to home starts
      setTimeout(() => {
        this.showContent = true; // Show content after 3 seconds
      }, 3000);
    });
  }

}
