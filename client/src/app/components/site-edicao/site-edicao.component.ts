import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { SiteVendaIngresso } from 'src/app/models/site';

@Component({
  selector: 'app-site-edicao',
  templateUrl: './site-edicao.component.html',
  styleUrls: ['./site-edicao.component.css']
})
export class SiteEdicaoComponent implements OnInit {
  
  siteForm: FormGroup;
  id: string = '';
  isLoadingResults = true;

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.isLoadingResults = true;
    this.siteForm = this.formBuilder.group({
      username:[null, Validators.required],
      password:[null, Validators.required],
      url: [null, Validators.required],
      nome: [null, Validators.required],
      telefone: [null, Validators.required],
    });
    this.getData(this.route.snapshot.params['id']);
  }

  async getData(id) {
    let site: SiteVendaIngresso = await this.api.getSiteVendaIngresso(id).toPromise();
    this.id = site.id;
    this.siteForm.setValue({
      username: site.username,
      password: '',
      url: site.url,
      nome: site.nome,
      telefone: site.telefone,
    });
    this.isLoadingResults = false;
    console.debug('No issues, I will wait until promise is resolved..');
  }

  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    this.api.updateSiteVendaIngresso(this.id, form)
      .subscribe(res => {
          let id = res['id'];
          this.isLoadingResults = false;
          this.router.navigate(['/site-detalhes', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

  siteVendaIngressoDetalhes() {
    this.router.navigate(['/site-detalhes', this.id]);
  }
}
