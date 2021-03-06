package br.ufscar.dc.dsw


import grails.rest.*
import grails.converters.*
import grails.plugin.springsecurity.annotation.Secured


class PromocaoController extends RestfulController {
    static responseFormats = ['json', 'xml']
    PromocaoController() {
        super(Promocao)
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

    @Secured(['ROLE_TEATRO'])
    @Override
    def save() {
        super.save()
    }

    @Secured(['ROLE_TEATRO'])
    @Override
    def update() {
        super.update()
    }

    @Secured(['ROLE_TEATRO'])
    @Override
    def delete() {
        super.delete()
    }
}
