package server
import br.ufscar.dc.dsw.Teatro
import br.ufscar.dc.dsw.SiteVendaIngresso
import br.ufscar.dc.dsw.Promocao
import br.ufscar.dc.dsw.User
import br.ufscar.dc.dsw.Role
import br.ufscar.dc.dsw.UserRole

class BootStrap {

    def init = { servletContext ->

        Role roleAdmin = new Role(authority: 'ROLE_ADMIN').save()
        Role roleSite = new Role(authority: 'ROLE_SITE').save()
        Role roleTeatro = new Role(authority: 'ROLE_TEATRO').save()

        User admin = new User(username: "admin", password: "admin").save()
        UserRole.create(admin, roleAdmin, true)

        Teatro t = new Teatro(
            username: "teatro", password: "teatro",
            cnpj: '123', nome: 'Teatro bom', cidade: 'Maceio')
        t.save()
        UserRole.create(t, roleTeatro, true)

        SiteVendaIngresso s = new SiteVendaIngresso(
            username: "site", password: "site",
            url: 'www.site.com', nome: 'Site bom', telefone: '99998888'
            )

        s.save()
        UserRole.create(s, roleSite, true)
	
        Promocao p = new Promocao(nome: 'Promoca', preco:10.10, site:s, teatro:t, data:'12/02/2019', horario:'21:00')
        p.save()
        
    }
    def destroy = {
    }
}
