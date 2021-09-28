import { Component, OnInit } from '@angular/core';
import { ServService } from '../../../servicios/serv.service';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  items:any;
  //items: Observable<any[]>;
  //constructor(firestore: AngularFirestore){
  //this.items = firestore.collection('pizarra').valueChanges();
  //}

  constructor(private serv: ServService) { 
    this.serv.retornarItems().subscribe(items=>{
      this.items=items;
    })
    
  }

  ngOnInit(): void {
  }

}
