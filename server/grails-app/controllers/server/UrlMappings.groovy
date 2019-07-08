package server

class UrlMappings {

    static mappings = {
        // delete "/$controller/$id(.$format)?"(action:"delete")
        // get "/$controller(.$format)?"(action:"index")
        // get "/$controller/$id(.$format)?"(action:"show")
        // post "/$controller(.$format)?"(action:"save")
        // put "/$controller/$id(.$format)?"(action:"update")
        // patch "/$controller/$id(.$format)?"(action:"patch")
        "/sites"(resources: "siteVendaIngresso")
        "/teatros"(resources: "teatro")
        "/roles"(resources: "role")
        "/userRoles"(resources: "userRole")
        "/promocoes"(resources: "promocao")
        "/promocao-cadastro"(resources: "promocao", "teatro", "siteVendaIngresso")
        // "/"(controller: 'application', action:'index')
        "500"(view: '/error')
        "404"(view: '/notFound')
    }
}
