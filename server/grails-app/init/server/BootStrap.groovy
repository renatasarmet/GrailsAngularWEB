package server
import br.ufscar.dc.dsw.Teatro
import br.ufscar.dc.dsw.SiteVendaIngresso
import br.ufscar.dc.dsw.Promocao

class BootStrap {

    def init = { servletContext ->

        Teatro t = new Teatro(cnpj: '123', nome: 'Teatro bom', cidade: 'Maceio')
        t.save()

        SiteVendaIngresso s = new SiteVendaIngresso(url: 'www.site.com', nome: 'Site bom', telefone: '99998888')
        s.save()
	
	Promocao p = new Promocao(site_venda_ingresso:s, teatro: t, nome:'Promoca', preco:10.0, data_sessao:'12/12/2018', horario_sessao:'12:12')
	p.save()
        
    }
    def destroy = {
    }
}
