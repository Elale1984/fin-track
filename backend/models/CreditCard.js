const mongoose = require('mongoose');

const checkingAccountSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  accountName: { type: String, required: true },
  accountNumber: { type: String, required: true },
  balance: { type: Number, required: true }
});

const CheckingAccount = mongoose.model('CheckingAccount', checkingAccountSchema);
module.exports = CheckingAccount;
