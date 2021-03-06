import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Teatro } from '../../models/teatro';
import { JWTService } from 'src/app/services/jwt.service';

@Component({
  selector: 'app-teatro-detalhes',
  templateUrl: './teatro-detalhes.component.html',
  styleUrls: ['./teatro-detalhes.component.css']
})
export class TeatroDetalhesComponent implements OnInit {
  teatro: Teatro = { id: '',username:'', password:'', cnpj: '', nome: '', cidade: '' };
  isLoadingResults = true;
  role: String = null;

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router, private jwtService: JWTService) { }

  async getData(id) {
    this.teatro = await this.api.getTeatro(id).toPromise();
    this.isLoadingResults = false;
    console.debug('No issues, I will wait until promise is resolved..');
  }
  ngOnInit() {
    this.getData(this.route.snapshot.params['id']);
    this.role = this.jwtService.getRole();
  }

  deleteTeatro(id) {
    this.isLoadingResults = true;
    this.api.deleteTeatro(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/teatros']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }



}
