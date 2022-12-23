import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterregionPage } from './ajouterregion.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterregionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterregionPageRoutingModule {}
