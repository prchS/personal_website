"use client";
import { useState } from 'react';
import { Github, Linkedin, Twitter, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateForm = () => {
    if (!formData.name.trim()) {
      setErrorMessage('Name is required');
      return false;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage('Please enter a valid email address');
      return false;
    }
    if (formData.message.trim().length < 5) {
      setErrorMessage('Message must be at least 5 characters');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    
    if (!validateForm()) {
      setStatus('error');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  return (
    <motion.section
      {...{
        id: "contact",
        className: "max-w-2xl mx-auto py-24 px-6"
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <h2 className="text-3xl font-heading font-bold mb-10 text-center">Contact</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 mb-8">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
          disabled={status === 'loading'}
          className="bg-transparent border-0 border-b border-divider focus:border-accent outline-none py-3 px-2 text-primary placeholder-secondary transition-colors disabled:opacity-50"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          disabled={status === 'loading'}
          className="bg-transparent border-0 border-b border-divider focus:border-accent outline-none py-3 px-2 text-primary placeholder-secondary transition-colors disabled:opacity-50"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          rows={4}
          required
          disabled={status === 'loading'}
          className="bg-transparent border-0 border-b border-divider focus:border-accent outline-none py-3 px-2 text-primary placeholder-secondary transition-colors resize-none disabled:opacity-50"
        />
        
        {/* Status Messages */}
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            {...{ className: "flex items-center gap-2 text-accent" }}
          >
            <CheckCircle2 size={20} />
            <span>Message sent successfully! I'll get back to you soon.</span>
          </motion.div>
        )}
        
        {status === 'error' && errorMessage && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            {...{ className: "flex items-center gap-2 text-red-400" }}
          >
            <AlertCircle size={20} />
            <span>{errorMessage}</span>
          </motion.div>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          className="self-end border border-accent text-accent px-8 py-2 rounded-full font-medium hover:bg-accent hover:text-background transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {status === 'loading' ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </button>
      </form>
      <div className="flex justify-end gap-8 mt-2 w-full pr-11">
        <a href="https://github.com/prchS" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent2 transition-colors duration-200">
          <Github size={28} />
        </a>
        <a href="https://www.linkedin.com/in/suhaas-parcha-0401aa150/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent2 transition-colors duration-200">
          <Linkedin size={28} />
        </a>
      </div>
    </motion.section>
  );
} 