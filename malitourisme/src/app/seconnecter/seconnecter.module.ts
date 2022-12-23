import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeconnecterPageRoutingModule } from './seconnecter-routing.module';

import { SeconnecterPage } from './seconnecter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeconnecterPageRoutingModule
  ],
  declarations: [SeconnecterPage]
})
export class SeconnecterPageModule {}
