import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Motoboy } from 'src/app/models/motoboy';
import { MotoboyService } from 'src/app/services/motoboy.service';

@Component({
  selector: 'app-motoboy-update',
  templateUrl: './motoboy-update.component.html',
  styleUrls: ['./motoboy-update.component.css']
})
export class MotoboyUpdateComponent implements OnInit {

 
  motoboy: Motoboy = {
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
    private service: MotoboyService,
    private toast: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.motoboy.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }
  findById(): void{
    this.service.findById(this.motoboy.id).subscribe(resposta =>{
      resposta.perfis=[]
      this.motoboy = resposta;
    })
  }

  update(): void{
    this.service.update(this.motoboy).subscribe(()=>{
      this.toast.success('Motoboy Atualizado com sucesso', 'Update');
      this.router.navigate(['motoboys'])
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

    if(this.motoboy.perfis.includes(perfil)){
      this.motoboy.perfis.splice(this.motoboy.perfis.indexOf(perfil),1);
    }else{
      this.motoboy.perfis.push(perfil);
      console.log(this.motoboy.perfis);
    }
  }

  validaCampos(): boolean{
    return this.nome.valid && this.cpf.valid && this.email.valid && this.senha.valid
  }

}
