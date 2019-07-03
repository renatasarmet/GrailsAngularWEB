import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeatrosComponent } from './components/teatros/teatros.component';
import { TeatroDetalhesComponent } from './components/teatro-detalhes/teatro-detalhes.component';
import { TeatroCadastroComponent } from './components/teatro-cadastro/teatro-cadastro.component';
import { TeatroEdicaoComponent } from './components/teatro-edicao/teatro-edicao.component';
import { SitesComponent } from './components/sites/sites.component';
import { SiteDetalhesComponent } from './components/site-detalhes/site-detalhes.component';
import { SiteCadastroComponent } from './components/site-cadastro/site-cadastro.component';
import { SiteEdicaoComponent } from './components/site-edicao/site-edicao.component';
import { PromocaoComponent } from './components/promocao/promocao.component';
import { PromocaoDetalhesComponent } from './components/promocao-detalhes/promocao-detalhes.component';
import { PromocaoCadastroComponent } from './components/promocao-cadastro/promocao-cadastro.component';
import { PromocaoEdicaoComponent } from './components/promocao-edicao/promocao-edicao.component';

const routes: Routes = [
  {
    path:'teatros', component: TeatrosComponent, data:{title:'Lista de Teatros'}
  },
  {
    path:'teatro-detalhes/:id', component: TeatroDetalhesComponent, data:{title:'Detalhes do Teatro'}
  },
  {
    path:'teatro-cadastro', component: TeatroCadastroComponent, data:{title:'Cadastro de Teatro'}
  },
  {
    path:'teatro-edicao/:id', component: TeatroEdicaoComponent, data:{title:'Edicao do Teatro'}
  },

  {
    path:'sites', component: SitesComponent, data:{title:'Lista de Sites de Venda de Ingresso'}
  },
  {
    path:'site-detalhes/:id', component: SiteDetalhesComponent, data:{title:'Detalhes do Site'}
  },
  {
    path:'site-cadastro', component: SiteCadastroComponent, data:{title:'Cadastro de Site'}
  },
  {
    path:'site-edicao/:id', component: SiteEdicaoComponent, data:{title:'Edicao do Site'}
  },
  {
    path:'promocao', component: PromocaoComponent, data:{title:'Lista de promocoes'}
  },
  {
    path:'promocao-detalhes/:id', component: PromocaoDetalhesComponent, data:{title:'Detalhes da Promocao'}
  },
  {
    path:'promocao-cadastro', component: PromocaoCadastroComponent, data:{title:'Cadastro de Promocao'}
  },
  {
    path:'promocao-edicao/:id', component: PromocaoEdicaoComponent, data:{title:'Edicao de Promocao'}
  },
  {
    path:'', redirectTo:'/teatros', pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
