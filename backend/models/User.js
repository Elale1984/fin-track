const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  userName: String,
  email: String,
  password: String,
  firstName: String,
  lastName: String,
  phone: String,
  address: {
    streetAddress: String,
    city: String,
    state: String,
    zip: String
  },
  bills: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Bill' }],
  paymentAccounts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'PaymentAccount' }],
  creditCards: [{ type: mongoose.Schema.Types.ObjectId, ref: 'CreditCard' }],
  savingsAccounts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SavingsAccount' }],
  checkingAccounts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'CheckingAccount' }],
  incomeStreams: [{ type: mongoose.Schema.Types.ObjectId, ref: 'IncomeStream' }]
});



userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const User = mongoose.model('User', userSchema);
module.exports = User;
