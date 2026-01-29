const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const Blog = require('./models/Blog');
const Service = require('./models/Service');
const Testimonial = require('./models/Testimonial');

const connectDB = async () => {
    try {
        let uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/audit_db';
        if (uri.includes('localhost')) {
            uri = uri.replace('localhost', '127.0.0.1');
        }
        await mongoose.connect(uri);
        console.log('MongoDB Connected');

        const blogCount = await Blog.countDocuments();
        const serviceCount = await Service.countDocuments();
        const testimonialCount = await Testimonial.countDocuments();

        console.log(`Blogs: ${blogCount}`);
        console.log(`Services: ${serviceCount}`);
        console.log(`Testimonials: ${testimonialCount}`);

        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

connectDB();
