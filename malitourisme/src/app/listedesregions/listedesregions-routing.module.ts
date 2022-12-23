import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListedesregionsPage } from './listedesregions.page';

const routes: Routes = [
  {
    path: '',
    component: ListedesregionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListedesregionsPageRoutingModule {}
