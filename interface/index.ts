interface Ivaga{
    nome:string,
    idade:number,
    altura:number,
    aprovado?:boolean
};

const pessoa:Ivaga={
    nome:'adson',
    idade:18,
    altura:1.70,
    aprovado:true
}

console.log(pessoa.nome)