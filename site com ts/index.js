"use strict";
// DOM
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const btn_addAll = document.querySelector('#btn_addAll');
const btn_removerAll = document.querySelector('#btn_removerAll');
const btn_infoAll = document.querySelector('#btn_infoAll');
const section_form = document.querySelector('#section_form');
const inome = document.querySelector('#inome');
const icpf = document.querySelector('#icpf');
const iidade = document.querySelector('#iidade');
const isalario = document.querySelector('#isalario');
// decorator
function checknome() {
    return function (target, propertyKey) {
        let valor;
        const getter = function () {
            return valor;
        };
        const setter = function (newvalor) {
            if (newvalor.length >= 14 && newvalor.length <= 99) {
                valor = newvalor;
            }
            else {
                console.log('nome invalido');
            }
        };
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter
        });
    };
}
function checkcpf_BDD() {
    return function (target, propertyKey) {
        let valor;
        const getter = function () {
            return valor;
        };
        const setter = function (newvalor) {
            if (bancoDeDados.includes(icpf.value) === false) {
                valor = newvalor;
                bancoDeDados.push(newvalor);
            }
            else {
                console.log('nao pode');
                console.log(newvalor);
            }
        };
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter
        });
    };
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
btn_addAll?.addEventListener('click', (btn) => {
    section_form.style.display = 'flex';
});
btn_infoAll?.addEventListener('click', () => {
    console.log(bancoDeDados);
    class Pessoa {
        // telefone
        // email
        // moradia
        // id
        constructor(objpessoa) {
            this.nome = objpessoa.nome;
            this.cpf = objpessoa.cpf;
            this.idade = objpessoa.idade;
            this.salario = objpessoa.salario;
        }
        show() {
            console.log(`nome= ${this.nome}`);
            console.log(`cpf= ${this.cpf}`);
            console.log(`idade= ${this.idade}`);
            console.log(ShowFolhaSalarial(this));
        }
    }
    __decorate([
        checkcpf_BDD()
    ], Pessoa.prototype, "cpf", void 0);
    new Pessoa({ nome: inome.value, idade: iidade.value, cpf: icpf.value, salario: isalario.value }).show();
});
const bancoDeDados = [];
let folhaSalarial = 0;
function ShowFolhaSalarial(obj) {
    folhaSalarial += Number(obj.salario);
    return folhaSalarial;
}
