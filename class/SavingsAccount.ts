import { DioAccount } from "./DioAccount";


export class SavingsAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    deposit = (balance: number): void => {
        if(this.getValidateStatus()){
           this.balance += balance + 10
           console.log(`Você depositou R$${balance} reais e seu saldo é R$${this.balance}`)
        }
    }

}