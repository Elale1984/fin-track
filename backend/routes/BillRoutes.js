const express = require('express');
const { createBill, getBills, getBill, updateBill, deleteBill } = require('../controllers/BillController');
const { protect } = require('../middleware/AuthMiddleware');

const router = express.Router();

router.post('/', protect, createBill);
router.get('/', protect, getBills);
router.get('/:id', protect, getBill);
router.put('/:id', protect, updateBill);
router.delete('/:id', protect, deleteBill);

module.exports = router;
