const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
    clientName: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    feedback: {
        type: String,
        required: true
    },
    image: {
        type: String, // URL
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Testimonial', testimonialSchema);
