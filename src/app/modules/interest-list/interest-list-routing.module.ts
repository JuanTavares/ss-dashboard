import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterestListPageComponent } from './pages/interest-list-page/interest-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: InterestListPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterestListRoutingModule { }
