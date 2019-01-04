import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentEditRoutingModule } from './content-edit-routing.module';
import { ContentEditPageComponent } from './pages/content-edit-page/content-edit-page.component';
import { EditorModule } from '@tinymce/tinymce-angular';


@NgModule({
  imports: [
    CommonModule,
    ContentEditRoutingModule,
    EditorModule
  ],
  declarations: [ContentEditPageComponent]
})
export class ContentEditModule { }
