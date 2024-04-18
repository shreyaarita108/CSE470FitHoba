const mongoose = require('mongoose');

async function connectToDatabase() {
  try {
    await mongoose.connect("mongodb+srv://moiukh29:M01ukh92@dietplanner.vos2tli.mongodb.net/cse471", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

module.exports = connectToDatabase;
