import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailRegionsPage } from './detail-regions.page';

const routes: Routes = [
  {
    path: '',
    component: DetailRegionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailRegionsPageRoutingModule {}
