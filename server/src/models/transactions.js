const mongoose = require("mongoose")

//defining accounts schema.
const transactionSchema = mongoose.Schema({
    accountNumber: String,
    id: String,
    date: String,
    narration: String,
    type: String,
    amount: Number,
})

module.exports = mongoose.model("transactions", transactionSchema);
