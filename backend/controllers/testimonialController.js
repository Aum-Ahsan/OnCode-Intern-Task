const Testimonial = require('../models/Testimonial');

// @desc Get all testimonials
const getTestimonials = async (req, res) => {
    try {
        const testimonials = await Testimonial.find({});
        res.json(testimonials);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc Add testimonial (Admin only)
const createTestimonial = async (req, res) => {
    const { clientName, role, feedback } = req.body;
    try {
        const testimonial = await Testimonial.create({ clientName, role, feedback });
        res.status(201).json(testimonial);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc Delete testimonial (Admin only)
const deleteTestimonial = async (req, res) => {
    try {
        const testimonial = await Testimonial.findById(req.params.id);
        if (testimonial) {
            await testimonial.deleteOne();
            res.json({ message: 'Testimonial removed' });
        } else {
            res.status(404).json({ message: 'Testimonial not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getTestimonials, createTestimonial, deleteTestimonial };
