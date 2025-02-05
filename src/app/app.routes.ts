import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'calculate',
    loadComponent: () => import('./calculate/calculate.page').then( m => m.CalculatePage)
  },
  {
    path: 'num-to-letter-traductor',
    loadComponent: () => import('./num-to-letter-traductor/num-to-letter-traductor.page').then( m => m.NumToLetterTraductorPage)
  },
  {
    path: 'multiplication-table',
    loadComponent: () => import('./multiplication-table/multiplication-table.page').then( m => m.MultiplicationTablePage)
  },
  {
    path: 'personal-expiriance',
    loadComponent: () => import('./personal-expiriance/personal-expiriance.page').then( m => m.PersonalExpiriancePage)
  },
];
