import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Promocao } from '../../models/promocao'
import { JWTService } from 'src/app/services/jwt.service';
@Component({
  selector: 'app-promocoes',
  templateUrl: './promocoes.component.html',
  styleUrls: ['./promocoes.component.css']
})
export class PromocoesComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'preco', 'site', 'teatro', 'data', 'horario'];
  promocoes: Promocao[] = [];
  isLoadingResults = true;
  role: String = null;

  constructor(private api: ApiService, private jwtService: JWTService) { }

  ngOnInit() {
    this.getData();
    this.role = this.jwtService.getRole();
  }

  async getData() {
    this.promocoes = await this.api.getPromocoes().toPromise();
    this.isLoadingResults = false;
    
    if (this.role == 'ROLE_SITE'){
      this.promocoes = this.promocoes.filter(p => {
        return (p.site.username == this.jwtService.getUsername());
      });    
    } else if (this.role == 'ROLE_TEATRO') {
      this.promocoes = this.promocoes.filter(p => {
        return (p.teatro.username == this.jwtService.getUsername());
      });
    }
    console.debug('No issues, I will wait until promise is resolved..');
  }

}
