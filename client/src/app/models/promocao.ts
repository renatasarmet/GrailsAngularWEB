import { Teatro } from './teatro';
import { SiteVendaIngresso } from './site';

export class Promocao {
    id: string;
    nome: string;
    preco: number;
    site: SiteVendaIngresso;
    teatro: Teatro;
    data: string;
    horario: string;
}