const mongoose = require("mongoose")

//defining accounts schema.
const customerSchema = mongoose.Schema({
    customerId: Number,
    username: String,
    password: String,
    email: String,
    phoneNumber: String,
})

module.exports = mongoose.model("customers", customerSchema);
