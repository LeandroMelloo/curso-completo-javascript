const meuNumero = 3;

const primeiroNumero = 1;
const segundoNumero = 2;

const soma = primeiroNumero + segundoNumero; // 1 + 2
const subtracao = primeiroNumero - segundoNumero; // 1 - 2
const multiplicacao = primeiroNumero * segundoNumero; // 1 * 2
const divisao = primeiroNumero / segundoNumero; // 1 / 2

console.log(soma); // 3
console.log(subtracao); // -1
console.log(multiplicacao); // 2
console.log(divisao); // 0.5

// Ponto Flutuante

const numeroPontoFlutuante = 3.3;
const pontoFlutuanteSemZero = .5;

const novaOperacao = primeiroNumero / numeroPontoFlutuante;
console.log(novaOperacao); // 0.30303030303030304

const novaOperacaoFormatada = novaOperacao.toFixed(2);
console.log(novaOperacaoFormatada); // 0.30

// NaN -> Not A Number (não é um número)

const texto = "ABC";

console.log(texto * primeiroNumero); // NaN