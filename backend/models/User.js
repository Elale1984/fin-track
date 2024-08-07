const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

var userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    streetAddress: { type: String, required: true },
    streetAddress2: { type: String },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
  },
  bills: [{ type: mongoose.Schema.Types.ObjectId, ref: "Bill" }],
  paymentAccounts: [
    { type: mongoose.Schema.Types.ObjectId, ref: "PaymentAccount" },
  ],
  creditCards: [{ type: mongoose.Schema.Types.ObjectId, ref: "CreditCard" }],
  savingsAccounts: [
    { type: mongoose.Schema.Types.ObjectId, ref: "SavingsAccount" },
  ],
  checkingAccounts: [
    { type: mongoose.Schema.Types.ObjectId, ref: "CheckingAccount" },
  ],
  incomeStreams: [
    { type: mongoose.Schema.Types.ObjectId, ref: "IncomeStream" },
  ],
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const User = mongoose.model("User", userSchema);
module.exports = user;
