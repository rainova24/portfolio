import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const mailtoLink = `mailto:rainova.rahaniawan@mhs.itenas.ac.id?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'rainova.rahaniawan@mhs.itenas.ac.id',
      href: 'mailto:rainova.rahaniawan@mhs.itenas.ac.id',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bandung, West Java, 40124',
      href: '#',
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/rainova24',
      href: 'https://github.com/rainova24',
      color: 'from-gray-500 to-slate-600'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/rainova-rahaniawan',
      href: 'https://www.linkedin.com/in/rainova-rahaniawan',
      color: 'from-blue-600 to-indigo-600'
    }
  ];

  const quickLinks = [
    { label: 'Download CV', href: '#', icon: ExternalLink },
    { label: 'Portfolio Presentation', href: '#', icon: ExternalLink },
    { label: 'Research Papers', href: '#', icon: ExternalLink },
    { label: 'Recommendations', href: '#', icon: ExternalLink }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to collaborate on innovative projects or discuss opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <a
                      key={index}
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : '_self'}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="glass bg-slate-800/30 p-4 rounded-xl hover:bg-slate-800/50 transition-all duration-300 flex items-center gap-4 group"
                    >
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${contact.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">{contact.label}</div>
                        <div className="text-white font-medium group-hover:text-cyan-400 transition-colors duration-300">
                          {contact.value}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Quick Links</h3>
              <div className="space-y-3">
                {quickLinks.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.href}
                      className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
                    >
                      <IconComponent className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability Status */}
            <div className="glass bg-slate-800/30 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-white mb-3">Current Status</h4>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-medium">Available for opportunities</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Open to internships, research collaborations, speaking engagements, 
                and innovative project partnerships.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="glass bg-slate-800/30 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:outline-none transition-colors duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:outline-none transition-colors duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:outline-none transition-colors duration-300"
                    placeholder="What would you like to discuss?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:outline-none transition-colors duration-300 resize-vertical"
                    placeholder="Tell me about your project, opportunity, or just say hello..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-neon px-6 py-3 rounded-lg font-medium text-white transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Response Time Info */}
            <div className="mt-6 text-center">
              <p className="text-gray-400 text-sm">
                I typically respond within 24 hours. For urgent matters, feel free to reach out directly via 
                <a href="mailto:rainova.rahaniawan@mhs.itenas.ac.id" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"> email</a> or 
                <a href="https://www.linkedin.com/in/rainova-rahaniawan" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"> LinkedIn</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;