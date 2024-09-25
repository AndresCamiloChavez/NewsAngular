import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component'), // porque se utilizo el defual en la clase,
    children: [
      {
        path: 'change-detaction',
        title: 'Change Detaction',
        loadComponent: () =>
          import(
            './dashboard/pages/change-detaction/change-detaction.component'
          ),
      },
      {
        path: 'control-flow',
        title: 'Control Flow',
        loadComponent: () =>
          import('./dashboard/pages/control-flow/control-flow.component'),
      },
      {
        path: 'defer-options',
        title: 'Defer Option',
        loadComponent: () =>
          import('./dashboard/pages/defer-options/defer-options.component'),
      },
      {
        path: 'defer-views',
        title: 'Defer Views',
        loadComponent: () =>
          import('./dashboard/pages/defer-views/defer-views.component'),
      },
      {
        path: 'user/:id',
        title: 'User',
        loadComponent: () => import('./dashboard/pages/user/user.component'),
      },
      {
        path: 'users',
        title: 'Users',
        loadComponent: () => import('./dashboard/pages/users/users.component'),
      },
      {
        path: 'view-transtitions-1',
        title: 'View Transtitions-1',
        loadComponent: () =>
          import(
            './dashboard/pages/view-transtitions/view-transtitions1.component'
          ),
      },
      {
        path: 'view-transtitions-2',
        title: 'View Transtitions-2',
        loadComponent: () =>
          import(
            './dashboard/pages/view-transtitions/view-transtitions2.component'
          ),
      },

      {
        path: '',
        redirectTo: '/dashboard/control-flow',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/dashboard',
  },
];
