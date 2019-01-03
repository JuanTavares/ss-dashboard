import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentEditRoutingModule } from './content-edit-routing.module';
import { ContentEditPageComponent } from './pages/content-edit-page/content-edit-page.component';

@NgModule({
  imports: [
    CommonModule,
    ContentEditRoutingModule
  ],
  declarations: [ContentEditPageComponent]
})
export class ContentEditModule { }
