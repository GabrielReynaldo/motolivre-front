import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { Chamado } from 'src/app/models/chamado';
import { Estabelecimento } from 'src/app/models/estabelecimento';
import { Motoboy } from 'src/app/models/motoboy';
import { ChamadoService } from 'src/app/services/chamado.service';
import { EstabelecimentoService } from 'src/app/services/estabelecimento.service';
import { MotoboyService } from 'src/app/services/motoboy.service';

@Component({
  selector: 'app-chamado-update',
  templateUrl: './chamado-update.component.html',
  styleUrls: ['./chamado-update.component.css']
})
export class ChamadoUpdateComponent implements OnInit {

  chamado: Chamado = {
    prioridade:  '',
    status:      '',
    titulo:      '',
    observacoes: '',
    estabelecimento:     '',
    motoboy:     '',
    nomeEstabelecimento: '',
    nomeMotoboy: '',
  }

  motoboys: Motoboy[]=[];
  estabelecimentos: Estabelecimento[]=[];

  prioridade: FormControl = new FormControl(null, [Validators.required]);
  status:     FormControl = new FormControl(null, [Validators.required]);
  titulo:     FormControl = new FormControl(null, [Validators.required]);
  observacoes:FormControl = new FormControl(null, [Validators.required]);
  estabelecimento:    FormControl = new FormControl(null, [Validators.required]);
  motoboy:    FormControl = new FormControl(null, [Validators.required]);

  constructor(
    private chamadoService:                 ChamadoService,
    private motoboyService :                MotoboyService,
    private estabelecimentoService: EstabelecimentoService,
    private toastService:                    ToastrService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.findAllMotoboy();
    this.findAllEstabelecimentos();
  }

  create():void{
    this.chamadoService.create(this.chamado).subscribe(resposta =>{
      this.toastService.success('Chamado criado com sucesso','Novo chamado');
      this.router.navigate(['chamados']);
    },ex =>{
      console.log(ex);
      this.toastService.error(ex.error.error)
    })
  }


  findAllMotoboy(): void {
    this.motoboyService.findAll().subscribe(resposta => {
      this.motoboys = resposta;
    })
  }

  findAllEstabelecimentos(): void {
    this.estabelecimentoService.findAll().subscribe(resposta => {
      this.estabelecimentos = resposta;
    })
  }

  validaCampos(): boolean{
    return this.prioridade.valid && this.status.valid && this.titulo.valid 
       && this.observacoes.valid && this.estabelecimento.valid && this.motoboy.valid
  }
}
