import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product } from '../../models/product.model';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { PopupForRedirectService } from '../../services/popup-for-redirect.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrl: './market.component.css'
})
export class MarketComponent implements OnInit {

  showContent: boolean = false;
  products = product;
  currentUser: User | null = null;

  constructor(
    private router: Router,
    private userService: UserService,
    private popupService: PopupForRedirectService
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

  purchaseProduct(price: number) {
    const userBalance = this.currentUser?.balance;
    if (userBalance as number >= price) {
      const newBalance = userBalance as number - price;
      this.userService.updateBalance(this.currentUser?.id as string, newBalance);
      console.log("Product purchased successfully");
      this.router.navigateByUrl('/market/purchase');
    } else {
      console.log("Insufficient funds");
      this.popupService.showPopup("Insufficient funds!", 3000);
    }
  }

}
