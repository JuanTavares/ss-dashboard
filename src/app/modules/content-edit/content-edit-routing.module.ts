import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentEditPageComponent } from './pages/content-edit-page/content-edit-page.component';

const routes: Routes = [
  {
    path: '',
    component: ContentEditPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentEditRoutingModule { }
