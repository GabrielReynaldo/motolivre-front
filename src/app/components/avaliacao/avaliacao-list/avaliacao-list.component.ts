import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Avaliacao } from 'src/app/models/avaliacao';
import { AvaliacaoService } from 'src/app/services/avaliacao.service';

@Component({
  selector: 'app-avaliacao-list',
  templateUrl: './avaliacao-list.component.html',
  styleUrls: ['./avaliacao-list.component.css']
})
export class AvaliacaoListComponent implements OnInit {

  ELEMENT_DATA: Avaliacao[] = [ ]

  displayedColumns: string[] = ['id', 'defeito','qualidade','melhora','observacao','motoboy','estabelecimento', 'dataAbertura', 'acoes'];
  dataSource = new MatTableDataSource<Avaliacao>(this.ELEMENT_DATA);
  
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(
    private service: AvaliacaoService
  ) { }

  ngOnInit(): void {
    this.findAll();
  }

findAll(): void{
  this.service.findAll().subscribe(resposta =>{
    this.ELEMENT_DATA = resposta;
    this.dataSource = new MatTableDataSource<Avaliacao>(this.ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
  })
}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
