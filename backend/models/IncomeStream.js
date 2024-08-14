const mongoose = require("mongoose");

const incomeStreamSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  incomeSource: { type: String, required: true },
  incomeAmount: { type: Number, required: true },
  incomeFrequency: {
    type: String,
    enum: ["one-time", "daily", "weekly", "bi-weekly", "monthly", "yearly"],
    set: function (value) {
      const allowedValues = [
        "one-time",
        "daily",
        "weekly",
        "bi-weekly",
        "monthly",
        "yearly",
      ];
      return allowedValues.includes(value) ? value : "monthly"; // default to 'monthly'
    },
  },
  category: { type: String, default: "Pay Check" },
  currency: { type: String, default: "USD" },
  isTaxable: { type: Boolean, default: true },
});

const IncomeStream = mongoose.model("IncomeStream", incomeStreamSchema);

module.exports = IncomeStream;
