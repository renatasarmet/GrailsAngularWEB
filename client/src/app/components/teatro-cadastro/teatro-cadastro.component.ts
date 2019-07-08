import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Role } from 'src/app/models/role';
import { UserRole } from 'src/app/models/userRole';
import { Usuario } from 'src/app/models/usuario';


@Component({
  selector: 'app-teatro-cadastro',
  templateUrl: './teatro-cadastro.component.html',
  styleUrls: ['./teatro-cadastro.component.css']
})
export class TeatroCadastroComponent implements OnInit {

  teatroForm: FormGroup;
  isLoadingResults = false;
  role: Role;
  usuario: Usuario;
  userRole: UserRole;

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.teatroForm = this.formBuilder.group({

      username: [null, Validators.required],
      password: [null, Validators.required],
      cnpj: [null, Validators.required],
      nome: [null, Validators.required],
      cidade: [null, Validators.required]
    });
    this.getData();
  }

  async getData() {
    this.isLoadingResults = false;
    this.role = new Role();
    this.role = await this.api.getRoleTeatro().toPromise();
    console.debug('No issues, I will wait until promise is resolved..');
  }

  onFormSubmit(form: NgForm) {
    this.isLoadingResults = true;
    this.usuario = new Usuario();
    this.userRole = new UserRole();
    this.usuario.username = form['username'];
    this.usuario.password = form['password'];
    this.userRole.role = this.role;
    this.userRole.user = this.usuario;
    this.api.addTeatro(form)
      .subscribe(res => {
        let id = res['id'];
        this.isLoadingResults = false;
        this.userRole.user.id = id;
        this.api.addUserRole(this.userRole)
          .subscribe(ress => {
            let id = ress['id'];
            console.log("Cadastro role feito")
          }, (err) => {
            console.log(err);
            this.isLoadingResults = false;
          });
        this.router.navigate(['/teatro-detalhes', id]);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}
