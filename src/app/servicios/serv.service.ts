import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreModule } from '@angular/fire/firestore'
import { Observable } from 'rxjs';
//import 'firebas/firestore';


export interface Pizarra{
  nombre: string;
  descripcion: string;
  fecha_alta: Date;
  fecha_modificacion: string;
  indicador: string;
  id_grupo: string;
  usuario:string;
}

export interface Modelo{
  nombre:string,
  descripcion: string,
  fecha_alta:Date,
  fecha_modificacion: string,
  indicador:string,
  id_tipo:string,
  id_pizarra:string
}

@Injectable({
  providedIn: 'root'
})
export class ServService {
  
  private itemsCollection: AngularFirestoreCollection<Pizarra>;
  private itemsCollectionModelos: AngularFirestoreCollection<Modelo>;
  //items: Observable<Pizarra[]>;
  items: Observable<any[]>;
  modelos: Observable<any[]>;

  constructor(private afs:AngularFirestore) {
    this.itemsCollection= afs.collection<Pizarra>('pizarra');
    this.itemsCollectionModelos= afs.collection<Modelo>('modelo')

   this.items = afs.collection('pizarra').valueChanges();
   this.modelos = afs.collection('modelo').valueChanges();
    //this.items= this.itemsCollection.valueChanges();
   }

  retornarItems()             {  return this.items; }

  retornarModelos()           {  return this.modelos;  }

  addPizarra(pizarra: Pizarra){  this.itemsCollection.add(pizarra); }
  
  addModelo(modelo:Modelo)    {   this.itemsCollectionModelos.add(modelo);}


}
