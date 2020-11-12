import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategorieProduitPageRoutingModule } from './categorie-produit-routing.module';

import { CategorieProduitPage } from './categorie-produit.page';
import { HeaderComponent } from '../../component/header/header.component';
import { PoissonsComponent } from '../poissons/poissons.component';
import { CrustacesComponent } from '../crustaces/crustaces.component';
import { CoquillagesComponent } from '../coquillages/coquillages.component';
import { PromotionsComponent } from '../promotions/promotions.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategorieProduitPageRoutingModule
  ],
  declarations: [CategorieProduitPage, HeaderComponent,
                  PoissonsComponent, CrustacesComponent,
                  CoquillagesComponent, PromotionsComponent]
})
export class CategorieProduitPageModule {}
