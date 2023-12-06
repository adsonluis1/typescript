"use strict";
class Pessoa {
    constructor() {
        this.nome = 'adson';
        this.idade = 18;
    }
    getNome() {
        console.log(`nome = ${this.nome}`);
    }
    getIdada() {
        console.log(`idade = ${this.idade}`);
    }
    getFull() {
        console.log(`nome=${this.nome}, idade=${this.idade}`);
    }
    setNome(nome) {
        this.nome = nome;
        console.log(`nome alterado para ${this.nome}`);
    }
    setIdade(idade) {
        this.idade = idade;
        console.log(`idade alterada para ${this.idade}`);
    }
}
new Pessoa().getNome();
new Pessoa().getIdada();
new Pessoa().getFull();
console.log('----------------');
new Pessoa().setNome('anne');
new Pessoa().setIdade(19);
