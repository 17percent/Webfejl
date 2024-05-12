import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  showContent: boolean = false;
  currentUser: User | null = null;
  newAddress: string | undefined;
  formBalance: number | undefined;
  userBalance: number | undefined;
  newBalance: number | undefined;
;
  constructor(
    private router: Router,
    private authService: AuthService,
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

  addressForm = new FormGroup({
    address: new FormControl('')
  });

  balanceForm = new FormGroup({
    balance: new FormControl('')
  });

  addressFormSubmit() {
    const newAddress = this.addressForm.get('address')?.value as string; // Type assertion
    console.log("Changed addres to: " + newAddress);
    this.userService.updateAddress(this.currentUser?.id as string, newAddress).then(_ => {
      console.log("Address updated");
    }).catch(error => {
      console.log(error);
    })
  }

  balanceFormSubmit() {
    const formBalance = this.balanceForm.get('balance')?.value; // Type assertion
    const userBalance = this.currentUser?.balance;
    if (typeof formBalance === 'number' && typeof userBalance === 'number') {
      const newBalance = formBalance + userBalance;
      this.userService.updateBalance(this.currentUser?.id as string, newBalance as number).then(_ => {
        console.log("Balanced topped up by: " + formBalance);
      }).catch(error => {
        console.log(error);
      })
    } else {
      console.log("Form balance or user balance is not a number or is undefined");
    }
  }

  deleteAccount(): void {
    if (confirm('Are you sure you want to delete your account?')) {
      const userId = this.currentUser?.id;
      if (userId) {
          this.userService.deleteData(userId).then(() => { // Deleting user data
          this.authService.deleteAuth(); // Deleting authentication
          this.authService.logout(); // Logging out
        
          console.log('Account deleted successfully');
          // Optionally, navigate to another route after deletion
          this.router.navigate(['/']);
        }).catch(error => {
          console.error('Error deleting account:', error);
          // Handle error (e.g., display error message)
        });
      } else {
        console.error('Unable to delete account: User ID not found');
        // Handle error (e.g., display error message)
      }
    }
  }

  logout() {
    this.authService.logout().then(() => {
      console.log("Logged out");
      this.router.navigateByUrl('/login');
    }).catch(error => {
      console.log(error);
    })
  }

}
