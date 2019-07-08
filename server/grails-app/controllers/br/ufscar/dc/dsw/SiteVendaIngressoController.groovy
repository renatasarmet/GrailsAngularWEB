package br.ufscar.dc.dsw


import grails.rest.*
import grails.converters.*
import br.ufscar.dc.dsw.UserRole
import grails.plugin.springsecurity.annotation.Secured


class SiteVendaIngressoController extends RestfulController {
    static responseFormats = ['json', 'xml']
    SiteVendaIngressoController() {
        super(SiteVendaIngresso)
    }

    @Secured(['permitAll()'])
    @Override
    def index(Integer max) {
        super.index(max)
    }

    @Secured(['permitAll()'])
    @Override
    def show() {
        super.show()
    }

    @Secured(['ROLE_ADMIN'])
    @Override
    def save() {
        super.save()
    }

    @Secured(['ROLE_ADMIN'])
    @Override
    def update() {
        super.update()
    }

    @Secured(['ROLE_ADMIN'])
    @Override
    def delete() {
        super.delete()
    }
}
