import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class PopupForRedirectService {

  constructor(private snackBar: MatSnackBar, private router: Router) { }

  showPopup(message: string, duration: number) {
    this.snackBar.open(message, 'Close', { panelClass: ['snackbar'], duration: duration });
  }
}
