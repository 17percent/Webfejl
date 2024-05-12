import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  private _showSpinner: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  get showSpinner(): Observable<boolean> {
    return this._showSpinner.asObservable();
  }

  show(): void {
    this._showSpinner.next(true);
    timer(3000).subscribe(() => {
      this.hide();
    });
  }

  hide(): void {
    this._showSpinner.next(false);
  }

}
