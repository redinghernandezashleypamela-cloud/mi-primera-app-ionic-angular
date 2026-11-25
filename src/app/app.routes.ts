import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { AboutPage } from './about/about.page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'acerca', component: AboutPage },
  { path: '**', redirectTo: '' }
];
