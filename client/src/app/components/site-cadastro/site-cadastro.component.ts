import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-site-cadastro',
  templateUrl: './site-cadastro.component.html',
  styleUrls: ['./site-cadastro.component.css']
})
export class SiteCadastroComponent implements OnInit {
  siteForm: FormGroup;
  isLoadingResults = false;
  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.siteForm = this.formBuilder.group({
      id: [null, Validators.required],
      url: [null, Validators.required],
      nome: [null, Validators.required],
      telefone: [null, Validators.required],
    });
  }

  onFormSubmit(form: NgForm) {
    this.isLoadingResults = true;
    this.api.addSiteVendaIngresso(form)
      .subscribe(res => {
        let id = res['id'];
        this.isLoadingResults = false;
        this.router.navigate(['/site-detalhes', id]);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}
