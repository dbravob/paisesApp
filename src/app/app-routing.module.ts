import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
  {
    path: '*',
    loadChildren: () => import('./pais/pais.module').then( m => m.PaisModule )
  },
  {
    path: '404',
    component: ErrorPageComponent
  } 
   
]


@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
