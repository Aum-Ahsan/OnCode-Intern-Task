const Inquiry = require('../models/Inquiry');

// @desc Submit a new inquiry
// @route POST /api/inquiries
const createInquiry = async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: 'Please fill all fields' });
    }

    try {
        const inquiry = await Inquiry.create({ name, email, subject, message });
        res.status(201).json({ message: 'Inquiry sent successfully!', data: inquiry });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc Get all inquiries (Admin only)
// @route GET /api/inquiries
const getInquiries = async (req, res) => {
    try {
        const inquiries = await Inquiry.find({}).sort({ createdAt: -1 });
        res.json(inquiries);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc Update inquiry status
// @route PUT /api/inquiries/:id/status
const updateInquiryStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const inquiry = await Inquiry.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        );
        res.json(inquiry);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createInquiry, getInquiries, updateInquiryStatus };
