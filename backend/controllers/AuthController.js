const User = require("../models/User");
const generateToken = require("../utils/GenerateToken");
const bcrypt = require("bcrypt");

// User signup
exports.registerUser = async (req, res) => {
  const { userName, firstName, lastName, email, password, phone, address } =
    req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({
      userName,
      firstName,
      lastName,
      email,
      password,
      phone,
      address,
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        userName: user.userName,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// User login
exports.authUser = async (req, res) => {
  const { userName, password } = req.body;

  try {
    const user = await User.findOne({ userName });

    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        _id: user._id,
        userName: user.userName,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

