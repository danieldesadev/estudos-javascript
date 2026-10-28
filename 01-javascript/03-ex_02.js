export class Conta {
    constructor(saldo = 0){
        this.saldo = saldo;
    }
    
    saque(valorSaque) {
        try{
            if(valorSaque > this.saldo){
                throw new Error("Saldo insuficiente");
            }
            this.saldo-= valorSaque
            console.log(`O valor do saque é ${valorSaque} e o valor atualizado é: ${this.saldo} `)
        }
     catch(error){
        console.log(error.message)
    }}

    deposito(valorDeposito) {
        this.saldo+=valorDeposito
        console.log(`O valor do deposito é ${valorDeposito} e o valor atualizado é: ${this.saldo} `)
    }
    

}