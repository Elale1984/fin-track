const mongoose = require('mongoose');

const paymentAccountSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true  },
    bankName: { type: String, required: true },
    paymentAccountNumber: { type: String, required: true },
    paymentAccountRoutingNumber: { type: String, required: true },
    accountType: { type: String, enum: ['checking', 'savings'], required: true},
    balance: { type: Number, required: true }
});

const PaymentAccount = mongoose.model('PaymentAccount', paymentAccountSchema);
module.exports = PaymentAccount;