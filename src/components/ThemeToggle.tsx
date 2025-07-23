import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
    const { isDarkMode, toggleDarkMode } = useTheme();

    return (
        <button
            onClick={toggleDarkMode}
            className="relative w-14 h-7 bg-slate-700 dark:bg-slate-600 rounded-full p-1 transition-all duration-300 hover:bg-slate-600 dark:hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            aria-label="Toggle dark mode"
        >
            {/* Toggle background */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 dark:opacity-100 transition-opacity duration-300" />

            {/* Toggle slider */}
            <div className={`relative w-5 h-5 bg-white rounded-full shadow-lg transform transition-all duration-300 flex items-center justify-center ${isDarkMode ? 'translate-x-7' : 'translate-x-0'
                }`}>
                {/* Icons */}
                <Sun className={`w-3 h-3 text-yellow-500 absolute transition-all duration-300 ${isDarkMode ? 'opacity-0 rotate-180 scale-0' : 'opacity-100 rotate-0 scale-100'
                    }`} />
                <Moon className={`w-3 h-3 text-slate-700 absolute transition-all duration-300 ${isDarkMode ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-0'
                    }`} />
            </div>
        </button>
    );
};

export default ThemeToggle;