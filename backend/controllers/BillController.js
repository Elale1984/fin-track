const Bill = require('../models/Bill');
const User = require('../models/User');

// Create a new bill
exports.createBill = async (req, res) => {
  const { name, amount, dueDate, category } = req.body;

  try {
    // Create the new bill
    const bill = await Bill.create({
      userId: req.user._id,
      name,
      amount,
      dueDate,
      category,
      isPastDue: dueDate < new Date()
    });

    // Find the user and add the bill to their list of bills
    const user = await User.findById(req.user._id);
    
    user.bills.push(bill._id);
    await user.save();


    res.status(201).json(bill);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all bills for the logged-in user
exports.getBills = async (req, res) => {
  try {
    const bills = await Bill.find({ userId: req.user._id });
    res.json(bills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single bill
exports.getBill = async (req, res) => {
  try {
    const bill = await Bill.findById(req.params.id);

    if (bill && bill.userId.equals(req.user._id)) {
      res.json(bill);
    } else {
      res.status(404).json({ message: 'Bill not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a bill
exports.updateBill = async (req, res) => {
  const { name, amount, dueDate, category } = req.body;

  try {
    const bill = await Bill.findById(req.params.id);

    if (bill && bill.userId.equals(req.user._id)) {
      bill.name = name || bill.name;
      bill.amount = amount || bill.amount;
      bill.dueDate = dueDate || bill.dueDate;
      bill.category = category || bill.category;
      bill.isPastDue = dueDate ? dueDate < new Date() : bill.isPastDue;

      const updatedBill = await bill.save();
      res.json(updatedBill);
    } else {
      res.status(404).json({ message: 'Bill not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a bill
exports.deleteBill = async (req, res) => {
  try {
    const bill = await Bill.findById(req.params.id);

    if (bill && bill.userId.equals(req.user._id)) {
      await bill.remove();
      res.json({ message: 'Bill removed' });
    } else {
      res.status(404).json({ message: 'Bill not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
