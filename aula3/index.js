var Pessoa = /** @class */ (function () {
    function Pessoa() {
        this.nome = 'adson';
        this.idade = 18;
    }
    Pessoa.prototype.getNome = function () {
        console.log("nome = ".concat(this.nome));
    };
    Pessoa.prototype.getIdada = function () {
        console.log("idade = ".concat(this.idade));
    };
    Pessoa.prototype.getFull = function () {
        console.log("nome=".concat(this.nome, ", idade=").concat(this.idade));
    };
    Pessoa.prototype.setNome = function (nome) {
        this.nome = nome;
        console.log("nome alterado para ".concat(this.nome));
    };
    Pessoa.prototype.setIdade = function (idade) {
        this.idade = idade;
        console.log("idade alterada para ".concat(this.idade));
    };
    return Pessoa;
}());
new Pessoa().getNome();
new Pessoa().getIdada();
new Pessoa().getFull();
console.log('----------------');
new Pessoa().setNome('anne');
new Pessoa().setIdade(19);
