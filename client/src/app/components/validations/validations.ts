import { AbstractControl } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Promocao } from '../../models/promocao'

export class Validacoes {
    
    static validData(controle: AbstractControl) {
        var api : ApiService ;
        const data= controle.value;
        var promocoes = api.getPromocoes().toPromise();
        
        return null;  
    }
    
  }