// Service Details Modal Data
const serviceDetails = {
    'software-dev': {
        title: 'Custom Software Development',
        description: 'We create tailored software solutions that solve your unique business challenges and drive growth.',
        details: `
            <h3>Our Software Development Services Include:</h3>
            <ul>
                <li><strong>Web Applications:</strong> Modern, responsive web apps built with latest technologies</li>
                <li><strong>Mobile Apps:</strong> iOS and Android applications for seamless mobile experiences</li>
                <li><strong>Database Solutions:</strong> Robust database design and management</li>
                <li><strong>System Integration:</strong> Connect your systems for better efficiency</li>
                <li><strong>Cloud Solutions:</strong> Migrate to cloud or build cloud-native applications</li>
                <li><strong>Custom Features:</strong> Tailored functionalities for your specific needs</li>
            </ul>
            <p><strong>Timeline:</strong> Typically 4-12 weeks depending on complexity</p>
            <p><strong>Starting Price:</strong> $5,000+</p>
        `
    },
    'it-consulting': {
        title: 'IT Consulting & Support',
        description: 'Strategic technology guidance to optimize your IT infrastructure and operations.',
        details: `
            <h3>IT Consulting Services:</h3>
            <ul>
                <li><strong>Tech Strategy:</strong> Plan your technology roadmap for the next 3-5 years</li>
                <li><strong>System Optimization:</strong> Improve performance and reduce costs</li>
                <li><strong>Troubleshooting:</strong> Quick resolution of technical issues</li>
                <li><strong>Security Audit:</strong> Identify and fix security vulnerabilities</li>
                <li><strong>Cloud Migration:</strong> Move to cloud with minimal disruption</li>
                <li><strong>24/7 Support:</strong> Round-the-clock technical support available</li>
            </ul>
            <p><strong>Engagement:</strong> Hourly, project-based, or monthly retainer</p>
            <p><strong>Starting Price:</strong> $150/hour or $3,000/month retainer</p>
        `
    },
    'resume-review': {
        title: 'Resume & Cover Letter Review',
        description: 'Get your resume and cover letter professionally reviewed and optimized.',
        details: `
            <h3>Resume Review Includes:</h3>
            <ul>
                <li><strong>ATS Optimization:</strong> Ensure your resume passes Applicant Tracking Systems</li>
                <li><strong>Content Refinement:</strong> Improve clarity, impact, and relevance</li>
                <li><strong>Format Enhancement:</strong> Professional layout and design</li>
                <li><strong>Industry-Specific Tips:</strong> Tailored advice for your field</li>
                <li><strong>Cover Letter Critique:</strong> Make your cover letter stand out</li>
                <li><strong>Revision Rounds:</strong> Multiple rounds of feedback and revisions</li>
            </ul>
            <p><strong>Turnaround:</strong> 2-3 business days</p>
            <p><strong>Price:</strong> $99-$199 (includes up to 3 revisions)</p>
        `
    },
    'career-coaching': {
        title: 'Career Coaching & Advice',
        description: 'Personalized guidance to advance your career and achieve your professional goals.',
        details: `
            <h3>Career Coaching Services:</h3>
            <ul>
                <li><strong>Career Planning:</strong> Clarify your career direction and goals</li>
                <li><strong>Goal Setting:</strong> Create actionable, measurable career goals</li>
                <li><strong>Skill Development:</strong> Identify and develop critical skills</li>
                <li><strong>Networking Strategies:</strong> Build meaningful professional connections</li>
                <li><strong>Job Search Strategy:</strong> Effective techniques to land your dream job</li>
                <li><strong>Career Transitions:</strong> Successfully change careers or industries</li>
            </ul>
            <p><strong>Format:</strong> 1-on-1 coaching sessions (60-90 minutes)</p>
            <p><strong>Packages:</strong> $299 (3 sessions) to $899 (10 sessions)</p>
        `
    },
    'interview-prep': {
        title: 'Interview Preparation',
        description: 'Comprehensive coaching to help you ace your next job interview.',
        details: `
            <h3>Interview Prep Services:</h3>
            <ul>
                <li><strong>Mock Interviews:</strong> Practice with experienced interviewers</li>
                <li><strong>Question Preparation:</strong> Master common and tough interview questions</li>
                <li><strong>Behavioral Coaching:</strong> STAR method and storytelling techniques</li>
                <li><strong>Technical Interview Prep:</strong> Prepare for technical questions (if applicable)</li>
                <li><strong>Confidence Building:</strong> Develop presence and communication skills</li>
                <li><strong>Company Research:</strong> Strategies to show deep company knowledge</li>
            </ul>
            <p><strong>Sessions:</strong> 1-hour individual coaching sessions</p>
            <p><strong>Packages:</strong> $199 (1 session) to $499 (3 sessions with follow-up)</p>
        `
    },
    'henna-art': {
        title: 'Henna Art & Design',
        description: 'Beautiful, traditional henna artwork for your special occasions and celebrations.',
        details: `
            <h3>Henna Services:</h3>
            <ul>
                <li><strong>Bridal Henna:</strong> Elegant, intricate designs for weddings</li>
                <li><strong>Event Coverage:</strong> Professional henna application for parties and events</li>
                <li><strong>Custom Designs:</strong> Personalized patterns and styles</li>
                <li><strong>Party Services:</strong> Full-service henna for events and celebrations</li>
                <li><strong>Wedding Packages:</strong> Multi-day bridal packages</li>
                <li><strong>Touch-ups:</strong> Extend the life of your henna</li>
            </ul>
            <p><strong>Pricing:</strong> Varies by complexity and duration</p>
            <p><strong>Starting Price:</strong> $50 (hands only) to $500+ (bridal package)</p>
            <p><strong>Note:</strong> Henna typically lasts 1-3 weeks. Availability subject to demand.</p>
        `
    },
    'document-assist': {
        title: 'Document Assistance',
        description: 'Expert help with critical documentation for medical, passport, and immigration matters.',
        details: `
            <h3>Document Services:</h3>
            <ul>
                <li><strong>Medical Documentation:</strong> Assist with medical records and forms</li>
                <li><strong>Passport Applications:</strong> Complete passport application guidance</li>
                <li><strong>Green Card Support:</strong> Green card application and interview prep</li>
                <li><strong>Visa Applications:</strong> Various visa types and countries</li>
                <li><strong>Immigration Forms:</strong> I-130, I-140, I-485 and more</li>
                <li><strong>Document Review:</strong> Ensure all documents are complete and accurate</li>
            </ul>
            <p><strong>Important:</strong> We provide guidance and assistance, not legal services. For legal advice, consult an immigration attorney.</p>
            <p><strong>Starting Price:</strong> $150-$500+ depending on complexity</p>
        `
    },
    'business-consulting': {
        title: 'Business Consulting',
        description: 'Strategic guidance to help your business grow, optimize operations, and increase profitability.',
        details: `
            <h3>Business Consulting Services:</h3>
            <ul>
                <li><strong>Business Strategy:</strong> Develop your 3-5 year business strategy</li>
                <li><strong>Operations Optimization:</strong> Streamline processes and reduce costs</li>
                <li><strong>Market Analysis:</strong> Competitive analysis and market research</li>
                <li><strong>Growth Planning:</strong> Strategies for scaling your business</li>
                <li><strong>Financial Planning:</strong> Budget, forecasting, and financial optimization</li>
                <li><strong>Change Management:</strong> Successfully implement organizational changes</li>
            </ul>
            <p><strong>Engagement Models:</strong> Project-based, hourly, or retainer agreements</p>
            <p><strong>Starting Price:</strong> $200/hour or $5,000+ for projects</p>
        `
    },
    'general-consulting': {
        title: 'General Consulting',
        description: 'Diverse consulting services tailored to your unique needs and challenges.',
        details: `
            <h3>General Consulting Includes:</h3>
            <ul>
                <li><strong>Custom Solutions:</strong> Tailored approach to your specific challenges</li>
                <li><strong>Expert Advice:</strong> Guidance from experienced professionals</li>
                <li><strong>Implementation Support:</strong> Help executing recommended solutions</li>
                <li><strong>Change Management:</strong> Smoothly implement organizational changes</li>
                <li><strong>Training & Development:</strong> Build capacity within your organization</li>
                <li><strong>Ongoing Support:</strong> Continued guidance and optimization</li>
            </ul>
            <p><strong>Process:</strong> Initial consultation → assessment → solution design → implementation</p>
            <p><strong>Starting Price:</strong> Free initial consultation + custom pricing</p>
        `
    }
};

// Filter Services
function filterServices(category) {
    const cards = document.querySelectorAll('.service-card');
    const buttons = document.querySelectorAll('.filter-btn');

    // Update active button
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Filter cards
    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

// Open Modal with Service Details
function openModal(serviceKey) {
    const modal = document.getElementById('serviceModal');
    const modalBody = document.getElementById('modalBody');
    const service = serviceDetails[serviceKey];

    if (service) {
        modalBody.innerHTML = `
            <h2>${service.title}</h2>
            <p style="color: #666; margin: 1rem 0;">${service.description}</p>
            <hr style="margin: 1.5rem 0;">
            ${service.details}
            <div style="margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid #eee;">
                <button onclick="scrollToContact()" style="background-color: #d63384; color: white; padding: 12px 24px; border: none; border-radius: 5px; cursor: pointer; font-weight: bold;">
                    Get Started →
                </button>
            </div>
        `;
        modal.style.display = 'block';
    }
}

// Close Modal
function closeModal() {
    const modal = document.getElementById('serviceModal');
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('serviceModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Scroll to contact section
function scrollToContact() {
    closeModal();
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

// Form Submission
function handleFormSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;

    // Validate form
    if (!name || !email || !service || !message) {
        alert('Please fill in all required fields.');
        return;
    }

    // Prepare email
    const subject = `New Service Inquiry: ${service}`;
    const body = `
Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${service}

Message:
${message}
    `.trim();

    // In production, send to backend server
    // For now, create mailto link
    const mailtoLink = `mailto:info@rubyinfinitysolutions.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;

    // Show success message
    alert('Thank you for your inquiry! We will contact you within 24 hours.');
    event.target.reset();
}

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });

    // Close menu when link is clicked
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.style.display = 'none';
        });
    });
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// CTA button functionality
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', function() {
        document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
    });
}

// Pricing button functionality
document.querySelectorAll('.pricing-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        scrollToContact();
    });
});

console.log('Ruby Infinity Solutions - Website Loaded Successfully');
