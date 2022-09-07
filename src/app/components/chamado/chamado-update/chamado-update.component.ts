import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.chamado.id= this.route.snapshot.paramMap.get('id');
    this.findById();
    this.findAllMotoboy();
    this.findAllEstabelecimentos();
  }

  findById(): void{
    this.chamadoService.findById(this.chamado.id).subscribe(resposta=>{
      this.chamado = resposta
    }, ex =>{
      this.toastService.error(ex.error.error)
    })
  }

  update():void{
    this.chamadoService.update(this.chamado).subscribe(resposta =>{
      this.toastService.success('Chamado atualizador com sucesso','Atualizar chamado');
      this.router.navigate(['chamados']);
    },ex =>{
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
  retornaStatus(status: any): string{
    if(status == '0'){
      return 'ABERTO'
    }else if(status == '1'){
      return 'EM ANDAMENTO'
    } else{
      return 'ENCERRADO'
    }
  }
  retornaPrioridade(prioridade: any): string{
    if(prioridade == '0'){
      return 'BAIXA'
    }else if(prioridade == '1'){
      return 'MEDIA'
    } else{
      return 'ALTA'
    }
  }
}
