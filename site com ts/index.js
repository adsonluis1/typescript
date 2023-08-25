"use strict";
// DOM
const btn_addAll = document.querySelector('#btn_addAll');
const btn_removerAll = document.querySelector('#btn_removerAll');
const btn_infoAll = document.querySelector('#btn_infoAll');
const section_form = document.querySelector('#section_form');
const inome = document.querySelector('#inome');
const icpf = document.querySelector('#icpf');
const iidade = document.querySelector('#iidade');
const ihomem = document.querySelector('#M');
const imulher = document.querySelector('#f');
const iprof = document.querySelector('#iprof');
const isalario = document.querySelector('#isalario');
const itell = document.querySelector('#itell');
const iemail = document.querySelector('#iemail');
const imora = document.querySelector('#imora');
const span_quantidade = document.querySelector('#quantidade');
const section_tela = document.querySelector('#section_tela');
// decorator
function checknome() {
    return function (target, propertyKey) {
        let valor;
        const getter = function () {
            return valor;
        };
        const setter = function (newvalor) {
            if (newvalor.length >= 5 && newvalor.length <= 99) {
                valor = newvalor;
            }
            else {
                valor = undefined;
            }
        };
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter
        });
    };
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
let pessoaRegistradas = 0;
let img;
btn_addAll?.addEventListener('click', (btn) => {
    section_form.style.display = 'flex';
});
btn_infoAll?.addEventListener('click', () => {
    let sexo = '';
    if (ihomem.checked) {
        sexo = 'Masculino';
    }
    if (imulher.checked) {
        sexo = 'Feminino';
    }
    const pessoa = {
        nome: inome.value,
        idade: iidade.value,
        cpf: icpf.value,
        salario: isalario.value,
        sexo: sexo,
        prof: iprof.value,
        tell: itell.value,
        email: iemail.value,
        mora: imora.value
    };
    if (check_nome(pessoa.nome) != null) {
        console.log('[erro]: não pode ter numeros no nome');
    }
    else {
        if (Check_cpf_bdd(pessoa.cpf) === true) {
            console.log('[erro]CPF invalido');
        }
        else {
            if (check_idade(pessoa.idade) === false) {
                console.log('[erro]Idade menor que 14');
            }
            else {
                if (Check_tell_bdd(pessoa.tell) === true) {
                    console.log('[erro] Telefone ja cadastrado');
                }
                else {
                    if (check_email_bdd(pessoa.email)) {
                        console.log('[erro] email ja logado');
                    }
                    else {
                        class Pessoa {
                            constructor(obj) {
                                this.nome = obj.nome;
                                this.cpf = obj.cpf;
                                this.idade = obj.idade;
                                this.salario = obj.salario;
                                this.sexo = obj.sexo;
                                this.id = this.cpf + Math.floor(Math.random() * 10000);
                            }
                            showall() {
                                console.log(this);
                            }
                            criar() {
                                const div = document.createElement('div');
                                div.setAttribute('class', 'info_pessoais');
                                section_tela.appendChild(div);
                                const divFilho = document.createElement('div');
                                divFilho.setAttribute('class', 'filho_info_pessoais');
                                div.prepend(divFilho);
                                const aside = document.createElement('aside');
                                aside.setAttribute('class', 'aside_nome');
                                divFilho.prepend(aside);
                                const h1 = document.createElement('h1');
                                h1.innerText = 'Informações Pessoais';
                                aside.prepend(h1);
                                const p_nome = document.createElement('p');
                                p_nome.setAttribute('class', 'tela');
                                p_nome.setAttribute('class', 'tela');
                                p_nome.innerText = 'Nome: ';
                                aside.appendChild(p_nome);
                                const span_nome = document.createElement('span');
                                span_nome.innerText = pessoa.nome;
                                p_nome.appendChild(span_nome);
                                const p_cpf = document.createElement('p');
                                p_cpf.setAttribute('class', 'tela');
                                p_cpf.setAttribute('class', 'tela');
                                p_cpf.innerText = 'CPF: ';
                                aside.appendChild(p_cpf);
                                const span_cpf = document.createElement('span');
                                span_cpf.innerText = pessoa.cpf;
                                p_cpf.appendChild(span_cpf);
                                const p_idade = document.createElement('p');
                                p_idade.setAttribute('class', 'tela');
                                p_idade.setAttribute('class', 'tela');
                                p_idade.innerText = 'Idade: ';
                                aside.appendChild(p_idade);
                                const span_idade = document.createElement('span');
                                span_idade.innerText = pessoa.idade;
                                p_idade.appendChild(span_idade);
                                const p_sexo = document.createElement('p');
                                p_sexo.setAttribute('class', 'tela');
                                p_sexo.setAttribute('class', 'tela');
                                p_sexo.innerText = 'Sexo: ';
                                aside.appendChild(p_sexo);
                                const span_sexo = document.createElement('span');
                                span_sexo.innerText = pessoa.sexo;
                                p_sexo.appendChild(span_sexo);
                                const p_prof = document.createElement('p');
                                p_prof.setAttribute('class', 'tela');
                                p_prof.setAttribute('class', 'tela');
                                p_prof.innerText = 'Profissão: ';
                                aside.appendChild(p_prof);
                                const span_prof = document.createElement('span');
                                span_prof.innerText = pessoa.prof;
                                p_prof.appendChild(span_prof);
                                const p_salario = document.createElement('p');
                                p_salario.setAttribute('class', 'tela');
                                p_salario.setAttribute('class', 'tela');
                                p_salario.innerText = 'Salario: ';
                                aside.appendChild(p_salario);
                                const span_salario = document.createElement('span');
                                span_salario.innerText = pessoa.salario;
                                p_salario.appendChild(span_salario);
                                const aside_img = document.createElement('aside');
                                aside_img.setAttribute('class', 'aside_img');
                                divFilho.appendChild(aside_img);
                                img = document.createElement('img');
                                img.setAttribute('src', 'img/download.jpeg');
                                aside_img.appendChild(img);
                                const div_id = document.createElement('div');
                                div_id.setAttribute('class', 'div_id');
                                div_id.innerHTML = `Id = ${this.id}`;
                                aside_img.appendChild(div_id);
                                const btn = document.createElement('button');
                                btn.setAttribute('class', 'bnt_apagar');
                                btn.innerText = 'Remover';
                                div.appendChild(btn);
                                btn.addEventListener('click', (evt) => {
                                    // const p_quantidade = document.querySelector('#quantidade')
                                    evt.target.parentNode.remove();
                                    span_quantidade.innerHTML = String(bancoDeDados.length);
                                });
                            }
                        }
                        let newpessoa = new Pessoa(pessoa);
                        newpessoa.showall();
                        newpessoa.criar();
                        add_cpf_bdd(pessoa.cpf);
                        add_pessoa_bdd(newpessoa);
                        add_tell_bdd(pessoa.tell);
                        console.log(pessoa);
                        console.log(ShowFolhaSalarial(pessoa));
                        span_quantidade.innerHTML = String(bancoDeDados.length);
                    }
                }
            }
        }
    }
    console.log(bancoDeDados);
});
const bancoDeDadosCPF = [];
const bancoDeDadostell = [];
const bancoDeDadosemail = [];
const bancoDeDados = [];
let folhaSalarial = 0;
function ShowFolhaSalarial(obj) {
    folhaSalarial += Number(obj.salario);
    return folhaSalarial;
}
function add_cpf_bdd(cpf) {
    bancoDeDadosCPF.push(cpf);
}
function add_pessoa_bdd(pessoa) {
    bancoDeDados.push(pessoa);
}
function add_tell_bdd(tell) {
    bancoDeDadostell.push(tell);
}
function add_email_bdd(emial) {
    bancoDeDadosemail.push(emial);
}
function Check_cpf_bdd(cpf) {
    return bancoDeDadosCPF.includes(cpf);
}
function Check_tell_bdd(tell) {
    return bancoDeDadostell.includes(tell);
}
function check_email_bdd(email) {
    return bancoDeDadosemail.includes(email);
}
function check_nome(nome) {
    return nome.match(/\d/g);
}
function check_idade(idade) {
    return Number(idade) >= 14;
}
