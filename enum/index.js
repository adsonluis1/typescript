"use strict";
// ele enumera uam coleção usando os dados mais complexos de forma simples
var roup;
(function (roup) {
    roup["P"] = "pequeno";
    roup["M"] = "medio";
    roup["G"] = "grande";
})(roup || (roup = {}));
const estilo3 = {
    tipo: 'oversize',
    tamanho: roup.P
};
console.log(estilo3);
const estilo = {
    tipo: 'gola v ',
    tamanho: roup.M
};
console.log(estilo);
