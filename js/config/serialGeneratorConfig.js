// Criar configuração do provider
angular.module("listaTelefonica").config(function (serialGeneratorProvider) {
    serialGeneratorProvider.setLength(5)
})