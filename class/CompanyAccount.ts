import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (loan: number): void => {
    if(this.getValidateStatus()){
      this.setBalance(loan)
      console.log(`Voce contraiu um empréstimo de R$${loan} e agora seu saldo é R$${this.getBalance}`)
    }
  }
}
