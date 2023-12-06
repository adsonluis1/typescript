const promeca = new Promise((aceitar, rejeitar)=>{
    const poder = false

    if(poder){
        aceitar('vc tem poderes')
    }else{
        rejeitar('vc não tem poderes')
    }
})

promeca.then((retorno)=>{
    setTimeout(()=>{
         console.log(retorno)
    },4000)
}).catch((retorno)=>{
    setTimeout(()=>{
        console.log(retorno)
   },4000)
})

console.log(1)
setTimeout(()=>{
    console.log(2)
},1000)
setTimeout(()=>{
    console.log(3)
},2000)
setTimeout(()=>{
    console.log('...')
},3000)
