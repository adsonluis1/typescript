interface Pessoa{
    nome:string,
    idade:number
};

const pessoa: Pessoa = {
    nome:'adson',
    idade:18
};

console.log(pessoa.nome);

const nome:string= 'adson';
console.log(nome);
const nomes:string[]=['adson' , 'luis' , 'anne' , 'rafaelle'];
console.log(nomes);

class Carro{
    nome:string;
    marca:string;
    motor:string;
    velMax:number;
    constructor(nome:string,marca:string,motor:string,velMax:number){
        this.nome = nome;
        this.marca=marca;
        this.motor=motor;
        this.velMax= velMax;
    }
     mostrar=()=>{
        console.log(`nome=${this.nome}`)
        console.log(`marca=${this.marca}`)
        console.log(`motor=${this.motor}`)
        console.log(`velMax=${this.velMax}`)
    }
};

new Carro('aventador' , 'lamborghini' , 'v12' , 350);