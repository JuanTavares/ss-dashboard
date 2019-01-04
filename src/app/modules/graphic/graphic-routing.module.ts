import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GraphicPageComponent } from './pages/graphic-page/graphic-page.component';

const routes: Routes = [
    {
        path: '',
        component: GraphicPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GraphicRoutingModule { }
