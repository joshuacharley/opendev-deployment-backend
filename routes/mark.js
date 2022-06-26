const express = require('express');

const router = express.Router();

const marksController = require('../controllers/mark');

router.get('/mark', marksController.getAllMarks);



module.exports = router;