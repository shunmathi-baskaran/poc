import {customerData, accounts, transactions} from './data'
import { GraphQLDateTime } from "graphql-iso-date";


const resolvers = {
    Date: GraphQLDateTime,
    login: ({username, password}) => {
        let customerInfo = customerData.find((customer) => customer.username === username);
        if(customerInfo) {
            if(customerInfo.password === password) {
                return customerInfo
            }
        }
    },
    accountInfo: ({customerId}) => {
        let accountData = accounts.filter((account) => account.customerId === parseInt(customerId));
        if(accountData.length > 0) {
            return accountData
        }
    },
    transactions: ({accountNumber}) => {
        let transactionData = transactions.filter((transaction) => transaction.accountNumber === accountNumber);
        if(transactionData.length > 0) {
            return transactionData
        }
    }
  }

export default resolvers;


