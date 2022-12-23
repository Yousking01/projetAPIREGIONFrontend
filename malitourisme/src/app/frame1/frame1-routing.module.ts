import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Frame1Page } from './frame1.page';

const routes: Routes = [
  {
    path: '',
    component: Frame1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Frame1PageRoutingModule {}
