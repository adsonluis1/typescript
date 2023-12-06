interface pessoa {
    nome:string,
    idade:number,
    trabalha:boolean
}

const pessoas:Array<pessoa>=[
    
    {
        nome:'adson',
        idade:18,
        trabalha:true
    },
    {
        nome:'patricia',
        idade:45,
        trabalha:true
    },
    {
        nome:'jose',
        idade:17,
        trabalha:false
    }

]

pessoas.map((evt)=>{
    if(evt.idade >= 18){
        let frase = `maiores de idade: ${evt.nome}`
        // transformando em JDSON
        let fraseJDSON = JSON.stringify(frase)
        console.log(fraseJDSON)
        frase = JSON.parse(fraseJDSON)
        console.log(frase)
    }else if(evt.idade < 18){
        let frase = `menores de idade: ${evt.nome}`
        // transformando em JDSON
        let fraseJDSON = JSON.stringify(frase) 
        console.log(fraseJDSON)
        // trasnformando em obj
        frase = JSON.parse(fraseJDSON)
        console.log(frase)
    }
})

