interface Pessoa{
    nome:string
    idade?:number
    altura?:number
};

// o ? no altura e idade serve para dizer que ele nn é necessário 

function hehe(par:Pessoa){
    console.log(par.nome,par.idade,par.altura)
};

hehe({nome:'adson', idade:18 , altura:1.70})

function hehe2(par?:string){
    console.log(par)
}

hehe2('anne')