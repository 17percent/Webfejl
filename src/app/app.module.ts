import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LobbyComponent } from './pages/lobby/lobby.component';
import { MarketComponent } from './pages/market/market.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MissingComponent } from './pages/missing/missing.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { LoadingComponent } from './pages/loading/loading.component';
import { PurchaseComponent } from './pages/market/purchase/purchase.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MatDialogModule } from '@angular/material/dialog';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire/compat';
import { DiscountPercentagePipe } from './services/discount-percentage.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LobbyComponent,
    MarketComponent,
    MissingComponent,
    DiscountPercentagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    LoadingComponent,
    MatDialogModule,
    AngularFireModule.initializeApp({ "projectId": "phabric-af18a", "appId": "1:153680551819:web:edac3960dc2d49052f598e", "storageBucket": "phabric-af18a.appspot.com", "apiKey": "AIzaSyAcqtVQy1lAdyyrQOk6w0rDTiNhcnd7_A0", "authDomain": "phabric-af18a.firebaseapp.com", "messagingSenderId": "153680551819", "measurementId": "G-FHXE2EX05H" }),
    // provideFirebaseApp(() => initializeApp({"projectId":"phabric-af18a","appId":"1:153680551819:web:edac3960dc2d49052f598e","storageBucket":"phabric-af18a.appspot.com","apiKey":"AIzaSyAcqtVQy1lAdyyrQOk6w0rDTiNhcnd7_A0","authDomain":"phabric-af18a.firebaseapp.com","messagingSenderId":"153680551819","measurementId":"G-FHXE2EX05H"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
