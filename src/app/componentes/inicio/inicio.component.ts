import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddComponent } from '../pizarra/add/add.component';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor( public dialogoadd: MatDialog) { }

  ngOnInit(): void {
  }

    open(){
    let dialogRef = this.dialogoadd.open(AddComponent,{
      width: '250px' });
    dialogRef.afterClosed().subscribe(result=>{
      console.log('cerrado')
    })
  }
   


}
