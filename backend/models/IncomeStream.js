const mongoose = require('mongoose');

const incomeStreamSchema = new mongoose.model({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    incomeSource: { type: String, required: true },
    incomeAmount: { type: Number, required: true },
    incomeFrequency: { type: String, enum: ['one-time', 'daily', 'weekly', 'bi-weekly', 'monthly', 'yearly']},
     nextPaymentDate: { type: Date, required: true }
});

const IncomeStream = mongoose.model('IncomeStream', incomeStreamSchema);
module.exports = IncomeStream;

