import { Component, OnInit } from '@angular/core';
import { Pizarra, ServService } from 'src/app/servicios/serv.service'; 
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { inject } from '@angular/core/testing';
import { PizarraComponent } from '../pizarra.component';
import { isEmptyExpression } from '@angular/compiler';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  fecha_actual = new Date();
  pizarra:any={
    nombre: '',
    descripcion: '',
    fecha_alta: Date.now(),
    fecha_modificacion:  Date.now(),
    indicador: 'A',
    id_grupo: 'G',
    usuario:'rsuarezl',
  };

  //modal: Modal|undefined;

  constructor(private serv:ServService, 
              public dialog: MatDialogRef<AddComponent>) {   }

  ngOnInit(): void {  }

  agregarPizarra(){ 
    
    this.serv.addPizarra(this.pizarra) 
  this.dialog.close(); 
}






  

}
