package br.ufscar.dc.dsw


import grails.rest.*

@Resource(uri='/sites', readOnly = false, formats = ['json', 'xml'])
class SiteVendaIngresso {
    String url;
    String nome;
    String telefone;
}