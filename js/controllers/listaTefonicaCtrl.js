// Localiza um módulo
angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, contatosAPI, operadorasAPI, serialGenerator) {
    $scope.app = "Lista Telefônica" 
    $scope.contatos = [];
    $scope.operadoras = [];

    let carregarContatos = function () {
        contatosAPI.getContatos().then(function (response) {
            $scope.contatos = response.data;
        }).catch(response => $scope.message = "Aconteceu um problema: " + response.data);
    };
    
    let carregarOperadoras = function () {
       operadorasAPI.getOperadoras().then(function (response) {
            $scope.operadoras = response.data;
        }).catch(response => $scope.message = "Aconteceu um problema: " + response.data);
    };

    $scope.adicionarContato = function (contato) {
        contato.serial = serialGenerator.generate();
       contato.data = new Date();
       /* se não passar o parâmetro contato dentro de saveContato o mesmo irá
          adiconar o contato em branco no formulário.  
       */
       contatosAPI.saveContato(contato).then(function () {
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