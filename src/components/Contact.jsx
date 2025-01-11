import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Phone, Send } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_PUBLIC_KEY);    
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }
    )
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
      setLoading(false);
    });
  };
  {/* Update button and input styles */}
const buttonClasses = "w-full py-3 bg-gradient-to-r from-emerald-500 to-emerald-700 rounded-lg font-semibold flex items-center justify-center gap-2 hover:from-emerald-600 hover:to-emerald-800";
const inputClasses = "w-full p-3 bg-gray-900 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition-all text-white";

  return (
    <motion.section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center py-20 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold mb-12 gradient-text">Get in Touch</h2>
      
      <div className="w-full max-w-4xl flex flex-col md:flex-row gap-8">
        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="flex-1 glass-effect p-8 rounded-xl space-y-6"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <label className="block text-sm font-semibold mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2" htmlFor="subject">Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2" htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              rows="4"
              required
            />
          </div>
          <motion.button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold flex items-center justify-center gap-2"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {loading ? 'Sending...' : (
              <>
                <Send className="w-5 h-5" />
                Send Message
              </>
            )}
          </motion.button>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          className="flex-1 glass-effect p-8 rounded-xl"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold mb-6 gradient-text">Contact Information</h3>
          <div className="space-y-6">
            <a
              href="mailto:avinashsrivastav196@gmail.com"
              className="flex items-center gap-4 text-gray-300 hover:text-blue-500 transition-colors"
            >
              <Mail className="w-6 h-6" />
              <span>avinashsrivastav196@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/avinash-srivastav-bcs21"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-gray-300 hover:text-blue-500 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
              <span>LinkedIn Profile</span>
            </a>
            <div className="flex items-center gap-4 text-gray-300">
              <Phone className="w-6 h-6" />
              <span>+91 9118182244</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;