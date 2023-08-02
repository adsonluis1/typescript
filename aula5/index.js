function pessoa() {
    return { nome: 'adson', idade: 18 };
}
var teste2 = /** @class */ (function () {
    function teste2() {
        this.nome = {
            nome: 'anne',
            idade: 19
        };
    }
    return teste2;
}());
console.log(new teste2().nome);
