package br.ufscar.dc.dsw


import grails.rest.*

@Resource(uri='/promocoes', readOnly = false, formats = ['json', 'xml'])
class Promocao {
    String nome
    float preco
    SiteVendaIngresso site
    Teatro teatro 
    String data
    String horario
}