import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Avaliacao } from 'src/app/models/avaliacao';
import { Estabelecimento } from 'src/app/models/estabelecimento';
import { Motoboy } from 'src/app/models/motoboy';
import { AvaliacaoService } from 'src/app/services/avaliacao.service';
import { EstabelecimentoService } from 'src/app/services/estabelecimento.service';
import { MotoboyService } from 'src/app/services/motoboy.service';

@Component({
  selector: 'app-avaliacao-update',
  templateUrl: './avaliacao-update.component.html',
  styleUrls: ['./avaliacao-update.component.css']
})
export class AvaliacaoUpdateComponent implements OnInit {

  
  avaliacao: Avaliacao = {
    defeito: '',
    qualidade:'',
    melhora:'',
    observacao: '',
    estabelecimento:     '',
    motoboy:     '',
    nomeEstabelecimento: '',
    nomeMotoboy: '',
  }

  motoboys: Motoboy[]=[];
  estabelecimentos: Estabelecimento[]=[];

  defeito:            FormControl = new FormControl(null, [Validators.required]);
  qualidade:          FormControl = new FormControl(null, [Validators.required]);
  melhora:            FormControl = new FormControl(null, [Validators.required]);
  observacao:         FormControl = new FormControl(null, [Validators.required]);
  estabelecimento:    FormControl = new FormControl(null, [Validators.required]);
  motoboy:            FormControl = new FormControl(null, [Validators.required]);

  constructor(
    private avaliacaoService:                 AvaliacaoService,
    private motoboyService :                    MotoboyService,
    private estabelecimentoService: EstabelecimentoService,
    private toastService:                    ToastrService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.avaliacao.id = this.route.snapshot.paramMap.get('id');
    this.findById();
    this.findAllMotoboy();
    this.findAllEstabelecimentos();
  }
  findById(): void {
    this.avaliacaoService.findById(this.avaliacao.id).subscribe(resposta =>{
      this.avaliacao = resposta;
    }, ex =>{
      this.toastService.error(ex.error.error);
    });
  }

  update():void{
    this.avaliacaoService.update(this.avaliacao).subscribe(resposta =>{
      this.toastService.success('Avaliação alterado com sucesso','Nova Avaliação');
      this.router.navigate(['avaliacao']);
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
    return this.defeito.valid && this.qualidade.valid && this.melhora.valid 
       && this.observacao.valid && this.estabelecimento.valid && this.motoboy.valid
  }
}
