const express = require('express');
const router = express.Router();
const { createInquiry, getInquiries, updateInquiryStatus } = require('../controllers/inquiryController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', createInquiry); // Public: anyone can send a message
router.get('/', protect, getInquiries); // Protected: only admin can see messages
router.put('/:id/status', protect, updateInquiryStatus);

module.exports = router;
