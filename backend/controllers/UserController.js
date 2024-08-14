const User = require("../models/User");

// Get user profile
exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (user) {
      res.json({
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        address: user.address,
      });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Find a single User with an id
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Update a user by the id in the request
exports.update = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Data to update cannot be empty!" });
  }

  const id = req.params.id;

  // Check if the user is updating their own data
  if (req.user.id !== id) {
    return res
      .status(403)
      .send({ message: "You can only update your own data." });
  }

  // Prevent updates to isMember and isAdmin
  const { isMember, isAdmin, ...updateData } = req.body;

  try {
    const user = await User.findByIdAndUpdate(id, updateData, {
      new: true,
      useFindAndModify: false,
    });
    if (!user) {
      return res.status(404).send({ message: "User not found." });
    }

    res.send({ message: "User updated successfully.", user });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// Delete a user with the specified id in the request
exports.destroy = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send({ message: "User not found." });
    }
    res.send({ message: "User deleted successfully!" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
