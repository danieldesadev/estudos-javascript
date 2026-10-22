console.log("Olá, mundo!")

const valorString = 123;
const valorNumber = (typeof valorString)

console.log(typeof valorNumber)

const tamanhoString = "JavaScript é incrível!"

const tamanhoCaracteres = tamanhoString.length
const quantidadePalavras = tamanhoString.split(" ").length

console.log(`O número de caracteres é: ${tamanhoCaracteres}`)
console.log(`O número de palavras é: ${quantidadePalavras}`)

function converterHora (horario24){
    const [hora, minuto] = horario24.split(":");
    let hora12 = hora % 12 || 12;
    let periodo = "AM"
    if (hora>12){
        periodo="PM"
    }

    return `O valor da hora é: ${hora12}:${minuto} ${periodo}`
}

console.log(converterHora("14:30"))
console.log(converterHora("6:30"))
console.log(converterHora("21:30"))