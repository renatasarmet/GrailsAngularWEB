package br.ufscar.dc.dsw


import grails.rest.*

@Resource(uri='/teatros', readOnly = false, formats = ['json', 'xml'])
class Teatro {
    String cnpj;
    String nome;
    String cidade;
}