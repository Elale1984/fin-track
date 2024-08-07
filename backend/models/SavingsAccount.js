const mongoose = require('mongoose');

const savingsAccountSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  accountName: { type: String, required: true },
  accountNumber: { type: String, required: true },
  balance: { type: Number, required: true }
});

const SavingsAccount = mongoose.model('SavingsAccount', savingsAccountSchema);
module.exports = SavingsAccount;
