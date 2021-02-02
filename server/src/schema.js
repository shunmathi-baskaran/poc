import {buildSchema } from 'graphql'

const schema = buildSchema(`
type Query {
  login(username: String,password: String): Customer
  accountInfo(customerId: ID!): [Account]
  transactions(
    accountNumber: String!
  ): [Transaction]
}

type Customer {
  customerId: ID
  username: String
  email: String
  phoneNumber: String
}

type Account {
  customerId: ID
  accountNumber: String
  accountType: AccountType
  ifscCode: String
  branchName: String
}

type Transaction {
  accountNumber: String
  id: ID!
  date: Date!
  narration: NarrationType!
  type: TransactionType!
  amount: Float!
}

enum AccountType {
    Savings
    Current
}

enum TransactionType {
  dbt
  crt
}

enum NarrationType {
    atm
    pos
    upi
}

scalar Date`)

export default schema;