// ele enumera uam coleção usando os dados mais complexos de forma simples
var roupa;
(function (roupa) {
    roupa["P"] = "pequeno";
    roupa["M"] = "medio";
    roupa["G"] = "grande";
})(roupa || (roupa = {}));
var estilo1 = {
    tipo: 'oversize',
    tamanho: roupa.P
};
console.log(estilo1);
var estilo2 = {
    tipo: 'gola v ',
    tamanho: roupa.M
};
console.log(estilo2);
