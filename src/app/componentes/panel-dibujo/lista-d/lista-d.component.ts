import { Component, OnInit } from '@angular/core';
import { ServService } from 'src/app/servicios/serv.service';

@Component({
  selector: 'app-lista-d',
  templateUrl: './lista-d.component.html',
  styleUrls: ['./lista-d.component.scss']
})
export class ListaDComponent implements OnInit {
  itemsModelos:any;


  constructor( private serv: ServService) {
      this.serv.retornarModelos().subscribe( itemsM=> {
          this.itemsModelos = itemsM;
        }
      )

   }

  ngOnInit(): void {
  }

}
