import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategorieProduitPage } from './categorie-produit.page';

const routes: Routes = [
  {
    path: '',
    component: CategorieProduitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategorieProduitPageRoutingModule {}
