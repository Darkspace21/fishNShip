import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategorieInformationPageRoutingModule } from './categorie-information-routing.module';

import { CategorieInformationPage } from './categorie-information.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategorieInformationPageRoutingModule
  ],
  declarations: [CategorieInformationPage]
})
export class CategorieInformationPageModule {}
