import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'
import { Teatro } from '../../models/teatro';
import { JWTService } from '../../services/jwt.service'


@Component({
  selector: 'app-teatros',
  templateUrl: './teatros.component.html',
  styleUrls: ['./teatros.component.css']
})
export class TeatrosComponent implements OnInit {

  displayedColumns: string[] = ['cnpj', 'nome', 'cidade'];
  teatros: Teatro[] = [];
  allTeatros: Teatro[] =[];
  isLoadingResults = true;
  role: String = null;

  constructor(private api: ApiService, private jwtService: JWTService) { }

  ngOnInit() {
    this.getData();
    this.role = this.jwtService.getRole();
  }

  listaPorCidade(cidade) {
    if (cidade != '') {
      this.teatros = this.allTeatros.filter(t => {
        return (t.cidade.toString().toUpperCase() == cidade);
      });
    } else {
      this.teatros = this.allTeatros;
    }
  }

  async getData() {
    this.teatros = await this.api.getTeatros().toPromise();
    this.isLoadingResults = false;
    this.allTeatros = this.teatros;
    console.debug('No issues, I will wait until promise is resolved..');
  }

}
