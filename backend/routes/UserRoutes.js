const express = require('express');
const { getUserProfile, getUserById, updateUserProfile, deleteUserProfile } = require('../controllers/UserController')
const { protect } = require('../middleware/AuthMiddleware');

const router = express.Router();

router.get('/profile', protect, getUserProfile);
router.get('/profile/:id', protect, getUserById);
//router.patch('/profile', protect, updateUserProfile);
//router.delete('/profile', protect, deleteUserProfile);

module.exports = router;
