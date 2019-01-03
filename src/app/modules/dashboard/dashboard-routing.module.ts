import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardPageComponent,
    children: [
      {
        path: 'graphic',
        loadChildren: 'src/app/modules/graphic/graphic.module#GraphicModule'
      },
      {
        path: 'users',
        loadChildren: 'src/app/modules/users/users.module#UsersModule'
      },
      {
        path: 'content-edit',
        loadChildren: 'src/app/modules/content-edit/content-edit.module#ContentEditModule'
      },
      {
        path: 'interest-list',
        loadChildren: 'src/app/modules/interest-list/interest-list.module#InterestListModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
