import Accounts from "../models/accounts";
import Customers from "../models/customers";
import Transactions from "../models/transactions";

const resolvers = {
  Query: {
    getCustomerInfo: async (_, { email, password }) => {
      const customerInfo = await Customers.findOne({ email, password });
      return customerInfo;
    },
    getAccounts: async (_, { customerId }) => {
      const accountsInfo = await Accounts.find({ customerId });
      if (accountsInfo.length > 0) {
        return accountsInfo;
      }
    },
    getTransactions: async (_, { accountNumber }) => {
      const transactionsInfo = await Transactions.find({ accountNumber });
      if (transactionsInfo.length > 0) {
        return transactionsInfo;
      }
    },
  },

  Mutation: {
    updatePhoneno: async (_, { customerId, phoneNumber }) => {
      const updatedCustomerInfo = await Customers.findOneAndUpdate(
        { customerId },
        { $set: { phoneNumber } },
        { new: true }
      );
      return updatedCustomerInfo;
    },
    addTransaction: async (_, { input }) =>{
      const transactionDoc = new Transactions(input)
      const newTransaction = await transactionDoc.save()
      return newTransaction;
    }
  },
};

export default resolvers;
