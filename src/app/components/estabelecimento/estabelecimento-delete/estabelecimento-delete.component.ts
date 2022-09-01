import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Estabelecimento } from 'src/app/models/estabelecimento';
import { EstabelecimentoService } from 'src/app/services/estabelecimento.service';

@Component({
  selector: 'app-estabelecimento-delete',
  templateUrl: './estabelecimento-delete.component.html',
  styleUrls: ['./estabelecimento-delete.component.css']
})
export class EstabelecimentoDeleteComponent implements OnInit {

  
  estabelecimento: Estabelecimento = {
    id:         '',
    nome:       '',
    cpf:        '',
    email:      '',
    senha:      '',
    perfis:     [],
    dataCriacao:''
  }

  constructor(
    private service: EstabelecimentoService,
    private toast: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.estabelecimento.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }
  findById(): void{
    this.service.findById(this.estabelecimento.id).subscribe(resposta =>{
      resposta.perfis=[]
      this.estabelecimento = resposta;
    })
  }

  delete(): void{
    this.service.delete(this.estabelecimento).subscribe(()=>{
      this.toast.success('Estabelecimento Deletado com sucesso', 'Delete');
      this.router.navigate(['estabelecimentos'])
    },ex => {
      console.log(ex);
      if(ex.error.errors){
        ex.error.errors.forEach(element => {
          this.toast.error(element.message); 
          
        });
      }else{
        this.toast.error(ex.error.message);
      }
    })
  }

  
}

