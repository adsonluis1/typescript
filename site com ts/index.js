// header

const btn_header_add = document.querySelector('#btn_addAll')
const btn_header_remove = document.querySelector('#btn_removerAll')
const btn_header_save = document.querySelector('#btn_infoAll')

//main

const section_form= document.querySelector('#section_form')
const inome = document.querySelector('#inome')
const icpf = document.querySelector('#icpf')
const iidade = document.querySelector('#iidade')

// const inome = document.querySelector('#inome')
// const inome = document.querySelector('#inome')
// const inome = document.querySelector('#inome')
// const inome = document.querySelector('#inome')
// const inome = document.querySelector('#inome')
// const inome = document.querySelector('#inome')

// funcões header

class pessoa{
    constructor(nome,cpf,idade){
        this.nome = nome
        this.cpf = cpf
        this.idade = idade
    }
    criar=()=>[
        
    ]
}

btn_header_add.addEventListener('click',()=>{
    section_form.style.display= 'none'
})

btn_header_save.addEventListener('click' , ()=>{
     
})

