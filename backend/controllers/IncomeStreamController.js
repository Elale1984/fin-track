const User = require("../models/User");
const IncomeStream = require("../models/IncomeStream");

// Create a new income stream
exports.createIncomeStream = async (req, res) => {
  const {
    incomeSource,
    incomeAmount,
    incomeFrequency,
    incomeCurrency,
    isTaxable,
  } = req.body;

  try {
    const incomeStream = await IncomeStream.create({
      userId: req.user._id, // Associate the income stream with the logged-in user
      incomeSource,
      incomeAmount,
      incomeFrequency,
      incomeCurrency,
      isTaxable,
    });

    const user = await User.findById(req.user._id);

    user.incomeStreams.push(incomeStream._id); // Add the income stream to the user's list
    await user.save();

    res.status(201).json(incomeStream);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all income streams for the logged-in user
exports.getIncomeStreams = async (req, res) => {
  try {
    // Find all income streams that belong to the logged-in user
    const incomeStreams = await IncomeStream.find({ userId: req.user._id });
    res.status(200).json(incomeStreams);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Get a specific income stream by ID, ensuring it belongs to the logged-in user
exports.getIncomeStreamById = async (req, res) => {
  try {
    const incomeStream = await IncomeStream.findById(req.params.id);

    if (!incomeStream) {
      return res.status(404).json({ message: "Income Stream not found" });
    }

    // Verify that the logged-in user is the owner of the income stream
    if (incomeStream.userId.toString() !== req.user._id.toString()) {
      return res
        .status(403)
        .json({ message: "You can only access your own income streams!" });
    }

    res.status(200).json(incomeStream);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Update an income stream, ensuring it belongs to the logged-in user
exports.updateIncomeStream = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Data to update cannot be empty!" });
  }

  const incomeStreamId = req.params.id;

  try {
    // Fetch the income stream to check ownership
    const incomeStream = await IncomeStream.findById(incomeStreamId);

    if (!incomeStream) {
      return res.status(404).send({ message: "Income stream not found" });
    }

    // Verify that the logged-in user is the owner of the income stream
    if (incomeStream.userId.toString() !== req.user._id.toString()) {
      return res
        .status(403)
        .send({ message: "You can only update your own income streams!" });
    }

    // Update the income stream with the new data
    const updatedIncomeStream = await IncomeStream.findByIdAndUpdate(
      incomeStreamId,
      req.body,
      { new: true, useFindAndModify: false }
    );

    res.send({
      message: "Income stream updated successfully!",
      updatedIncomeStream,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.deleteIncomeStream = async (req, res) => {
  try {
    const incomeStream = await IncomeStream.findByIdAndDelete(req.params.id);

    if (!incomeStream) {
      return res.status(404).json({ message: "Income Stream not found" });
    }

    // Verify that the logged-in user is the owner of the income stream
    if (incomeStream.userId.toString() !== req.user._id.toString()) {
      return res
        .status(403)
        .json({ message: "You can only access your own income streams!" });
    }

    res.send({ message: "Income Stream deleted successfully!" });
  } catch (error) {
    res.status(500).send({ message: err.message });
  }
};
