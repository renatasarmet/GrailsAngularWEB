package server
import br.ufscar.dc.dsw.Teatro
import br.ufscar.dc.dsw.SiteVendaIngresso

class BootStrap {

    def init = { servletContext ->

        Teatro t = new Teatro(cnpj: '123', nome: 'Teatro bom', cidade: 'Maceio')
        t.save()

        SiteVendaIngresso s = new SiteVendaIngresso(url: 'www.site.com', nome: 'Site bom', telefone: '99998888')
        s.save()
        
    }
    def destroy = {
    }
}
