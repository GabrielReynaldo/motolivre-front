import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Motoboy } from 'src/app/models/motoboy';
import { MotoboyService } from 'src/app/services/motoboy.service';

@Component({
  selector: 'app-motoboy-delete',
  templateUrl: './motoboy-delete.component.html',
  styleUrls: ['./motoboy-delete.component.css']
})
export class MotoboyDeleteComponent implements OnInit {

  
  motoboy: Motoboy = {
    id:         '',
    nome:       '',
    cpf:        '',
    email:      '',
    senha:      '',
    perfis:     [],
    dataCriacao:''
  }

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

  delete(): void{
    this.service.delete(this.motoboy).subscribe(()=>{
      this.toast.success('Motoboy Deletado com sucesso', 'Delete');
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

  
}

