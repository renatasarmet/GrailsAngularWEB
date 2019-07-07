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
  constructor(private api: ApiService, private jwtService: JWTService) { }

  ngOnInit() {
    this.getData();
  }

  async getData() {
    this.promocoes = await this.api.getPromocoes().toPromise();

    if (this.jwtService.getRole() == 'ROLE_SITE'){
      function filtraPorSite(element, index, array) {
        return (element.site.username == this.jwtService.getUsername());
      }

      this.promocoes = this.promocoes.filter(filtraPorSite);
      
    } else if (this.jwtService.getRole() == 'ROLE_TEATRO') {

      function filtraPorTeatro(element, index, array) {
        return (element.teatro.username == this.jwtService.getUsername());
      }

      this.promocoes = this.promocoes.filter(filtraPorTeatro);
    }
    this.isLoadingResults = false;
    console.debug('No issues, I will wait until promise is resolved..');
  }

}
