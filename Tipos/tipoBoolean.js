const primeiroNumero = 5;
const segundoNumero = 10;
const terceiroNumero = 5;
const quartoNumero = '5';
var cadastroAtivado = false;
const senhaUsuario = 12345678;
const senhaDigitada = 12345674;
const texto1 = 'A';
const texto2 = 'a';

// = (atribuição)
// == ou === (comparação)
// == (compara sem o tipo)
// === (compara o tipo)

console.log(primeiroNumero === segundoNumero); // false
console.log(primeiroNumero === terceiroNumero); // true
console.log(primeiroNumero === quartoNumero); // false => compara o tipo
console.log(primeiroNumero == quartoNumero); // true => não compara o tipo

if (senhaUsuario === senhaDigitada) {
    var cadastroAtivado = true;
    console.log('Usuario Logado');
} else {
    console.log('Usuario não Logado, senha não confere');
}

console.log(cadastroAtivado); // false
console.log(texto1 === texto2); // false
console.log(texto1 == texto2); // false

let input = null;

if (input === null) {
 console.log('não há informação');
} else {
 console.log(input);
}

let input1 = null;
let input2;

console.log(input1); // null
console.log(input2); // undefined

console.log(null == undefined); // true
console.log(null === undefined); // false

