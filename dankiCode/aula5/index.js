"use strict";
function pessoa() {
    return { nome: 'adson', idade: 18, altura: 1.70 };
}
class teste2 {
    constructor() {
        this.nome = {
            nome: 'anne',
            idade: 19,
            altura: 1.70
        };
    }
}
console.log(new teste2().nome);
