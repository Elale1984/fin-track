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
      .send({ message: "You can only update your own user information." });
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
exports.deleteUser = async (req, res) => {
  try {
    // Ensure req.user is populated
    if (!req.user) {
      return res.status(401).send({ message: "Unauthorized" });
    }

    // Check if the user is deleting their own account or is an admin
    if (req.user._id.toString() !== req.params.id && !req.user.isAdmin) {
      return res
        .status(403)
        .send({ message: "You are not authorized to delete this account." });
    }

    // Find and delete the user by ID
    const user = await User.findByIdAndDelete(req.params.id);

    // Check if the user was found and deleted
    if (!user) {
      return res.status(404).send({ message: "User not found." });
    }

    // Return success response
    res.send({ message: "User deleted successfully!" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
