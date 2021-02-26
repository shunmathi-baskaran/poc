const mongoose = require("mongoose")

//defining accounts schema.
const accountSchema = mongoose.Schema({
    customerId: Number,
    accountNumber: String,
    accountType: String,
    ifscCode: String,
    branchName: String,
    balance: Number
})

module.exports = mongoose.model("accounts", accountSchema);
