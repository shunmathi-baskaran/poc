import {customerData, accounts, transactions} from './data'

const resolvers = {
    Query: {
        login: (_,{username, password}) => {
             let customerInfo = customerData.find((customer) => customer.username === username);
            if(customerInfo) {
                if(customerInfo.password === password) {
                    return customerInfo
                }
            }
        },
        getAccounts: ( _ , {customerId}) => {
            let accountData = accounts.filter((account) => account.customerId === parseInt(customerId));
            if(accountData.length > 0) {
                return accountData
            }
        },
        getTransactions: ( _ , { accountNumber}) => {
            let transactionData = transactions.filter((transaction) => transaction.accountNumber === accountNumber);
            if(transactionData.length > 0) {
                return transactionData
            }
        }
    }
}

export default resolvers;


