const express = require('express');
const { getUserProfile, getUserById, update, deleteUser } = require('../controllers/UserController')
const { protect } = require('../middleware/AuthMiddleware');

const router = express.Router();

router.get('/profile', protect, getUserProfile);
router.get('/profile/:id', protect, getUserById);
router.put('/profile/:id', protect, update);
router.delete('/profile/:id', protect, deleteUser);

module.exports = router;
