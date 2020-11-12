import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'panier',
    loadChildren: () => import('./panier/panier.module').then( m => m.PanierPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'produit',
    loadChildren: () => import('./produitFolder/produit/produit.module').then( m => m.ProduitPageModule)
  },
  {
    path: 'categorie-produit/:category',
    loadChildren: () => import('./produitFolder/categorie-produit/categorie-produit.module').then( m => m.CategorieProduitPageModule)
  },
  {
    path: 'information/:category',
    loadChildren: () => import('./informationFolder/information/information.module').then( m => m.InformationPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
