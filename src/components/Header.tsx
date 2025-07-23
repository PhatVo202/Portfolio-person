

import React from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
    activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
    };

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'experience', label: 'Experience' },
        { id: 'contact', label: 'Contact' }
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 dark:bg-white/90 backdrop-blur-md border-b border-purple-500/20 dark:border-gray-200/20 transition-colors duration-300">
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 animate-fadeInLeft">
                        <Code2 className="w-8 h-8 text-purple-400" />
                        <span className="text-2xl font-bold text-white dark:text-gray-900">DevPortfolio</span>
                    </div>

                    {/* Desktop Navigation & Theme Toggle */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`text-sm font-medium transition-colors duration-300 hover:text-purple-400 ${activeSection === item.id ? 'text-purple-400' : 'text-gray-300 dark:text-gray-600'
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                        <ThemeToggle />
                    </div>

                    {/* Mobile Menu Button & Theme Toggle */}
                    <div className="md:hidden flex items-center space-x-4">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white dark:text-gray-900 hover:text-purple-400 transition-colors"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 animate-fadeInDown">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`block w-full text-left py-2 px-4 text-sm font-medium transition-colors duration-300 hover:text-purple-400 hover:bg-purple-900/20 dark:hover:bg-purple-100/20 rounded ${activeSection === item.id ? 'text-purple-400' : 'text-gray-300 dark:text-gray-600'
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;