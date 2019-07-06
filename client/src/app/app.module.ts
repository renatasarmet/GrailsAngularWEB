import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { MatSelectModule } from '@angular/material/select';

import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule } from "@angular/material";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeatrosComponent } from './components/teatros/teatros.component';
import { TeatroCadastroComponent } from './components/teatro-cadastro/teatro-cadastro.component';
import { TeatroDetalhesComponent } from './components/teatro-detalhes/teatro-detalhes.component';
import { TeatroEdicaoComponent } from './components/teatro-edicao/teatro-edicao.component';
import { SitesComponent } from './components/sites/sites.component';
import { SiteCadastroComponent } from './components/site-cadastro/site-cadastro.component';
import { SiteDetalhesComponent } from './components/site-detalhes/site-detalhes.component';
import { SiteEdicaoComponent } from './components/site-edicao/site-edicao.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PromocaoComponent } from './components/promocao/promocao.component';
import { PromocaoCadastroComponent } from './components/promocao-cadastro/promocao-cadastro.component';
import { PromocaoDetalhesComponent } from './components/promocao-detalhes/promocao-detalhes.component';
import { PromocaoEdicaoComponent } from './components/promocao-edicao/promocao-edicao.component';
import { AlertComponent } from './components/alert/alert.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TeatrosComponent,
    TeatroCadastroComponent,
    TeatroDetalhesComponent,
    TeatroEdicaoComponent,
    SitesComponent,
    SiteCadastroComponent,
    SiteDetalhesComponent,
    SiteEdicaoComponent,
    PromocaoComponent,
    PromocaoCadastroComponent,
    PromocaoDetalhesComponent,
    PromocaoEdicaoComponent,
    AlertComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: function tokenGetter() {
          return localStorage.getItem('access_token');
        },
        whitelistedDomains: ['localhost:8080'],
        blacklistedRoutes: ['http://localhost:8080/GrailsAngularWEBRS/api/login',
          'http://localhost:8080/GrailsAngularWEBRS/oauth/access_token']
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
