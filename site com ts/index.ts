// DOM

const btn_addAll = document.querySelector('#btn_addAll')
const btn_removerAll = document.querySelector('#btn_removerAll')
const btn_infoAll = document.querySelector('#btn_infoAll') as HTMLAnchorElement
const section_form = document.querySelector('#section_form') as HTMLAnchorElement;
const inome = document.querySelector('#inome') as HTMLSelectElement
const icpf = document.querySelector('#icpf') as HTMLSelectElement
const iidade = document.querySelector('#iidade') as HTMLSelectElement

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

btn_addAll?.addEventListener('click' , (btn)=>{
    section_form.style.display= 'flex'
})

btn_infoAll?.addEventListener('click' , ()=>{
    class Pessoa {
        @checknome()
        nome
        cpf
        idade
        // sexo
        // profissão
        // salario
        // telefone
        // email
        // moradia
        // id
        constructor(nome:string,cpf:stringOrNumber,idade:stringOrNumber,){
            this.nome = nome
            this.cpf = cpf
            this.idade = idade
        }
    }
   
   console.log(new Pessoa(inome.value,icpf.value,iidade.value))
})



