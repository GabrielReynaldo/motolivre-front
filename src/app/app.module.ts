import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Para trabalhar com formulários no Angular 12
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Para realizar requisições HTTP
import { HttpClientModule } from '@angular/common/http';

// Imports para componentes do Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

//componentes de projeto
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { EstabelecimentoListComponent } from './components/estabelecimento/estabelecimento-list/estabelecimento-list.component';
import { LoginComponent } from './components/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { AuthInterceptorProvider } from './interceptors/auth.interceptor';
import { EstabelecimentoCreateComponent } from './components/estabelecimento/estabelecimento-create/estabelecimento-create.component';
import { NgxMaskModule } from 'ngx-mask';
import { EstabelecimentoUpdateComponent } from './components/estabelecimento/estabelecimento-update/estabelecimento-update.component';
import { EstabelecimentoDeleteComponent } from './components/estabelecimento/estabelecimento-delete/estabelecimento-delete.component';
import { MotoboyCreateComponent } from './components/motoboy/motoboy-create/motoboy-create.component';
import { MotoboyListComponent } from './components/motoboy/motoboy-list/motoboy-list.component';
import { MotoboyDeleteComponent } from './components/motoboy/motoboy-delete/motoboy-delete.component';
import { MotoboyUpdateComponent } from './components/motoboy/motoboy-update/motoboy-update.component';
import { ChamadoListComponent } from './components/chamado/chamado-list/chamado-list.component';
import { ChamadoCreateComponent } from './components/chamado/chamado-create/chamado-create.component';


@NgModule({ 
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    HeaderComponent,
    EstabelecimentoListComponent,
    LoginComponent, 
    EstabelecimentoCreateComponent, 
    EstabelecimentoUpdateComponent, 
    EstabelecimentoDeleteComponent,
    MotoboyCreateComponent,
    MotoboyListComponent,
    MotoboyDeleteComponent,
    MotoboyUpdateComponent,
    ChamadoListComponent,
    ChamadoCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    // Forms
    FormsModule,
    ReactiveFormsModule,
    // Requisições http
    HttpClientModule,
    // Angular Material
    MatFormFieldModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatTableModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    ToastrModule.forRoot({
      timeOut:4000,
      closeButton:true,
      progressBar:true
    }),
    NgxMaskModule.forRoot()
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
