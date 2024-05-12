import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  collectionName = 'Users';

  constructor(
    private afs: AngularFirestore,
    private auth: AngularFireAuth
  ) { }

  create(user: User) {
    return this.afs.collection<User>(this.collectionName).doc(user.id).set(user);
  }

  getCurrentUser(): Observable<User | null | undefined> {
    return this.auth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`${this.collectionName}/${user.uid}`).valueChanges();
        } else {
          return of(null); // Return null if user is not signed in
        }
      })
    );
  }

  updateAddress(userId: string, address: string) {
    return this.afs.doc<User>(`${this.collectionName}/${userId}`).update({ address });
  }

  updateBalance(userId: string, balance: number) {
    return this.afs.doc<User>(`${this.collectionName}/${userId}`).update({ balance });
  }

  async deleteData(userId: string): Promise<void> {
      await this.afs.doc(`${this.collectionName}/${userId}`).delete();
    console.log("Successfully deleted user data!");
  }
}
