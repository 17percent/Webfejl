import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }

  login(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  register(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  logout() {
    return this.auth.signOut();
  }

  isUserLoggedIn() {
    return this.auth.user;
  }

  async deleteAuth(): Promise<void> {
    const user = await this.auth.currentUser;
    if (user) {
      console.log("Successfully deleted user authentication!");
      return user.delete();
    } else {
      return Promise.reject(new Error('No user logged in.'));
    }
  }
}
