import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { PopupForRedirectService } from '../../services/popup-for-redirect.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm = new FormGroup({
    email: new FormControl(''),
    pw: new FormControl('')
  });

  showContent: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private popupService: PopupForRedirectService
  ) {
    this.router.events.subscribe(event => {
      this.showContent = false; // Hide content when navigation to home starts
      setTimeout(() => {
        this.showContent = true; // Show content after 3 seconds
      }, 3000);
    });
  }

  loginFormSubmit() {
    const email = this.loginForm.get('email')?.value as string; // Type assertion
    const password = this.loginForm.get('pw')?.value as string; // Type assertion

    console.log(email, password);

    this.authService.login(email, password)
      .then(cred => {
        this.router.navigateByUrl('/home');
      })
      .catch(error => {
        console.log(error);
        this.popupService.showPopup("Incorrect login credentials provided!", 3000);
      });
  }


}
