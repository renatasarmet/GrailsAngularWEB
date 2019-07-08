import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { SiteVendaIngresso } from '../../models/site';
import { JWTService } from 'src/app/services/jwt.service';

@Component({
  selector: 'app-site-detalhes',
  templateUrl: './site-detalhes.component.html',
  styleUrls: ['./site-detalhes.component.css']
})
export class SiteDetalhesComponent implements OnInit {
  site: SiteVendaIngresso = {id: '',username:'', password:'', url: '', nome: '', telefone: ''};
  isLoadingResults = true;
  role: String = null;

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router, private jwtService: JWTService) { }

  ngOnInit() {
    this.getData(this.route.snapshot.params['id'])
    this.role = this.jwtService.getRole();
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
