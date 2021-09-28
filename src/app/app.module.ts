import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { PizarraComponent } from './componentes/pizarra/pizarra.component';
import { ModeloComponent } from './componentes/modelo/modelo.component';
import { ElementosComponent } from './componentes/elementos/elementos.component';
import { TipoComponent } from './componentes/tipo/tipo.component';
import { PanelDibujoComponent } from './componentes/panel-dibujo/panel-dibujo.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AddComponent } from './componentes/pizarra/add/add.component';
import { ListaComponent } from './componentes/pizarra/lista/lista.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ListaDComponent } from './componentes/panel-dibujo/lista-d/lista-d.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    UsuarioComponent,
    PizarraComponent,
    ModeloComponent,
    ElementosComponent,
    TipoComponent,
    PanelDibujoComponent,
    AddComponent,
    ListaComponent,
    NavbarComponent,
    ListaDComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[
    AddComponent
  ]
})
export class AppModule { }
