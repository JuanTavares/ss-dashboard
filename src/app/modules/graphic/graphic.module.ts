import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphicRoutingModule } from './graphic-routing.module';
import { GraphicPageComponent } from './pages/graphic-page/graphic-page.component';

@NgModule({
  imports: [
    CommonModule,
    GraphicRoutingModule
  ],
  declarations: [GraphicPageComponent]
})
export class GraphicModule { }
