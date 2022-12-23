import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterregionPageRoutingModule } from './ajouterregion-routing.module';

import { AjouterregionPage } from './ajouterregion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterregionPageRoutingModule
  ],
  declarations: [AjouterregionPage]
})
export class AjouterregionPageModule {}
