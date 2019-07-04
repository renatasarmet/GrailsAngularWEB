import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { SiteVendaIngresso } from '../../models/site';

@Component({
  selector: 'app-site-detalhes',
  templateUrl: './site-detalhes.component.html',
  styleUrls: ['./site-detalhes.component.css']
})
export class SiteDetalhesComponent implements OnInit {
  site: SiteVendaIngresso = {id: '', url: '', nome: '', telefone: ''};
  isLoadingResults = true;

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.getData(this.route.snapshot.params['id'])
  }

  async getData(id) {
    this.site = await this.api.getSiteVendaIngresso(id).toPromise();
    this.isLoadingResults = false;
    console.debug('No issues, I will wait until promise is resolved...');
  }

  deleteSiteVendaIngresso(id) {
    this.isLoadingResults = true;
    this.api.deleteSiteVendaIngresso(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/sites']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

}
