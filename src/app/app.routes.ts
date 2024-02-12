import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'products',
    loadComponent: () => import('./product-card/product-card.component').then((m) => m.ProductCardComponent),
  },
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
];
