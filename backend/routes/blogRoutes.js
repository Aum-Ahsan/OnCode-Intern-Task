const express = require('express');
const router = express.Router();
const { getBlogs, createBlog, deleteBlog } = require('../controllers/blogController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', getBlogs);
router.post('/', protect, createBlog);
router.delete('/:id', protect, deleteBlog);

module.exports = router;
