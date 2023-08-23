// header

const btn_header_add = document.querySelector('#btn_addAll')
const btn_header_remove = document.querySelector('#btn_removerAll')
const btn_header_save = document.querySelector('#btn_infoAll')

//main
const main = document.querySelector('main')
const section_form= document.querySelector('#section_form')
const inome = document.querySelector('#inome')
const icpf = document.querySelector('#icpf')
const iidade = document.querySelector('#iidade')
const ihomem = document.querySelector('#M')
const imulher = document.querySelector('#f')
const iprof = document.querySelector('#iprof')
const isalario = document.querySelector('#isalario')
const itell = document.querySelector('#itell')
const iemail = document.querySelector('#iemail')
const imoradia = document.querySelector('#imora')
const section_tela = document.querySelector('#section_tela') 
const section_alert = document.querySelector('#section_alert')
let quantidade_pessoas = 0

// funcões header
let img = null

class pessoa{
    constructor(nome,cpf,idade,sexo,prof,salario,tel,email,mora){
        this.nome = nome
        this.cpf = cpf
        this.idade = idade
        this.sexo = sexo
        this.prof = prof
        this.salario = salario
        this.tel = tel
        this.email = email
        this.mora =mora
        this.id = cpf + Math.floor(Math.random()*10)
    }

    teste=()=>{
        if(ihomem.checked){
        console.log(this.nome)
        console.log(this.cpf)
        console.log(this.idade)
        console.log(this.sexo)
        console.log(this.prof)
        console.log(this.salario)
        console.log(this.tel)
        console.log(this.email)
        console.log(this.mora)
        console.log(this.id)
        }
        if(imulher.checked){
            console.log(this.nome)
        console.log(this.cpf)
        console.log(this.idade)
        console.log(this.sexo)
        console.log(this.prof)
        console.log(this.salario)
        console.log(this.tel)
        console.log(this.email)
        console.log(this.mora)
        console.log(this.id)
        }
    }

    criar=()=>{
        // const section = document.createElement('section')
        // section.setAttribute('class' , 'section_tela')
        // section_tela.appendChild(section)
        const div = document.createElement('div')
        div.setAttribute('class' , 'info_pessoais')
        section_tela.appendChild(div)
        const divFilho= document.createElement('div')
        divFilho.setAttribute('class' , 'filho_info_pessoais')
        div.prepend(divFilho)
        const aside = document.createElement('aside')
        aside.setAttribute('class' , 'aside_nome')
        divFilho.prepend(aside)
        const h1 = document.createElement('h1')
        h1.innerText= 'Informações Pessoais'
        aside.prepend(h1)
        const p_nome = document.createElement('p')
        p_nome.setAttribute('class' , 'tela')
        p_nome.setAttribute('class' , 'tela')
        p_nome.innerText='Nome: '
        aside.appendChild(p_nome)
        const span_nome = document.createElement('span')
        span_nome.innerText= inome.value
        p_nome.appendChild(span_nome)

        const p_cpf = document.createElement('p')
        p_cpf.setAttribute('class' , 'tela')
        p_cpf.setAttribute('class' , 'tela')
        p_cpf.innerText='CPF: '
        aside.appendChild(p_cpf)
        const span_cpf = document.createElement('span')
        span_cpf.innerText= icpf.value
        p_cpf.appendChild(span_cpf)

        const p_idade = document.createElement('p')
        p_idade.setAttribute('class' , 'tela')
        p_idade.setAttribute('class' , 'tela')
        p_idade.innerText='Idade: '
        aside.appendChild(p_idade)
        const span_idade = document.createElement('span')
        span_idade.innerText= iidade.value
        p_idade.appendChild(span_idade)

        const p_sexo = document.createElement('p')
        p_sexo.setAttribute('class' , 'tela')
        p_sexo.setAttribute('class' , 'tela')
        p_sexo.innerText='Sexo: '
        aside.appendChild(p_sexo)
        const span_sexo = document.createElement('span')
        span_sexo.innerText= this.sexo
        p_sexo.appendChild(span_sexo)

        const p_prof = document.createElement('p')
        p_prof.setAttribute('class' , 'tela')
        p_prof.setAttribute('class' , 'tela')
        p_prof.innerText='Profissão: '
        aside.appendChild(p_prof)
        const span_prof = document.createElement('span')
        span_prof.innerText= iprof.value
        p_prof.appendChild(span_prof)

        const p_salario = document.createElement('p')
        p_salario.setAttribute('class' , 'tela')
        p_salario.setAttribute('class' , 'tela')
        p_salario.innerText='Salario: '
        aside.appendChild(p_salario)
        const span_salario = document.createElement('span')
        span_salario.innerText= isalario.value
        p_salario.appendChild(span_salario)

        const aside_img = document.createElement('aside')
        aside_img.setAttribute('class' , 'aside_img')
        divFilho.appendChild(aside_img)
        img = document.createElement('img')
        img.setAttribute('src' , 'img/download.jpeg')
        aside_img.appendChild(img)
        const div_id = document.createElement('div')
        div_id.setAttribute('class' , 'div_id')
        div_id.innerHTML= `Id = ${this.id}`
        aside_img.appendChild(div_id)

        const btn = document.createElement('button')
        btn.setAttribute('class' , 'bnt_apagar')
        btn.innerText= 'Remover'
        div.appendChild(btn)
        btn.addEventListener('click' , (evt)=>{
            const p_quantidade = document.querySelector('#quantidade')
            evt.target.parentNode.remove()
            quantidade_pessoas--
            p_quantidade.innerText= quantidade_pessoas
        })
    }
}
/*
<section id="section_tela">
<div id="info_pessoaias">
    <div id="filho_info_pessoais">
        <aside id="aside_nome">

            <h1>Informações Pessoais</h1>                        
            <p class="tela">Nome: <span id="span_nome">Adson luis</span> </p>                                          
            <p class="tela">idade: <span id="span_idade">18</span></p>                    
            <p class="tela">Sexo: <span id="span_sexo">Homem</span></p>                   
            <p class="tela">Prossisão: <span id="span_prof">Programador</span></p>                     
            <p class="tela">Salario: <span id="span_sala">R$3000</span></p> 

        </aside>

        <aside id="aside_img">

            <img id="img_pessoa" src="img/3X4 jovem (homem).jpg" alt="img_pessoa">
        
        </aside>
    </div>

    <button id="bnt_apagar">Apagar</button>

</div>
</section> */

btn_header_add.addEventListener('click',()=>{
    const p_quantidade = document.querySelector('#quantidade')
    if(ihomem.checked && iidade.value >= 18){
       new pessoa(inome.value , icpf.value , iidade.value , 'Homem' , iprof.value , isalario.value , itell.value , iemail.value , imoradia.value).criar()
        quantidade_pessoas++
        p_quantidade.innerText= quantidade_pessoas
        if(iidade.value <25){
            img.setAttribute('src' , 'img/jovem_homem.jpeg')
        }else if(iidade.value <40){
            img.setAttribute('src' , 'img/adulto_homem.avif')
        }else if(iidade.value <60){
            img.setAttribute('src' , 'img/maduro_homem.jpeg')
        }else if(iidade.value >=60){
            img.setAttribute('src' , 'img/idoso_homem.jpg')
        }
    }else if(iidade.value < 18){
        section_alert.classList.add('section_alert_true')
        setTimeout(()=>{
            section_alert.classList.remove('section_alert_true')
        },3000)
    }
    if(imulher.checked && iidade.value >= 18){
        new pessoa(inome.value , icpf.value , iidade.value , 'Mulher' , iprof.value , isalario.value , itell.value , iemail.value , imoradia.value).criar()
        quantidade_pessoas++
        p_quantidade.innerText= quantidade_pessoas
        if(iidade.value <25){
            img.setAttribute('src' , 'img/adolecente_mulher.jpeg')
        }else if(iidade.value <40){
            img.setAttribute('src' , 'img/adulto_mulher.jpeg')
        }else if(iidade.value <60){
            img.setAttribute('src' , 'img/mulher_madura.webp')
        }else if(iidade.value >=60){
            img.setAttribute('src' , 'img/idosa_mulher.webp')
        }
    }else if (iidade.value < 18){
        section_alert.classList.add('section_alert_true')
        setTimeout(()=>{
            section_alert.classList.remove('section_alert_true')
        },3000)
    }
    if(!ihomem.checked && !imulher.checked){
        section_alert.classList.add('section_alert_true')
        setTimeout(()=>{
            section_alert.classList.remove('section_alert_true')
        },3000)
    }
})

btn_header_remove.addEventListener('click' , ()=>{
    section_tela.innerHTML = ''
    const p = document.createElement('p')
    p.setAttribute('id' , 'p_quantidade')
    p.innerText = 'Pessoas registradas: '
    section_tela.appendChild(p)
    const span = document.createElement('span')
    span.setAttribute('id' , 'quantidade')
    quantidade_pessoas = 0
    span.innerText= quantidade_pessoas
    p.appendChild(span)
})