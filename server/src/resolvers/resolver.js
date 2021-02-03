import {customerData, accounts, transactions} from './data'

const resolvers = {
    Query: {
        getCustomerInfo: (_,{username, password}) => {
             let customerInfo = customerData.find((customer) => customer.username === username);
            if(customerInfo) {
                if(customerInfo.password === password) {
                    return customerInfo
                }
            }
        },
        getTransactions: ( _ , { accountNumber}) => {
            let transactionData = transactions.filter((transaction) => transaction.accountNumber === accountNumber);
            if(transactionData.length > 0) {
                return transactionData
            }
        }
    },
    Customer: {
        accounts: root => {
            let accountData = accounts.filter((account) => account.customerId === parseInt(root.customerId));
            if(accountData.length > 0) {
                return accountData
            }
        }
    }
}

export default resolvers;


