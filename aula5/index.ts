function pessoa(){
    return {nome:'adson' , idade:18}
}

type P = ReturnType<typeof pessoa>

interface teste{
    nome:P
}

class teste2 implements teste{
    nome={
        nome:'anne',
        idade:19
    }
}

console.log(new teste2().nome)