// Localiza um módulo
angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, $http) {
    $scope.app = "Lista Telefônica" 
    $scope.contatos = [];
    $scope.operadoras = [];

    var carregarContatos = function () {
        $http.get("http://localhost:3412/contatos").then(function (response) {
            $scope.contatos = response.data;
        }).catch(response => $scope.message = "Aconteceu um problema: " + response.data);
    };
    
    var carregarOperadoras = function () {
        $http.get("http://localhost:3412/operadoras").then(function (response) {
            $scope.operadoras = response.data;
        }).catch(response => $scope.message = "Aconteceu um problema: " + response.data);
    };

    $scope.adicionarContato = function (contato) {
       contato.data = new Date();
       $http.post("http://localhost:3412/contatos", contato).then(function (data) {
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            /* $scope.contatos.push(data); 
                Pode pegar data que voltou, pode ter aí a criação de uma
                chave primária ou série de coisas acontencendo no backend
            */
            carregarContatos();
        });
       /*$scope.contatos.push(angular.copy(contato));
       delete $scope.contato;
       $scope.contatoForm.$setPristine();*/
    };
    $scope.apagarContatos = function (contatos) {
        $scope.contatos = contatos.filter(function (contato) {
            if(!contato.selecionado) return contato;
        });
    };
    $scope.isContatoSelecionado = function (contatos) {
        return contatos.some(function (contato) {
            return contato.selecionado;
        });
    };
    $scope.ordenarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };

    carregarContatos();
    carregarOperadoras();
    
});