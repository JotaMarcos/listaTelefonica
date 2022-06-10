let pessoa1 = {
    nome: "Pedro",
    idade: 16
}

console.log(pessoa1)

// Factory function - Função fábrica
let criarPessoa = function (nome, idade) {
    return {
        nome: nome,
        idade: idade
    }
}

let maria = criarPessoa("Maria", 20)
console.log(maria)

// Constructor Function - Função construtora

let Pessoa = function(nome, idade){
    this.idade = idade
    this.nome = nome
}

let carlos = new Pessoa("Carlos", 25)
console.log(carlos)

//