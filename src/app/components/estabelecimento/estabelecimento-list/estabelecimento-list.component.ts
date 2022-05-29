import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Estabelecimento } from 'src/app/models/estabelecimento';

@Component({
  selector: 'app-estabelecimento-list',
  templateUrl: './estabelecimento-list.component.html',
  styleUrls: ['./estabelecimento-list.component.css']
})
export class EstabelecimentoListComponent implements OnInit {

  ELEMENT_DATA: Estabelecimento[] = [
  {
    id: 1,
    nome: 'Valdir Cezar',
    cpfcnpj: '123.456.789.10',
    email: 'Valdir@email.com',
    senha: '123',
    perfis: ['0'],
    dataCriacao: '15/08/2022'
  }
  ]
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'acoes'];
  dataSource = new MatTableDataSource<Estabelecimento>(this.ELEMENT_DATA);

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}