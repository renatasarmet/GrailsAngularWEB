package br.ufscar.dc.dsw


import grails.rest.*
import grails.converters.*
import grails.plugin.springsecurity.annotation.Secured

@Secured(['ROLE_SITE', 'ROLE_ADMIN'])
class SiteVendaIngressoController extends RestfulController {
    static responseFormats = ['json', 'xml']
    SiteVendaIngressoController() {
        super(SiteVendaIngresso)
    }
}
