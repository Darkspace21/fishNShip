import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategorieInformationPage } from './categorie-information.page';

const routes: Routes = [
  {
    path: '',
    component: CategorieInformationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategorieInformationPageRoutingModule {}
