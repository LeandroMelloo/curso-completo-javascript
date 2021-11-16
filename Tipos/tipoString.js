const texto1 = 'Olá, mundo!';
const texto2 = 'Olá, mundo!';
const senha = '@333&69*';
const stringDeNumero = '34567';

const citacao = 'Meu nome é ';
const nome = 'Leandro';

// concatenação (+)
const concatenacao = citacao + nome; // 'Meu nome é' + 'Leandro'
console.log(concatenacao); // Meu nome é Leandro

// Template String ou Template String
const templateString = `Meu nome é ${nome}`;
console.log(templateString); // Meu nome é Leandro

// Trabalhando com Strings
var cidade = "belo horizonte";
var input = "Belo Horizonte";

console.log(cidade === input); // false


// toLowerCase
var cidade = "belo horizonte";
var input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase(); // toLowerCase => que converte todos os caracteres da string informada (no caso, input) para letras minúsculas (se forem algarismos, nada é convertido)

console.log(inputMinusculo) // belo horizonte
console.log(cidade === inputMinusculo); // true

// toUpperCase
var cidade = "belo horizonte";
var input = "Belo Horizonte";

const inputMaiusculo = cidade.toUpperCase(); // toUpperCase => que converte todos os caracteres da string informada (no caso, cidade) para letras maiúsculas (se forem algarismos, nada é convertido)

console.log(inputMaiusculo) // BELO HORIZONTE
console.log(cidade === inputMaiusculo); // false

const senhaLength = "minhaSenha123"
console.log(senhaLength.length) // 13 (caracteres)