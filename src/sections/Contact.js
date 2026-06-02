import { useState } from 'react';
import { toast } from 'react-toastify';
import './Contact.css';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: 'f0f6cea6-3cbf-41a5-a454-141e8f4e102e',
          ...form,
        }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Message sent! I'll get back to you soon.");
        setForm({ name: '', email: '', message: '' });
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch {
      toast.error('Network error. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-header">
          <span className="section-number">// 04</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project in mind, an opportunity to share, or just want to say hello?
            My inbox is always open.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="contact-info-heading">Let's Connect</h3>
            <p className="contact-info-body">
              Whether you're looking to collaborate on a project, discuss a role, or simply
              explore ideas — I'd love to hear from you. I typically respond within 24 hours.
            </p>

            <dl className="contact-details">
              <div className="contact-detail">
                <dt>Location</dt>
                <dd>Ontario, Canada</dd>
              </div>
              <div className="contact-detail">
                <dt>Availability</dt>
                <dd className="dd-green">Open to opportunities</dd>
              </div>
            </dl>

            <div className="contact-socials">
              <a href="https://github.com/Girujan1998" className="social-btn" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/girujan/" className="social-btn" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                className="form-input"
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange}
                required
                autoComplete="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                className="form-input"
                placeholder="john@example.com"
                value={form.email}
                onChange={handleChange}
                required
                autoComplete="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-input form-textarea"
                placeholder="Tell me what you're working on..."
                value={form.message}
                onChange={handleChange}
                required
                rows={6}
              />
            </div>

            <button type="submit" className="btn btn-primary form-submit" disabled={submitting}>
              {submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
