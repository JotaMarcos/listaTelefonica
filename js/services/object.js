let pessoa1 = {
    nome: "Pedro",
    idade: 16
}

console.log(pessoa1)

// Factory Function - Funções Fábricas
let criarPessoa = function (nome, idade) {
    return {
        nome: nome,
        idade: idade
    }
}

let maria = criarPessoa("Maria", 20)
console.log(maria)