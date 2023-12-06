"use strict";
;
const pessoa = {
    nome: 'adson',
    idade: 18
};
console.log(pessoa.nome);
const nome = 'adson';
console.log(nome);
const nomes = ['adson', 'luis', 'anne', 'rafaelle'];
console.log(nomes);
class Carro {
    constructor(nome, marca, motor, velMax) {
        this.mostrar = () => {
            console.log(`nome=${this.nome}`);
            console.log(`marca=${this.marca}`);
            console.log(`motor=${this.motor}`);
            console.log(`velMax=${this.velMax}`);
        };
        this.nome = nome;
        this.marca = marca;
        this.motor = motor;
        this.velMax = velMax;
    }
}
;
new Carro('aventador', 'lamborghini', 'v12', 350);
