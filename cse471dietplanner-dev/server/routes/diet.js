// routes/diet.js
const express = require('express');
const router = express.Router();
const dietController = require('../controller/dietController');

// Route to add diet tracking for a specific date
router.post('/track/:username', dietController.trackDiet);


// Route to get diet tracking for a specific date
router.get('/track/:date', dietController.getDiet);

// Route to update diet tracking for a specific date
router.put('/track/:date', dietController.updateDiet);

// Route to delete diet tracking for a specific date
router.delete('/track/:date', dietController.deleteDiet);

router.get('/diet-dates/:username', dietController.getAllDietDates);
router.post('/bmicalculator/:username',dietController.bmicalculator)

module.exports = router;