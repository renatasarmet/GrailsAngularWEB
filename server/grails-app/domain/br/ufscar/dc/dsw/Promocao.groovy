package br.ufscar.dc.dsw


import grails.rest.*

@Resource(uri='/promocao',readOnly = false, formats = ['json', 'xml'])
class Promocao {

	SiteVendaIngresso site_venda_ingresso
	Teatro teatro
	String nome
	float preco
	String data_sessao
	String horario_sessao

}
