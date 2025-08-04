import { useState } from 'react'
import './App.css'

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const faqData = [
    {
      question: "What types of server hosting solutions do you offer?",
      answer: "We offer a comprehensive range of hosting solutions including dedicated servers, virtual private servers (VPS), cloud hosting, and managed hosting services. Our servers are optimized for performance, security, and scalability to meet various business requirements."
    },
    {
      question: "How quickly can you set up a new server for my business?",
      answer: "Our standard server setup time is 24-48 hours for most configurations. For urgent requests, we offer expedited setup within 4-6 hours. The exact timeline depends on your specific requirements and server specifications."
    },
    {
      question: "Do you provide 24/7 technical support for 1C services?",
      answer: "Yes, we provide round-the-clock technical support for all our 1C services. Our team of certified 1C specialists is available 24/7 to handle any issues, updates, or questions you may have about your 1C system."
    },
    {
      question: "What security measures do you implement for server hosting?",
      answer: "We implement enterprise-grade security measures including DDoS protection, regular security updates, firewall configuration, SSL certificates, daily backups, and 24/7 monitoring. All data centers are ISO 27001 certified for information security management."
    },
    {
      question: "Can you help migrate my existing 1C system to a new server?",
      answer: "Absolutely! We specialize in seamless 1C system migrations. Our process includes pre-migration assessment, data backup, system transfer, testing, and post-migration support. We ensure zero downtime during the migration process."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', phone: '', email: '' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span>NorthWind</span>
          </div>
          <div className="nav-links">
            <button onClick={() => scrollToSection('main')} className="nav-link">Home</button>
            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
            <button onClick={() => scrollToSection('services')} className="nav-link">Services</button>
            <button onClick={() => scrollToSection('faq')} className="nav-link">FAQ</button>
            <button onClick={() => scrollToSection('contacts')} className="nav-link">Contact</button>
          </div>
        </div>
      </nav>

      <main id="main" className="main-section">
        <div className="container">
          <h1>Welcome to NorthWind</h1>
          <p>This is the main section of our website.</p>
        </div>
      </main>
      
      <section id="about" className="about-section">
        <div className="container">
          <h2>About Us</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                We are a passionate team dedicated to creating innovative solutions 
                that make a difference in people's lives. Our mission is to deliver 
                exceptional experiences through cutting-edge technology and creative design.
              </p>
              <p>
                Founded with a vision to transform the digital landscape, we combine 
                expertise, creativity, and dedication to bring your ideas to life.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat-item">
                <h3>5+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat-item">
                <h3>100+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat-item">
                <h3>50+</h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services-section">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <button className="service-button server-rent">
              <h3>Server Rent</h3>
              <p>Reliable hosting solutions for your business needs</p>
            </button>
            <button className="service-button onec-service">
              <h3>1C Service</h3>
              <p>Professional 1C development and support services</p>
            </button>
          </div>
        </div>
      </section>

      <section id="faq" className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-container">
            {faqData.map((faq, index) => (
              <div key={index} className="faq-item">
                <button 
                  className={`faq-question ${openFaq === index ? 'active' : ''}`}
                  onClick={() => toggleFaq(index)}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">{openFaq === index ? '−' : '+'}</span>
                </button>
                <div className={`faq-answer ${openFaq === index ? 'active' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="contacts-section">
        <div className="container">
          <h2>Contact Us</h2>
          <div className="contacts-grid">
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <h3>Email</h3>
              <p>info@northwind.com</p>
              <a href="mailto:info@northwind.com" className="contact-link">Send Email</a>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <h3>Phone</h3>
              <p>+1 (555) 123-4567</p>
              <a href="tel:+15551234567" className="contact-link">Call Now</a>
            </div>
            <div className="contact-item">
              <div className="contact-icon">💬</div>
              <h3>Telegram</h3>
              <p>@northwind_support</p>
              <a href="https://t.me/northwind_support" target="_blank" rel="noopener noreferrer" className="contact-link">Message Us</a>
            </div>
          </div>
          
          <div className="contact-form-container">
            <h3>Send us a Message</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Your Phone"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  required
                />
              </div>
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
