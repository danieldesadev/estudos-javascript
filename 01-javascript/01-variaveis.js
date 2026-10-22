/*const nome = "Daniel";
let idade = 25;

console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos.`); 
*/
// Fundamentos
var booleano = true;

var meuObjeto = {}
var meuArray = []

// ; é opcional

var meuNull = null;
var meuUndefinied = undefined;
console.log(typeof meuArray)
console.log(typeof meuObjeto)
console.log(typeof meuNull)
console.log(typeof meuUndefinied)

// let e const

let x = 10
const y = 5

x=15;

console.log("5" === 5)
console.log("5" == 5)

const meuNumero1 = "123";

const meuNumeroConvertido = Number(meuNumero1);

console.log(meuNumeroConvertido)
console.log(typeof meuNumeroConvertido)

for (let i = 0; i<4; i++){
    console.log("O valor de i é " + i)
}

function cumprimento(nome){
    console.log("Olá, " + nome + "!")
}
cumprimento("Daniel");

const testeArrow = () => console.log("Isso é uma função")

testeArrow();

// truthy e falsy

const numeros = [1, 2, 3, 4]
console.log(numeros)
console.log(numeros[2])
numeros.push(6);
console.log(numeros)
numeros.pop();
console.log(numeros)

// prototype => OBJETO -> objeto2

const novaString = "Olá, mundo!"

//interpolação

const minhaString4 = `${novaString} Como você está?`
console.log(minhaString4);
console.log(minhaString4.length);
console.log(minhaString4[6]);
console.log(minhaString4.toUpperCase());

// Datae e hora

const agora = Date();
console.log(agora)

const natal = new Date (2026, 11, 24)
console.log(natal)
