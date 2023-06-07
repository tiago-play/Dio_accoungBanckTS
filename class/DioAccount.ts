export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  // setName = (name: string): void => {
  //   this.name = name
  //   console.log('Nome alterado com sucesso!')
  // }

  getName = (): string => {
    return this.name
  }

  deposit = (balance: number): void => {
    if(this.validateStatus()){
      this.balance = this.balance + balance
      console.log(`Você depositou R$${balance} reais e seu saldo é R$${this.balance}`)
    }
  }

  withdraw = (balance: number): void => {
    if(this.validateStatus() && this.balance >= balance){
      this.balance = this.balance - balance
      console.log(`Você sacou R$${balance} reais e seu saldo agora é ${this.balance}` )
    }
  }

  getBalance = (): number => {
    return this.balance
  }

  setBalance = (balance: number): number => {
    this.balance = balance
    return this.balance
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }

  getValidateStatus = (): boolean => {
    return this.validateStatus()
  }
}
