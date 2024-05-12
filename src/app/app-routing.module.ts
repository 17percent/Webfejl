import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './services/auth.guard';

// Function to introduce a delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const time = 0;

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => { return delay(time).then(() => m.HomeModule); }) },
  { path: 'lobby', loadChildren: () => import('./pages/lobby/lobby.module').then(m => { return delay(time).then(() => m.LobbyModule); }) },
  { path: 'market', loadChildren: () => import('./pages/market/market.module').then(m => { return delay(time).then(() => m.MarketModule); }), canActivate: [authGuard] },
  { path: 'profile', loadChildren: () => import('./pages/profile/profile.module').then(m => { return delay(time).then(() => m.ProfileModule); }), canActivate: [authGuard] },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => { return delay(time).then(() => m.LoginModule); }) },
  { path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => { return delay(time).then(() => m.RegisterModule); }) },
  { path: '**', loadChildren: () => import('./pages/missing/missing.module').then(m => { return delay(time).then(() => m.MissingModule); }) }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
