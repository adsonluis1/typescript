"use strict";
// all
// ele so retornara quando todas as promises estiverem pronta
const p1 = new Promise((aceitar, reject) => {
    aceitar('p1 ok');
});
const p2 = new Promise((aceitar, reject) => {
    setTimeout(() => {
        aceitar('p2 ok');
    }, 3000);
});
const p3 = new Promise((aceitar, reject) => {
    setTimeout(() => {
        aceitar('p3 ok');
    }, 4000);
});
Promise.all([p1, p2, p3]).then((data) => {
    console.log(data);
});
// race
// ele vai imprimir a primeira promice acabar 
const p4 = new Promise((aceitar, reject) => {
    aceitar('p4 ok');
});
const p5 = new Promise((aceitar, reject) => {
    setTimeout(() => {
        aceitar('p5 ok');
    }, 3000);
});
const p6 = new Promise((aceitar, reject) => {
    setTimeout(() => {
        aceitar('p6 ok');
    }, 4000);
});
Promise.race([p4, p5, p6]).then((retorno) => {
    console.log(retorno);
});
