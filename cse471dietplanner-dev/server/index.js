const express = require("express");
const connectToDatabase = require("./config/db");
const cors = require("cors");
const path = require('path');
const User = require('./models/user');
const homeRoutes = require('./routes/home');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');
const dietRoutes = require('./routes/diet');
const notificationRoutes = require('./routes/notifications'); // Import notifications routes
const app = express();
const staticPath = path.join(__dirname, 'client2/build');

app.use(express.json());
app.use(cors());
connectToDatabase();

// Define routes
app.use('/', homeRoutes); // Route to handle GET requests to the root URL
app.use('/user', authRoutes); // Routes for user authentication
app.use('/user', userRoutes); // Routes for user profile and settings
app.use('/post', postRoutes); // Routes for posts or community features
app.use('/diet', dietRoutes); // Routes for diet-related features
app.use('/notifications', notificationRoutes); // Use notifications routes

// Serve static files
app.use(express.static(staticPath));

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
