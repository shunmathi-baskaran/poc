import accounts from "../models/accounts";
import customers from "../models/customers";
import transactions from "../models/transactions";

const resolvers = {
  Query: {
    getCustomerInfo: async (_, { email, password }) => {
      let customerInfo = await customers.findOne({ email, password });
      return customerInfo;
    },
    getAccounts: async (_, { customerId }) => {
      let accountsInfo = await accounts.find({ customerId });
      if (accountsInfo.length > 0) {
        return accountsInfo;
      }
    },
    getTransactions: async (_, { accountNumber }) => {
      let transactionsInfo = await transactions.find({ accountNumber });
      if (transactionsInfo.length > 0) {
        return transactionsInfo;
      }
    },
  },

  Mutation: {
    updatePhoneno: async (_, { customerId, phoneNumber }) => {
      let updatedCustomerInfo = await customers.findOneAndUpdate(
        { customerId },
        { $set: { phoneNumber } },
        { new: true }
      );
      return updatedCustomerInfo;
    },
  },
};

export default resolvers;
