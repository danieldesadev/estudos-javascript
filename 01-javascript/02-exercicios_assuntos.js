const compras = []

compras.push("feijao", "macarrao", "arroz", "ervilha", "banana")
console.log(compras)

compras.shift();
console.log(compras)

const numeros = [3, 7, 14, 21, 29, 36, 42]

console.log(numeros.find((num) => num % 7 === 0 && num > 10))

const numeros2 = [5, 10, 15, 20, 25, 30, 35, 40]

const numeros2Novo = numeros2.filter((num) => num > 20)

console.log(numeros2Novo)

const mensagem = " Bom dia, mundo! "
console.log(mensagem)

const mensagemForm = mensagem.trim();
console.log(mensagemForm)

const palavras = mensagem.trim().split(" ")
console.log(palavras)

const frase = "O rato roeu a roupa do rei de Roma"

console.log(frase.startsWith("O"))
console.log(frase.endsWith("Roma"))