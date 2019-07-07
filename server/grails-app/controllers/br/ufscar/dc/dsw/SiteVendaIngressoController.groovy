package br.ufscar.dc.dsw


import grails.rest.*
import grails.converters.*
import grails.plugin.springsecurity.annotation.Secured

// @Secured(['ROLE_SITE', 'ROLE_ADMIN'])
class SiteVendaIngressoController extends RestfulController {
    static responseFormats = ['json', 'xml']
    SiteVendaIngressoController() {
        super(SiteVendaIngresso)
    }

    @Secured(['ROLE_ADMIN', 'ROLE_SITE', 'ROLE_TEATRO'])
    @Override
    def index(Integer max) {
        super.index(max)
    }

    @Secured(['ROLE_ADMIN'])
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
