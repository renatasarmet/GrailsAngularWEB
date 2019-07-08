package br.ufscar.dc.dsw


import grails.rest.*

@Resource(uri='/teatros', readOnly = false, formats = ['json', 'xml'])
class Teatro extends User{
    String cnpj;
    String nome;
    String cidade;

    def beforeDelete() { 
        if(super.username != null)
		    UserRole.removeAllUser(super)
	}
}