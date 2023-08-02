;
var pessoa = {
    nome: 'adson',
    idade: 18
};
console.log(pessoa.nome);
var nome = 'adson';
console.log(nome);
var nomes = ['adson', 'luis', 'anne', 'rafaelle'];
console.log(nomes);
var Carro = /** @class */ (function () {
    function Carro(nome, marca, motor, velMax) {
        var _this = this;
        this.mostrar = function () {
            console.log("nome=".concat(_this.nome));
            console.log("marca=".concat(_this.marca));
            console.log("motor=".concat(_this.motor));
            console.log("velMax=".concat(_this.velMax));
        };
        this.nome = nome;
        this.marca = marca;
        this.motor = motor;
        this.velMax = velMax;
    }
    return Carro;
}());
;
new Carro('aventador', 'lamborghini', 'v12', 350).mostrar();
