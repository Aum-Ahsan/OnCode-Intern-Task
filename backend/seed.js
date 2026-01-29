require('dotenv').config();
const mongoose = require('mongoose');
const Admin = require('./models/Admin');
const connectDB = require('./config/db');

const seedAdmin = async () => {
    await connectDB();

    try {
        const adminExists = await Admin.findOne({ username: 'admin' });

        if (!adminExists) {
            await Admin.create({
                username: 'admin',
                password: 'password123'
            });
            console.log('Default admin created: admin / password123');
        } else {
            console.log('Admin already exists.');
        }

        // Seed Blogs
        const Blog = require('./models/Blog');
        await Blog.deleteMany({}); // Clear existing blogs to ensure fresh seed data
        await Blog.create([
            { title: 'The Importance of Financial Audits', content: 'Audits provide transparency and build trust with stakeholders. Regular audits ensure that your financial statements are accurate and reliable, giving investors and creditors confidence in your business.', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800' },
            { title: 'Tax Planning Strategies 2026', content: 'Stay ahead of the curve with our expert tax planning insights. We explore the latest changes in tax legislation and how they impact your business liabilities and opportunities.', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800' },
            { title: 'Navigating Corporate Compliance', content: 'Understanding the complex landscape of corporate compliance is crucial for modern businesses. Learn about the new regulatory requirements affecting your industry.', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800' },
            { title: 'Forensic Accounting Basics', content: 'What happens when numbers dont add up? Forensic accounting investigates financial discrepancies and fraud, protecting your assets from internal and external threats.', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800' }
        ]);
        console.log('Sample blogs created.');

        // Seed Services
        const Service = require('./models/Service');
        await Service.deleteMany({}); // Clear existing services
        await Service.create([
            { name: 'Financial Auditing', description: 'Comprehensive review of financial statements to ensure accuracy and compliance.', icon: 'bi-briefcase' },
            { name: 'Tax Consultancy', description: 'Expert advice on corporate and personal tax planning and filing.', icon: 'bi-calculator' },
            { name: 'Risk Management', description: 'Identifying and mitigating business risks to ensure long-term stability.', icon: 'bi-shield-check' },
            { name: 'Forensic Accounting', description: 'Investigating financial discrepancies and preventing fraud.', icon: 'bi-search' },
            { name: 'Business Advisory', description: 'Strategic planning and advice to help your business grow and succeed.', icon: 'bi-graph-up-arrow' },
            { name: 'Payroll Services', description: 'Efficient and accurate payroll processing and compliance management.', icon: 'bi-cash-coin' }
        ]);
        console.log('Sample services created.');

        // Seed Testimonials
        const Testimonial = require('./models/Testimonial');
        await Testimonial.deleteMany({}); // Clear existing testimonials
        await Testimonial.create([
            { clientName: 'John Smith', role: 'CEO, TechFlow', feedback: 'AuditCo simplified our entire compliance process. Highly professional and thorough!' },
            { clientName: 'Sarah Jenkins', role: 'CFO, GreenGrid', feedback: 'Their tax strategies saved us thousands. Highly recommended for any growing business.' },
            { clientName: 'Michael Brown', role: 'Director, UrbanReal', feedback: 'An invaluable partner in our financial planning. Their insights are always spot on.' },
            { clientName: 'Emily Davis', role: 'Founder, StartUp Inc', feedback: 'Efficient, reliable, and expert service. They took the stress out of our annual audit.' }
        ]);
        console.log('Sample testimonials created.');

    } catch (error) {
        console.error(error.message);
    } finally {
        mongoose.connection.close();
    }
};

seedAdmin();
