import { Routes } from '@angular/router';
import { LoginComponent } from '@pages/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'browse',
    loadChildren: () =>
      import('./pages/browse/browse.module').then((m) => m.BrowseModule),
  },
];
