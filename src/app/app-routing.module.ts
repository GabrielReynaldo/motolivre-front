import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { ChamadoCreateComponent } from './components/chamado/chamado-create/chamado-create.component';
import { ChamadoListComponent } from './components/chamado/chamado-list/chamado-list.component';
import { ChamadoReadComponent } from './components/chamado/chamado-read/chamado-read.component';
import { ChamadoUpdateComponent } from './components/chamado/chamado-update/chamado-update.component';
import { EstabelecimentoCreateComponent } from './components/estabelecimento/estabelecimento-create/estabelecimento-create.component';
import { EstabelecimentoDeleteComponent } from './components/estabelecimento/estabelecimento-delete/estabelecimento-delete.component';
import { EstabelecimentoListComponent } from './components/estabelecimento/estabelecimento-list/estabelecimento-list.component';
import { EstabelecimentoUpdateComponent } from './components/estabelecimento/estabelecimento-update/estabelecimento-update.component';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MotoboyCreateComponent } from './components/motoboy/motoboy-create/motoboy-create.component';
import { MotoboyDeleteComponent } from './components/motoboy/motoboy-delete/motoboy-delete.component';
import { MotoboyFrontComponent } from './components/motoboy/motoboy-front/motoboy-front.component';
import { MotoboyListComponent } from './components/motoboy/motoboy-list/motoboy-list.component';
import { MotoboyUpdateComponent } from './components/motoboy/motoboy-update/motoboy-update.component';
import { NavComponent } from './components/nav/nav.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: '', component: NavComponent, canActivate: [AuthGuard], children: 
    [
      {path: 'home', component: HomeComponent },
      

      {path: 'estabelecimentos',                  component: EstabelecimentoListComponent},
      {path: 'estabelecimentos/create',         component: EstabelecimentoCreateComponent},
      {path: 'estabelecimentos/update/:id',     component: EstabelecimentoUpdateComponent},
      {path: 'estabelecimentos/delete/:id',     component: EstabelecimentoDeleteComponent},


      {path: 'motoboy',                                   component: MotoboyListComponent},
       
      {path: 'motoboy/update/:id',                      component: MotoboyUpdateComponent},
      {path: 'motoboy/delete/:id',                      component: MotoboyDeleteComponent},
      {path: 'motoboy/front',                      component: MotoboyFrontComponent},

      {path: 'chamados',                                  component: ChamadoListComponent},
      {path: 'chamados/create',                         component: ChamadoCreateComponent},
      {path: 'chamados/update/:id',                     component: ChamadoUpdateComponent},
      {path: 'chamados/read/:id',                     component: ChamadoReadComponent},
    ],
  },
  {path: 'motoboy/create',                          component: MotoboyCreateComponent}, 
  {path: 'cadastro', component: CadastroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
