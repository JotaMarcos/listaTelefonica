// Criar serviço com Construction function - Função construtora(Service)
angular.module("listaTelefonica").service("operadorasAPI", function($http, config){
    this.getOperadoras = function() {
        return  $http.get(config.baseUrl + "/operadoras")
    }
})