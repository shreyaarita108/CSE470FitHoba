const Diet = require('../models/diet');
const User = require('../models/user');

exports.trackDiet = async (req, res) => {
    const { dates } = req.body;
    const { username } = req.params;
    
    try {
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      const newDiets = [];
      for (const date of dates) {
        const existingDiet = await Diet.findOne({ user: user._id, date });
        if (existingDiet) {
          continue; // Skip this date if it already exists
        }
  
        const diet = new Diet({
          user: user._id,
          date,
          // Other diet information
        });
        await diet.save();
        newDiets.push(diet);
      }
  
      res.status(201).json({ message: 'Diets tracked successfully', diets: newDiets });
    } catch (error) {
      console.error('Error tracking diets:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  

// Controller function to get diet tracking for a specific date
exports.getDiet = async (req, res) => {
  const userId = req.user._id; // Assuming user is logged in and authenticated
  const date = req.params.date;

  try {
    const diet = await Diet.findOne({ user: userId, date });
    if (!diet) {
      return res.status(404).json({ message: 'Diet for this date not found' });
    }

    res.status(200).json({ diet });
  } catch (error) {
    console.error('Error getting diet:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller function to update diet tracking for a specific date
exports.updateDiet = async (req, res) => {
  const userId = req.user._id; // Assuming user is logged in and authenticated
  const date = req.params.date;
  const update = req.body; // Updated diet information

  try {
    const diet = await Diet.findOneAndUpdate({ user: userId, date }, update, { new: true });
    if (!diet) {
      return res.status(404).json({ message: 'Diet for this date not found' });
    }

    res.status(200).json({ message: 'Diet updated successfully', diet });
  } catch (error) {
    console.error('Error updating diet:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller function to delete diet tracking for a specific date
exports.deleteDiet = async (req, res) => {
  const userId =req.params;// Assuming user is logged in and authenticated
  const date = req.params.date;

  try {
    const diet = await Diet.findOneAndDelete({ user: userId, date });
    if (!diet) {
      return res.status(404).json({ message: 'Diet for this date not found' });
    }

    res.status(200).json({ message: 'Diet deleted successfully' });
  } catch (error) {
    console.error('Error deleting diet:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
// Controller function to fetch all diet dates
// Controller function to fetch all diet dates


exports.getAllDietDates = async (req, res) => {
    const { username } = req.params;
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        const dietDates = await Diet.find({ user: user._id }).distinct('date');
        if (!dietDates || dietDates.length === 0) {
            return res.status(404).json({ message: 'No diet dates found' });
        }
        res.status(200).json({ dietDates });
    } catch (error) {
        console.error('Error fetching diet dates:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.bmicalculator = async (req, res) => {
  const { username } = req.params;

  try {
      const user = await User.findOne({ username });

      if (!user) {
          return res.status(404).json({ error: 'User not found' });
      }
      const height = user.height
      const weight = user.weight
      if (!height || !weight) {
          return res.status(400).json({ error: 'Height and weight are required' });
      }

      const heightInMeters = height / 100; // convert height from cm to meters
      const bmi = weight / (heightInMeters * heightInMeters);

      res.status(200).json({ bmi });
  } catch (error) {
      console.error('Error calculating BMI:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
};
  