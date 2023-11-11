import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    title: 'Home',
    loadComponent: () =>
      import('./core/pages/home/home.component').then(
        (mod) => mod.HomeComponent
      ),
  },
  {
    path: 'about',
    title: 'About',
    loadComponent: () =>
      import('./core/pages/about/about.component').then(
        (mod) => mod.AboutComponent
      ),
  },
  {
    path: 'blog',
    title: 'Blog',
    loadComponent: () =>
      import('./core/pages/blog/blog.component').then(
        (mod) => mod.BlogComponent
      ),
  },
  {
    path: 'blog/:postId',
    title: 'Blog',
    loadComponent: () =>
      import('./core/pages/blog/blog.component').then(
        (mod) => mod.BlogComponent
      ),
  },
];
