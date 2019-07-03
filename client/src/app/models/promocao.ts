import { SiteVendaIngresso } from './site';
import { Teatro } from './teatro';

export class Promocao {
	id: string;
	nome: string;
	preco: number;
	teatro: Teatro;
	site: SiteVendaIngresso;
	data_sessao: string;
	horario_sessao: string;
}
