import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import gmail from '../assets/gmail.png';
import linkedin from '../assets/linkedin.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false); // Loading state

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_PUBLIC_KEY);    
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true

    emailjs.send(import.meta.env.VITE_SERVICE_ID , import.meta.env.VITE_TEMPLATE_ID, {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    })
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    })
    .catch((err) => {
      console.error('FAILED...', err);
      alert('Failed to send message. Please try again later.');
    })
    .finally(() => {
      setLoading(false); // Reset loading state
    });
  };

  return (
    <div id="contact" className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-white">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="subject">Subject</label>
          <input
            type="text"
            name="subject"
            id="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows="4"
            required
          />
        </div>
        <button 
          type="submit" 
          className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`} 
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {/* Social Links and Contact Info */}
      <div className="flex flex-col items-center mt-6">
        <div className="flex items-center justify-center space-x-4 mb-2">
          <a 
            href="https://www.linkedin.com/in/avinash-srivastav-bcs21" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img 
              src={linkedin} 
              alt="LinkedIn"
              className="w-10 h-10 cursor-pointer hover:scale-105 transition-transform duration-200"
            />
          </a>
          <a 
            href="mailto:avinashsrivastav196@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img 
              src={gmail} 
              alt="Gmail"
              className="w-10 h-10 cursor-pointer hover:scale-105 transition-transform duration-200"
            />
          </a>
        </div>
        <span className="text-gray-700">+91 9118182244</span> {/* Phone number */}
      </div>
    </div>
  );
};

export default Contact;
