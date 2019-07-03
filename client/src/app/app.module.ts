import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
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
    SiteEdicaoComponent
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
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
