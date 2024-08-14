const User = require('../models/User');
const IncomeStream = require('../models/IncomeStream');

// Create a new income stream
exports.createIncomeStream = async (req, res) => {
    const { incomeSource, incomeAmount, incomeFrequency, incomeCurrency, isTaxable } = req.body;

    try {
        const incomeStream = await IncomeStream.create({
            userId: req.user._id,
            incomeSource,
            incomeAmount,
            incomeFrequency,
            incomeCurrency,
            isTaxable
        });

        const user = await User.findById(req.user._id);

        user.incomeStreams.push(incomeStream._id);
        await user.save();

        res.status(201).json(incomeStream);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};