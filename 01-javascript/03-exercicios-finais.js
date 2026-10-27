const transacoes = [300, -500, 1800, 2000, -5000]

const saldo = (lista) => lista.reduce((acumulado, valor) => acumulado+valor, 0)

const receitas = transacoes.filter((num) => num > 0)
const despesas = transacoes.filter((num) => num < 0)

console.log(`Receitas: ${receitas.length} total: R$ ${saldo(receitas)}`)
console.log(`Despesas: ${despesas.length} total: R$ ${saldo(despesas)}`)
console.log(`Saldo: ${saldo(transacoes)}`)