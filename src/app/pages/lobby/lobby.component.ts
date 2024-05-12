import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { productType } from '../../models/productType';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrl: './lobby.component.css'
})
export class LobbyComponent {

  showContent: boolean = false;
  productTypes = productType;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      this.showContent = false; // Hide content when navigation to home starts
      setTimeout(() => {
        this.showContent = true; // Show content after 3 seconds
      }, 3000);
    });
  }

}
