import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterestListRoutingModule } from './interest-list-routing.module';
import { InterestListPageComponent } from './pages/interest-list-page/interest-list-page.component';

@NgModule({
  imports: [
    CommonModule,
    InterestListRoutingModule
  ],
  declarations: [InterestListPageComponent]
})
export class InterestListModule { }
