// Cria um serviço com o Factory function - Função Fábrica
angular.module("listaTelefonica").factory("contatosAPI", function ($http, config) {
    let _getContatos = function () {
        return $http.get(config.baseUrl + "/contatos")
    }

    let _saveContato = function (contato) {
        return $http.post(config.baseUrl + "/contatos", contato)
    }

    return {
        getContatos: _getContatos,
        saveContato: _saveContato
    }
})







