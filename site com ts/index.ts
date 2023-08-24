// DOM

const btn_addAll = document.querySelector('#btn_addAll')
const btn_removerAll = document.querySelector('#btn_removerAll')
const btn_infoAll = document.querySelector('#btn_infoAll') as HTMLAnchorElement
const section_form = document.querySelector('#section_form') as HTMLAnchorElement;
const inome = document.querySelector('#inome') as HTMLSelectElement
const icpf = document.querySelector('#icpf') as HTMLSelectElement
const iidade = document.querySelector('#iidade') as HTMLSelectElement
const isalario = document.querySelector('#isalario') as HTMLSelectElement
// types

type stringOrNumber = string | number

// decorator

function checknome(){
    return function(target:object,propertyKey:string){
        let valor:string

        const getter = function(){
            return valor
        }

        const setter = function(newvalor:string){
            if(newvalor.length >= 14 && newvalor.length <=99){
                valor = newvalor
            }else{
                console.log('nome invalido')
            }
        }

        Object.defineProperty(target,propertyKey,{
            set:setter,
            get:getter
        })
    }
}

function checkcpf_BDD(){
    return function(target:object, propertyKey:string){
        let valor:string

        const getter = function (){
            return valor
        }

        const setter = function (newvalor:string){
            if(bancoDeDados.includes(icpf.value) === false){
                valor = newvalor
                bancoDeDados.push(newvalor)
            }else{
                console.log('nao pode')
                console.log(newvalor)
            }
        }
        
        Object.defineProperty(target,propertyKey,{
            set:setter,
            get:getter
        })
    }
}

// interface
interface Iobjpessoa{
    nome:string
    cpf:string
    idade:string
    salario:string 
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
btn_addAll?.addEventListener('click' , (btn)=>{
    section_form.style.display= 'flex'
})

btn_infoAll?.addEventListener('click' , ()=>{ 

    console.log(bancoDeDados)

        class Pessoa {
            // @checknome()
            nome
            @checkcpf_BDD()
            cpf
            idade
            // sexo
            // profissão
            salario
            // telefone
            // email
            // moradia
            // id
            constructor(objpessoa:Iobjpessoa){
                this.nome = objpessoa.nome
                this.cpf = objpessoa.cpf
                this.idade = objpessoa.idade
                this.salario= objpessoa.salario
            }

            show():void{
                console.log(`nome= ${this.nome}`)
                console.log(`cpf= ${this.cpf}`)
                console.log(`idade= ${this.idade}`)
                console.log(ShowFolhaSalarial(this))
            }

    }
   
    new Pessoa({nome:inome.value, idade:iidade.value , cpf:icpf.value,salario:isalario.value}).show()

    
})

const bancoDeDados:string[]=[]
let folhaSalarial:number= 0

function ShowFolhaSalarial(obj:Iobjpessoa):number{
    folhaSalarial+= Number(obj.salario)
    return folhaSalarial
}

