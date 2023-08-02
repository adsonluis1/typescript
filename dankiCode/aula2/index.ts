interface Pessoa{
    nome:string,
    idade:number,
    altura:number
}

const pessoa: Pessoa = {
    nome:'adson',
    altura:1.70,
    idade:18
}

console.log(`nome: ${pessoa.nome}`);
console.log(`idade: ${pessoa.idade} `);
console.log(`altura: ${pessoa.altura}`);