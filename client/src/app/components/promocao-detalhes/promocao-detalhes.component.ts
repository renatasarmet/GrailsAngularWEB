import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { SiteVendaIngresso } from '../../models/site';
import { Teatro } from '../../models/teatro';
import { Promocao } from '../../models/promocao';
import { JWTService } from 'src/app/services/jwt.service';

@Component({
  selector: 'app-promocao-detalhes',  
  templateUrl: './promocao-detalhes.component.html',
  styleUrls: ['./promocao-detalhes.component.css']
})
export class PromocaoDetalhesComponent implements OnInit {

  promocao: Promocao = { id: '', nome: '', preco: null, site: new SiteVendaIngresso(), teatro: new Teatro(), data: '', horario: '' };
  isLoadingResults = true;
  role: String = null;

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router, private jwtService: JWTService) { }

  async getData(id) {
    this.promocao = await this.api.getPromocao(id).toPromise();
    this.isLoadingResults = false;
    console.debug('No issues, I will wait until promise is resolved..');
  }
  ngOnInit() {
    this.getData(this.route.snapshot.params['id']);
    this.role = this.jwtService.getRole();
  }
  deletePromocao(id) {
    this.isLoadingResults = true;
    this.api.deletePromocao(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/promocoes']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

}
