const numeros = [1, 2, 3, 4, 5, 6]

console.log(numeros);

const numeroPar = numeros.find((num) => num % 2 === 0)
console.log(numeroPar)

const numerosPar = numeros.filter((num) => num % 2 === 0)
console.log(numerosPar)

const frase = " Olá, mundo! "
const palavras = frase.trim()
console.log(frase)
console.log(palavras)

const frase2 = "JavaScript é incrível!"

console.log(frase2.startsWith("Java"))
console.log(frase2.endsWith("!"))

//Exceções e tratamentos de erro

const idade = 15

/*if(idade<18){
    throw new Error("Você deve ter pelo menos 18 anos")
}
*/


try{
    const idade = 15
    if(idade<18){
        throw new Error("Você deve ter pelo menos 18 anos")
    }

} catch(error){
    console.log(error.message)

}

console.log("continuando o programa...")

//Callback

function mostrarMensagem (){
    console.log("Essa mensagem será exibida após 3 segundos.")

}

//setTimeout(mostrarMensagem, 3000)

//setTimeout(function(){
//    console.log("Oi")
//}, 1000)

//Promises

function assarBolo(temIngredientes) {
    return new Promise((resolve, reject) => {
        console.log("Bolo no forno...");

        setTimeout(() => {
            if (temIngredientes) {
                resolve("Bolo de chocolate pronto! 🎂");   // ✅ deu certo
            } else {
                reject("Faltou ovo! 🥚");                    // ❌ deu errado
            }
        }, 2000);
    });
}
assarBolo(true)
    .then((resultado) => {
        console.log(resultado);       // recebe o que foi passado no resolve
    })
    .catch((erro) => {
        console.log("Erro:", erro);   // recebe o que foi passado no reject
    })
    .finally(() => {
        console.log("Forno desligado"); // roda sempre, dando certo ou não
    });

    async function obterValor(){

        const promessa = new Promise((resolve, reject) =>{
            setTimeout(() => resolve("Valor obtido"), 2000)
        })
        const valor = await promessa
        console.log(valor)
    }

    obterValor()

    async function obterValorComErro(){
        try{
            const promessa = new Promise((resolve, reject) =>{
                setTimeout(() => reject("Valor com erro"), 2000)
            }) 
            const valor = await promessa
            console.log(valor)
    } catch (error) {
        console.log(error)
    }
    }

    obterValorComErro()

    //JSON (JavaScript Object Notation)
    //{nome:"teste"} => {"nome": "teste"}
    // Padroniza a comunicacao
    // front-end e back-end em uma linguagem so
    const objeto = {nome: "João", idade: 30}

    const jsonString = JSON.stringify(objeto)

    console.log(jsonString)
    console.log(typeof jsonString)

    //caminho contrario

    const json = '{"nome": "João", "idade": 30}'
    const objeto2 = JSON.parse(json)
    
    console.log(objeto2)
