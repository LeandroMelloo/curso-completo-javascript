// var => mutável, você pode utiliza-la antes de declarar

var altura = 5;
var comprimento = 7;

area = altura * comprimento;
console.log(area);

var area;

// let => mutável
let alturaNovo = 5;
let comprimentoNovo = 7;
let forma = 'retângulo';
let areaNovo; // variavel começou vazia, foi somente inicializada

if (forma === 'retângulo') {
    areaNovo = alturaNovo * comprimentoNovo;
} else {
    areaNovo = (alturaNovo * comprimentoNovo) / 2;
}

console.log(areaNovo);

// const => imutável

const formaConst = 'quadrado';
const alturaConst = 5;
const comprimentoConst = 7;

const areaConst = alturaConst * comprimentoConst;
console.log(areaConst);

