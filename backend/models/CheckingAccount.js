const mongoose = require('mongoose');

const checkingAccountSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', require: true },
    accountName: { type: String, required: true },
    accountNumber: { type: String, required: true },
    accountRoutingNumber: { type: String, required: true },
    accountBalance: { type: Number, required: true }
});

const CheckingAccount = mongoose.model('CheckingAccount', checkingAccountSchema);
module.exports = CheckingAccount;
