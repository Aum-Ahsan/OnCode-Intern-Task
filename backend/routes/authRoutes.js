const express = require('express');
const router = express.Router();
const { loginAdmin, registerAdmin } = require('../controllers/authController');

router.post('/login', loginAdmin);
router.post('/register', registerAdmin); // For initial setup, usually protected or removed in production

module.exports = router;
