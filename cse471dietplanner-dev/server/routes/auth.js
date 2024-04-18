const express = require("express");
const router = express.Router();
const userControllers = require('../controller/userControllers');
const NotificationController = require('../controller/notificationController');
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const bcrypt = require('bcrypt');
const path = require('path');
const fs = require('fs');
require('dotenv').config();
router.get('/register', (req, res) => {
  // Read the contents of the register.jsx file
});

router.post('/register', userControllers.registerUser);
//router.post('/login', userControllers.loginUser);
router.post('/login', userControllers.loginUser, NotificationController.generateNotifications);
router.post('/logout', userControllers.logoutUser);
router.post('/password/change', userControllers.changePassword);
router.post('/profile/update', userControllers.updateUserProfile);
//router.post('/login-with-notifications', UserController.loginWithNotifications);
module.exports = router;




// const express = require("express");
// const router = express.Router();
// const jwt = require("jsonwebtoken");
// const User = require("../models/user");
// const bcrypt = require('bcrypt');
// const path = require('path');
// const fs = require('fs');
// require('dotenv').config();

// //Register route
// router.get('/register', (req, res) => {
//   // Read the contents of the register.jsx file
//   fs.readFile(path.join(__dirname, '../../client2/src/register.jsx'), 'utf8', (err, data) => {
//     if (err) {
//       console.error('Error reading register.jsx:', err);
//       res.status(500).send('Internal server error');
//       return;
//     }
//     // Set the content type to text/html
//     res.setHeader('Content-Type', 'text/html');
//     // Send the contents of register.jsx as the response
//     res.send(data);
//   });
// });
// router.post('/register', async (req, res) => {
//     const { name, username, email, password, dob, height, weight } = req.body;
//     console.log(req.body);
//     try {
//         // Check if the username already exists
//         const existingUser = await User.findOne({ username });
//         if (existingUser) {
//             return res.status(400).json({ message: "Username already exists" });
//         }
//         // Check if the email already exists
//         const existingEmail = await User.findOne({ email });
//         if (existingEmail) {
//             return res.status(400).json({ message: "Email already exists" });
//         }

//         // Hash the password
//         const hashedPassword = await bcrypt.hash(password, 10); // 10 is the saltRounds

//         // Create a new user with hashed password
//         const user = await User.create({
//             name, username, email, password: hashedPassword, dob, height, weight
//         });
//         // Respond with the created user data
//         res.status(201).json(user);
//     } catch (error) {
//         console.error("Registration error:", error);
//         res.status(400).json({ message: "Registration failed" });
//     }
// });

// // Login route
// router.post('/login', async (req, res) => {
//     const { username, password } = req.body;
//     try {
//         const user = await User.findOne({ username });
//         if (user) {
//             const match = await bcrypt.compare(password, user.password);
//             console.log(match)
//             if (match) {
//                 // Passwords match, generate token
//                 const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' }); // Token expires in 1 hour
//                 // Send user data along with token
//                 const userWithoutPassword = { ...user.toJSON() }; // Clone user object
//                 delete userWithoutPassword.password; // Remove password field from cloned user object
//                 res.json({ message: "Login successful", token, user: userWithoutPassword });
//             } else {
//                 // Passwords don't match
//                 res.status(401).json({ message: "Invalid password" });
//             }
//         } else {
//             // User not found
//             res.status(404).json({ message: "User not found" });
//         }
//     } catch (error) {
//         console.error("Login error:", error);
//         res.status(500).json({ message: "Internal server error" });
//     }
// });

// // Logout route
// router.post('/logout', (req, res) => {
//     // Clear token from localStorage
//     res.json({ message: "Logout successful" });
// });

// // Password change route
// router.post('/password/change', async (req, res) => {
//     const { username, oldPassword, newPassword } = req.body;
//     try {
//         // Find the user by username
//         const user = await User.findOne({ username });
//         if (user) {
//             // Check if the old password matches
//             const match = await bcrypt.compare(oldPassword, user.password);
//             if (match) {
//                 // Hash the new password
//                 const hashedPassword = await bcrypt.hash(newPassword, 10); // 10 is the saltRounds

//                 // Update the user's password with the hashed new password
//                 const updatedUser = await User.findOneAndUpdate({ username }, { password: hashedPassword }, { new: true });

//                 // Respond with the updated user data
//                 res.json({ message: "Password changed successfully", user: updatedUser });
//             } else {
//                 // Incorrect old password
//                 res.status(401).json({ message: "Invalid old password" });
//             }
//         } else {
//             // User not found
//             res.status(404).json({ message: "User not found" });
//         }
//     } catch (error) {
//         console.error("Password change error:", error);
//         res.status(500).json({ message: "Internal server error" });
//     }
// });



// module.exports = router;
