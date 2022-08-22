import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Estabelecimento } from 'src/app/models/estabelecimento';
import { EstabelecimentoService } from 'src/app/services/estabelecimento.service';

@Component({
  selector: 'app-estabelecimento-list',
  templateUrl: './estabelecimento-list.component.html',
  styleUrls: ['./estabelecimento-list.component.css']
})
export class EstabelecimentoListComponent implements OnInit {

  ELEMENT_DATA: Estabelecimento[] = [
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
  dataSource = new MatTableDataSource<Estabelecimento>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private service: EstabelecimentoService
  ) { }

  ngOnInit(): void {
    this.findAll();
  }

  

 
  findAll(){
    this.service.findAll().subscribe(resposta=> {
      this.ELEMENT_DATA= resposta
      this.dataSource = new MatTableDataSource<Estabelecimento>(resposta);
      this.dataSource.paginator = this.paginator;
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}