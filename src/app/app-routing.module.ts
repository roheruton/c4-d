import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './componentes/inicio/inicio.component';
import { PanelDibujoComponent } from './componentes/panel-dibujo/panel-dibujo.component';
import { PizarraComponent } from './componentes/pizarra/pizarra.component';

const routes: Routes = [
  {
   path:'',
   component:InicioComponent 
  },
  {
    path:'pizarra',
    component:PizarraComponent 
   },
   {
    path:'modelo',
    component:PanelDibujoComponent 
   },
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
