import { Component, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { SiteVendaIngresso } from '../../models/site';
import { Teatro } from '../../models/teatro';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Promocao } from 'src/app/models/promocao';
import { AlertService} from '../../services/alert.service'
import { JWTService } from 'src/app/services/jwt.service';

@Component({
  selector: 'app-promocao-cadastro',
  templateUrl: './promocao-cadastro.component.html',
  styleUrls: ['./promocao-cadastro.component.css']
})
export class PromocaoCadastroComponent implements OnInit {

  promocaoForm: FormGroup;
  sites: SiteVendaIngresso[];
  teatros: Teatro[];
  promocoes: Promocao[];
  valido = true;
  isLoadingResults = false;

  constructor(private alertService: AlertService,private router: Router, private api: ApiService, private formBuilder: FormBuilder, private jwtService: JWTService) { }

  ngOnInit() {
    this.promocaoForm = this.formBuilder.group({
      nome: [null, Validators.required],
      preco: [0.01, Validators.required],
      site: [null, Validators.required],
      teatro: [null, Validators.required],
      data: [null, Validators.compose([Validators.required])],
      horario: [null, Validators.required]
    });
    this.getData();
  }

  async getData() {
    this.sites = await this.api.getSiteVendaIngressos().toPromise();
    this.teatros = await this.api.getTeatros().toPromise();
    this.teatros = this.teatros.filter(t => {
      var user = this.jwtService.getUsername()
      return (t.username == user);
    });
    this.promocoes = await this.api.getPromocoes().toPromise();
    this.isLoadingResults = false;
    console.debug('No issues, I will wait until promise is resolved..');
  }
  onFormSubmit(form: NgForm) {
    this.isLoadingResults = true;
    let valid = true;
    for (let i = 0; i < this.promocoes.length; i++) {
      if ((form['site'] == this.promocoes[i].site.id || form['teatro'] == this.promocoes[i].teatro.id) 
      && form['data'] == this.promocoes[i].data && form['horario'] == this.promocoes[i].horario){ 
        valid=false;
      }
    }
    if ( valid ) {
    this.api.addPromocao(form)
      .subscribe(res => {
        let id = res['id'];
        this.isLoadingResults = false;
        this.router.navigate(['/promocao-detalhes', id]);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      });
    }else{
      this.isLoadingResults = false;
      this.alertService.error("Horario conflitante.")
    }
  }
}
