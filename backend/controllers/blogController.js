const Blog = require('../models/Blog');

// @desc Get all blogs
// @route GET /api/blogs
const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find({}).sort({ createdAt: -1 });
        res.json(blogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc Create a blog
// @route POST /api/blogs
const createBlog = async (req, res) => {
    const { title, content, image } = req.body;

    try {
        const blog = new Blog({ title, content, image });
        const createdBlog = await blog.save();
        res.status(201).json(createdBlog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc Delete a blog
// @route DELETE /api/blogs/:id
const deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (blog) {
            await blog.deleteOne();
            res.json({ message: 'Blog removed' });
        } else {
            res.status(404).json({ message: 'Blog not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getBlogs, createBlog, deleteBlog };
