import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketComponent } from './market.component';

// Function to introduce a delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const time = 1000;

const routes: Routes = [
  { path: '', component: MarketComponent },
  { path: 'purchase', loadChildren: () => import('./purchase/purchase.module').then(m => { return delay(time).then(() => m.PurchaseModule); }) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketRoutingModule { }
