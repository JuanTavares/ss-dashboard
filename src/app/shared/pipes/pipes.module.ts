import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenderToPtPipe } from './gender-to-pt.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GenderToPtPipe],
  exports: [GenderToPtPipe]
})
export class PipesModule { }
