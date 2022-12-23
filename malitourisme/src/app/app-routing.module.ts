import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  {
    path: '',
    redirectTo: 'frame1',
    pathMatch: 'full'
  },
  {
    path: 'accueil',
    loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'splashcreen',
    loadChildren: () => import('./splashcreen/splashcreen.module').then( m => m.SplashcreenPageModule)
  },
  {
    path: 'frame1',
    loadChildren: () => import('./frame1/frame1.module').then( m => m.Frame1PageModule)
  },
  {
    path: 'seconnecter',
    loadChildren: () => import('./seconnecter/seconnecter.module').then( m => m.SeconnecterPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  // {
  //   path: 'menu',
  //   loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  // },
  {
    path: 'listedesregions',
    loadChildren: () => import('./listedesregions/listedesregions.module').then( m => m.ListedesregionsPageModule)
  },
  {
    path: 'detail-regions/:id',
    loadChildren: () => import('./detail-regions/detail-regions.module').then( m => m.DetailRegionsPageModule)
  },
  {
    path: 'ajouterregion',
    loadChildren: () => import('./ajouterregion/ajouterregion.module').then( m => m.AjouterregionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
