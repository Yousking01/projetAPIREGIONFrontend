import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailRegionsPageRoutingModule } from './detail-regions-routing.module';

import { DetailRegionsPage } from './detail-regions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailRegionsPageRoutingModule
  ],
  declarations: [DetailRegionsPage]
})
export class DetailRegionsPageModule {}
