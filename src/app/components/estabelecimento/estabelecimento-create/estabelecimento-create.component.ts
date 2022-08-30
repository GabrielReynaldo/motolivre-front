import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Estabelecimento } from 'src/app/models/estabelecimento';
import { EstabelecimentoService } from 'src/app/services/estabelecimento.service';

@Component({
  selector: 'app-estabelecimento-create',
  templateUrl: './estabelecimento-create.component.html',
  styleUrls: ['./estabelecimento-create.component.css']
})
export class EstabelecimentoCreateComponent implements OnInit {

  estabelecimento: Estabelecimento = {
    id:         '',
    nome:       '',
    cpf:        '',
    email:      '',
    senha:      '',
    perfis:     [],
    dataCriacao:''
  }

  nome: FormControl =  new FormControl(null, Validators.minLength(3));
  cpf: FormControl =       new FormControl(null, Validators.required);
  email: FormControl =        new FormControl(null, Validators.email);
  senha: FormControl = new FormControl(null, Validators.minLength(3));

  constructor(
    private service: EstabelecimentoService,
    private toast: ToastrService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  create(): void{
    this.service.create(this.estabelecimento).subscribe(()=>{
      this.toast.success('Estabelecimento cadastrado com sucesso', 'Cadastro');
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

  addPerfil(perfil: any):void{

    if(this.estabelecimento.perfis.includes(perfil)){
      this.estabelecimento.perfis.splice(this.estabelecimento.perfis.indexOf(perfil),1);
    }else{
      this.estabelecimento.perfis.push(perfil);
      console.log(this.estabelecimento.perfis);
    }
  }

  validaCampos(): boolean{
    return this.nome.valid && this.cpf.valid && this.email.valid && this.senha.valid
  }

}
