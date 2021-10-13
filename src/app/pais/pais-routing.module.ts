import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { HomeComponent } from './pages/home/home.component';

const rutas: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'porPais', component: PorPaisComponent },
      { path: 'region', component: PorRegionComponent },
      { path: 'pais/:id', component: VerPaisComponent },
      { path: '**', redirectTo: 'porPais' }
    ]
  }
];



@NgModule({
  imports: [
    RouterModule.forChild( rutas )
  ],
  exports: [
    RouterModule
  ]
})
export class PaisRoutingModule { }
