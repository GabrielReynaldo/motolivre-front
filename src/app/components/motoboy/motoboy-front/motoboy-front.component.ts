import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Motoboy } from 'src/app/models/motoboy';
import { MotoboyService } from 'src/app/services/motoboy.service';

@Component({
  selector: 'app-motoboy-front',
  templateUrl: './motoboy-front.component.html',
  styleUrls: ['./motoboy-front.component.css']
})
export class MotoboyFrontComponent implements OnInit {

  ELEMENT_DATA: Motoboy[] = [
    // {
     //  id: 1,
      // nome: 'Valdir Cezar',
      // cpfcnpj: '123.456.789.10',
     //  email: 'Valdir@email.com',
      // senha: '123',
      // perfis: ['0'],
      // dataCriacao: '15/08/2022'
     //}
     ]
     displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'acoes'];
     dataSource = new MatTableDataSource<Motoboy>(this.ELEMENT_DATA);
   
     @ViewChild(MatPaginator) paginator: MatPaginator;
     constructor(
       private service: MotoboyService
     ) { }
   
     ngOnInit(): void {
       this.findAll();
     }
   
     
   
    
     findAll(){
       this.service.findAll().subscribe(resposta=> {
         this.ELEMENT_DATA= resposta
         this.dataSource = new MatTableDataSource<Motoboy>(resposta);
         this.dataSource.paginator = this.paginator;
       })
     }
     applyFilter(event: Event) {
       const filterValue = (event.target as HTMLInputElement).value;
       this.dataSource.filter = filterValue.trim().toLowerCase();
     }
   
   }