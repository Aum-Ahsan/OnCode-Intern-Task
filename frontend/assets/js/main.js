// Base URL for the API
const API_URL = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') && window.location.port !== '5000'
    ? 'http://localhost:5000/api'
    : (window.location.protocol === 'file:' ? 'http://localhost:5000/api' : '/api');

console.log('Using API URL:', API_URL);

/**
 * Fetch and display blogs from the backend
 */
async function fetchBlogs() {
    const blogContainer = document.getElementById('blog-container');

    try {
        const response = await fetch(`${API_URL}/blogs`);
        const blogs = await response.json();

        if (blogs.length === 0) {
            blogContainer.innerHTML = '<p class="text-center">No blogs found.</p>';
            return;
        }

        // Clean container
        blogContainer.innerHTML = '';

        // Create HTML for each blog
        blogs.forEach(blog => {
            const blogCol = document.createElement('div');
            blogCol.className = 'col-md-4 mb-4';
            blogCol.innerHTML = `
                <div class="card h-100 border-0 shadow-sm">
                    <img src="${blog.image || 'https://via.placeholder.com/350x200'}" class="card-img-top" alt="${blog.title}">
                    <div class="card-body">
                        <h5 class="card-title fw-bold">${blog.title}</h5>
                        <p class="card-text text-muted small mb-2"><i class="bi bi-calendar3 me-1"></i> ${new Date(blog.createdAt).toLocaleDateString()}</p>
                        <p class="card-text">${blog.content.substring(0, 100)}...</p>
                        <button class="btn btn-link text-primary p-0 text-decoration-none fw-bold" onclick='viewBlog(${JSON.stringify(blog).replace(/'/g, "&#39;")})'>Read Full Article <i class="bi bi-arrow-right"></i></button>
                    </div>
                </div>
            `;
            blogContainer.appendChild(blogCol);
        });

        // Refresh AOS to animate new elements
        if (window.AOS) window.AOS.refresh();

    } catch (error) {
        console.error('Error fetching blogs:', error);
        blogContainer.innerHTML = '<p class="text-danger text-center">Failed to load blogs. Make sure the backend is running.</p>';
    }
}

/**
 * View detailed blog in modal
 */
function viewBlog(blog) {
    document.getElementById('blogModalTitle').textContent = blog.title;
    document.getElementById('blogModalImage').src = blog.image || 'https://via.placeholder.com/350x200';
    document.getElementById('blogModalDate').textContent = new Date(blog.createdAt).toLocaleDateString();
    document.getElementById('blogModalContent').textContent = blog.content;

    const modal = new bootstrap.Modal(document.getElementById('blogModal'));
    modal.show();
}

/**
 * Fetch and display services
 */
async function fetchServices() {
    const servicesContainer = document.getElementById('services-container');
    try {
        const response = await fetch(`${API_URL}/services`);
        const services = await response.json();

        servicesContainer.innerHTML = '';
        services.forEach((service, index) => {
            const serviceCol = document.createElement('div');
            serviceCol.className = 'col-md-4 col-sm-6';
            serviceCol.innerHTML = `
                <div class="service-box h-100 text-center">
                    <div class="icon-box mb-3">
                        <i class="bi ${service.icon} display-4"></i>
                    </div>
                    <h4 class="mb-3">${service.name}</h4>
                    <p class="text-muted mb-0">${service.description}</p>
                </div>
            `;
            servicesContainer.appendChild(serviceCol);
        });

        if (window.AOS) window.AOS.refresh();

    } catch (error) {
        console.error('Error fetching services:', error);
        servicesContainer.innerHTML = '<p class="text-danger text-center">Failed to load services.</p>';
    }
}

/**
 * Fetch and display testimonials
 */
async function fetchTestimonials() {
    const testimonialContainer = document.getElementById('testimonials-container');
    try {
        const response = await fetch(`${API_URL}/testimonials`);
        const testimonials = await response.json();

        testimonialContainer.innerHTML = '';
        testimonials.forEach((t, index) => {
            const tCol = document.createElement('div');
            tCol.className = 'col-md-4';
            tCol.innerHTML = `
                <div class="testimonial-card h-100 text-center shadow-sm">
                    <p class="fst-italic fs-5 text-secondary mb-4">"${t.feedback}"</p>
                    <div class="mt-auto">
                        <h6 class="fw-bold mb-0 text-primary">${t.clientName}</h6>
                        <small class="text-muted text-uppercase">${t.role}</small>
                    </div>
                </div>
            `;
            testimonialContainer.appendChild(tCol);
        });

        if (window.AOS) window.AOS.refresh();

    } catch (error) {
        console.error('Error fetching testimonials:', error);
        testimonialContainer.innerHTML = '<p class="text-danger text-center">Failed to load testimonials.</p>';
    }
}

// Load logs on page load
document.addEventListener('DOMContentLoaded', () => {
    fetchBlogs();
    fetchServices();
    fetchTestimonials();

    // Contact Form Handler
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const statusDiv = document.getElementById('contact-status');
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            try {
                const response = await fetch(`${API_URL}/inquiries`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });

                if (response.ok) {
                    statusDiv.innerHTML = '<span class="text-success">Inquiry sent successfully! We will contact you soon.</span>';
                    contactForm.reset();
                } else {
                    statusDiv.innerHTML = '<span class="text-danger">Failed to send inquiry. Please try again.</span>';
                }
            } catch (error) {
                statusDiv.innerHTML = '<span class="text-danger">Connection error. Is the backend running?</span>';
            }
        });
    }
});
