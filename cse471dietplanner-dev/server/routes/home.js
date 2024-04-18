// welcome to api
const express = require("express");
const router = express.Router()


router.get('/', (req, res) => {
    res.send('Welcome to the Diet Planner API');
  });

module.exports = router;