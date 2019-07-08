import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { SiteVendaIngresso } from '../../models/site';
import { JWTService } from '../../services/jwt.service';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent implements OnInit {
  displayedColumns: string[] = ['email','url', 'nome', 'telefone']
  sites: SiteVendaIngresso[]
  isLoadingResults = true;
  role: String = null;

  constructor(private api: ApiService, private jwtService: JWTService) { }

  ngOnInit() {
    this.getData();
    this.role = this.jwtService.getRole();
  }

  async getData() {
    this.sites = await this.api.getSiteVendaIngressos().toPromise();
    this.isLoadingResults = false;
    console.debug('No issues, I will wait until promise is resolved...');
  }

}
