import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const contactInfo = [
        {
            icon: Mail,
            label: 'Email',
            value: 'contact@developer.com',
            href: 'mailto:contact@developer.com'
        },
        {
            icon: Phone,
            label: 'Phone',
            value: '+1 (555) 123-4567',
            href: 'tel:+15551234567'
        },
        {
            icon: MapPin,
            label: 'Location',
            value: 'New York, NY',
            href: '#'
        }
    ];

    const socialLinks = [
        { icon: Github, href: '#', label: 'GitHub' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Twitter, href: '#', label: 'Twitter' }
    ];

    return (
        <section id="contact" ref={ref} className="py-20 bg-slate-800/50 dark:bg-white/50 transition-colors duration-500">
            <div className="container mx-auto px-6">
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-20'}`}>
                    <h2 className="text-4xl md:text-5xl font-bold text-white dark:text-gray-900 mb-6">
                        Get In <span className="text-purple-400">Touch</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
                    <p className="text-gray-300 dark:text-gray-600 text-lg max-w-3xl mx-auto">
                        Let's discuss your project and bring your ideas to life
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'animate-slideInLeft' : 'opacity-0 -translate-x-20'}`}>
                        <h3 className="text-2xl font-bold text-white dark:text-gray-900 mb-8">
                            Let's start a conversation
                        </h3>

                        <div className="space-y-6 mb-8">
                            {contactInfo.map((info, index) => (
                                <a
                                    key={index}
                                    href={info.href}
                                    className="flex items-center space-x-4 p-4 rounded-lg bg-slate-900/50 dark:bg-white/60 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:scale-105 group"
                                >
                                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <info.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 dark:text-gray-600 text-sm">{info.label}</p>
                                        <p className="text-white dark:text-gray-900 font-medium">{info.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        <div className="flex items-center space-x-4">
                            <p className="text-gray-300 dark:text-gray-600">Follow me:</p>
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="w-10 h-10 bg-slate-900/50 dark:bg-white/60 rounded-full flex items-center justify-center border border-purple-500/20 hover:border-purple-500/40 hover:bg-purple-500/20 transition-all duration-300 transform hover:scale-110"
                                    title={social.label}
                                >
                                    <social.icon className="w-5 h-5 text-purple-400" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'animate-slideInRight' : 'opacity-0 translate-x-20'}`}>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 dark:text-gray-700 mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-slate-900/50 dark:bg-white/60 border border-purple-500/20 rounded-lg text-white dark:text-gray-900 placeholder-gray-400 dark:placeholder-gray-500 focus:border-purple-500/40 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                                        placeholder="Your name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 dark:text-gray-700 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-slate-900/50 dark:bg-white/60 border border-purple-500/20 rounded-lg text-white dark:text-gray-900 placeholder-gray-400 dark:placeholder-gray-500 focus:border-purple-500/40 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                                        placeholder="your@email.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 dark:text-gray-700 mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-slate-900/50 dark:bg-white/60 border border-purple-500/20 rounded-lg text-white dark:text-gray-900 placeholder-gray-400 dark:placeholder-gray-500 focus:border-purple-500/40 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                                    placeholder="Project discussion"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 dark:text-gray-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    className="w-full px-4 py-3 bg-slate-900/50 dark:bg-white/60 border border-purple-500/20 rounded-lg text-white dark:text-gray-900 placeholder-gray-400 dark:placeholder-gray-500 focus:border-purple-500/40 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                                    placeholder="Tell me about your project..."
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                            >
                                <Send className="w-5 h-5" />
                                <span>Send Message</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;