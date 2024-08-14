const express = require('express');
const { createIncomeStream } = require('../controllers/IncomeStreamController');
const { protect } = require('../middleware/AuthMiddleware');

const router = express.Router();

router.post('/', protect, createIncomeStream);

module.exports = router;