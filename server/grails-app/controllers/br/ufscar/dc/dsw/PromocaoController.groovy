package br.ufscar.dc.dsw


import grails.rest.*
import grails.converters.*
import grails.plugin.springsecurity.annotation.Secured

@Secured(['ROLE_TEATRO'])
class PromocaoController extends RestfulController {
    static responseFormats = ['json', 'xml']
    PromocaoController() {
        super(Promocao)
    }

    @Secured(['ROLE_TEATRO', 'ROLE_SITE'])
    @Override
    def index(Integer max) {
        super.index(max)
    }

    @Secured(['ROLE_TEATRO', 'ROLE_SITE'])
    @Override
    def show() {
        super.show()
    }

    @Secured(['ROLE_TEATRO', 'ROLE_SITE'])
    @Override
    def save() {
        super.save()
    }

    @Secured(['ROLE_TEATRO', 'ROLE_SITE'])
    @Override
    def update() {
        super.update()
    }

    @Secured(['ROLE_TEATRO', 'ROLE_SITE'])
    @Override
    def delete() {
        super.delete()
    }
}
