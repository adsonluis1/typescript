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
btn_addAll?.addEventListener('click', (btn) => {
    section_form.style.display = 'flex';
});
btn_infoAll?.addEventListener('click', () => {
    class Pessoa {
        // sexo
        // profissão
        // salario
        // telefone
        // email
        // moradia
        // id
        constructor(nome, cpf, idade) {
            this.nome = nome;
            this.cpf = cpf;
            this.idade = idade;
        }
    }
    __decorate([
        checknome()
    ], Pessoa.prototype, "nome", void 0);
    console.log(new Pessoa(inome.value, icpf.value, iidade.value));
});
