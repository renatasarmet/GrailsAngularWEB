import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { SiteVendaIngresso } from '../../models/site';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent implements OnInit {
  displayedColumns: string[] = ['url', 'nome', 'telefone']
  sites: SiteVendaIngresso[]
  isLoadingResults = true;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getData();
  }

  async getData() {
    this.sites = await this.api.getSiteVendaIngressos().toPromise();
    this.isLoadingResults = false;
    console.debug('No issues, I will wait until promise is resolved...');
  }

}
