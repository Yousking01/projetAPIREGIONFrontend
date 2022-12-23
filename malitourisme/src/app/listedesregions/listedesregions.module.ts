import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListedesregionsPageRoutingModule } from './listedesregions-routing.module';

import { ListedesregionsPage } from './listedesregions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListedesregionsPageRoutingModule
  ],
  declarations: [ListedesregionsPage]
})
export class ListedesregionsPageModule {}
