import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Frame1PageRoutingModule } from './frame1-routing.module';

import { Frame1Page } from './frame1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Frame1PageRoutingModule
  ],
  declarations: [Frame1Page]
})
export class Frame1PageModule {}
