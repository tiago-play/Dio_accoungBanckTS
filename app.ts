import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SavingsAccount } from './class/SavingsAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log('people account')
peopleAccount.deposit(10)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log('people account')
companyAccount.deposit(10)
companyAccount.deposit(10)
companyAccount.withdraw(4)

companyAccount.getLoan(50)

const savingsAccount: SavingsAccount = new SavingsAccount('Tiago', 32)
savingsAccount.deposit(500)