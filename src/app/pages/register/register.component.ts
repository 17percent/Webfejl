import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  showContent: boolean = false;

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

  registerForm = new FormGroup({
    nickname: new FormControl(''),
    email: new FormControl(''),
    pw: new FormControl(''),
    address: new FormControl('')
  });

  registerFormSubmit() {
    const email = this.registerForm.get('email')?.value as string; // Type assertion
    const password = this.registerForm.get('pw')?.value as string; // Type assertion

    console.log(email, password);

    this.authService.register(email, password)
      .then(cred => {
        const user: User = {
          id: cred.user?.uid as string,
          email: this.registerForm.get('email')?.value as string,
          nickname: this.registerForm.get('nickname')?.value as string,
          address: this.registerForm.get('address')?.value as string,
          balance: 0
        };
        this.userService.create(user).then(_ => {
          console.log("User created");
        }).catch(error => {
          console.log(error);
        })
        this.router.navigateByUrl('/home');
      })
      .catch(error => {
        console.log(error);
      });
  }

}
