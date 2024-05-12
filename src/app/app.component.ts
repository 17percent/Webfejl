import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router, NavigationStart } from '@angular/router';
import { PopupForRedirectService } from './services/popup-for-redirect.service';
import { filter } from 'rxjs/operators';
import { SpinnerService } from './services/spinner.service';
import { AuthService } from './services/auth.service';
import { User } from './models/user.model';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Phabric';
  loggedInUser?: firebase.default.User | null;
  currentUser: User | null = null;

  constructor(
    private router: Router,
    private popupService: PopupForRedirectService,
    private spinnerService: SpinnerService,
    private authService: AuthService,
    private userService: UserService
  ) {
    this.router.events.pipe(
      filter((event): event is NavigationStart => event instanceof NavigationStart)
    ).subscribe((event: NavigationStart) => {
      // Show popup before navigation
      this.popupService.showPopup('Redirecting to the requested page...', 3000);
    });
    this.authService.isUserLoggedIn().subscribe(user => {
      this.loggedInUser = user;
      localStorage.setItem('user', JSON.stringify(this.loggedInUser));
    }, error => {
      console.error(error);
      localStorage.setItem('user', JSON.stringify('null'));
    })
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

  onPageClick(): void {
    this.spinnerService.show();
  }

  @ViewChild('sidenav') sidenav!: MatSidenav;

  // Scroll to top when button is clicked
  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
