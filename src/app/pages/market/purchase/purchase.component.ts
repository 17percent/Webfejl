import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../models/user.model';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrl: './purchase.component.css'
})
export class PurchaseComponent implements OnInit {

  showContent: boolean = false;
  currentUser: User | null = null;

  constructor(
    private router: Router,
    private userService: UserService
  ) {
    this.router.events.subscribe(event => {
      this.showContent = false; // Hide content when navigation to home starts
      setTimeout(() => {
        this.showContent = true; // Show content after 3 seconds
      }, 3000);
    });
  }

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe(user => {
      if (user) {
        this.currentUser = user;
      } else {
        this.currentUser = null;
      }
    });
  }

  continueShopping(): void {
    this.router.navigate(['/market']);
  }

  goToProfile(): void {
    this.router.navigate(['/profile']);
  }

  goToLobby(): void {
    this.router.navigate(['/lobby']);
  }

}
