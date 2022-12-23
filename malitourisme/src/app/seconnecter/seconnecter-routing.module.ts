import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeconnecterPage } from './seconnecter.page';

const routes: Routes = [
  {
    path: '',
    component: SeconnecterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeconnecterPageRoutingModule {}
