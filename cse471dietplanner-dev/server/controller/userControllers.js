const jwt = require("jsonwebtoken");
const User = require('../models/user');
const bcrypt = require('bcrypt');

exports.registerUser = async (req, res) => {
  const { name, username, email, password, dob, height, weight } = req.body;
  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name, username, email, password: hashedPassword, dob, height, weight
    });

    res.status(201).json(user);
  } catch (error) {
    console.error("Registration error:", error);
    res.status(400).json({ message: "Registration failed" });
  }
};

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' }); // Token expires in 1 hour
        const userWithoutPassword = { ...user.toJSON() }; // Clone user object
        delete userWithoutPassword.password; // Remove password field from cloned user object
        res.json({ message: "Login successful", token, user: userWithoutPassword });
      } else {
        res.status(401).json({ message: "Invalid password" });
      }
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//Logout
exports.logoutUser = (req, res) => {
  res.json({ message: "Logout successful" });
};

exports.changePassword = async (req, res) => {
  const { username, oldPassword, newPassword } = req.body;
  try {
    const user = await User.findOne({ username });
    if (user) {
      const match = await bcrypt.compare(oldPassword, user.password);
      if (match) {
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        const updatedUser = await User.findOneAndUpdate({ username }, { password: hashedPassword }, { new: true });
        res.json({ message: "Password changed successfully", user: updatedUser });
      } else {
        res.status(401).json({ message: "Invalid old password" });
      }
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error("Password change error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// function generateToken(user) {
//     return jwt.sign({ username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' }); // Token expires in 1 hour
// }

// const User = require("../models/user");

// Update user profile
exports.updateUserProfile = async (req, res) => { 
  const { username, height, weight, diseases, medications } = req.body;  
  try {
      const user = await User.findOne({ username });
      if (!user) {
          return res.status(404).json({ error: 'User not found' });
      }
      // Update user profile fields
      user.height = height;
      user.weight = weight;
      user.diseases = diseases;
      user.medications = medications;

      // Save the updated user profile
      await user.save();

      res.json({ message: 'User profile updated successfully' });
  } catch (error) {
      console.error('Error updating user profile:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
};
