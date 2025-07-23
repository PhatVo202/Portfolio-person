import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Skills: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation();

    const skillCategories = [
        {
            title: 'Front-End Development',
            skills: [
                { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
                { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
                { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
                { name: 'Redux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
                { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
                { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
                { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' }
            ]
        },
        {
            title: 'Back-End Development',
            skills: [
                { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
                { name: 'NestJS', logo: 'https://nestjs.com/img/logo-small.svg' },
                { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
                { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
                { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' }
            ]
        },
        {
            title: 'Tools',
            skills: [
                { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
                { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
                { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
                { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
                { name: 'Postman', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' }
            ]
        }
    ];

    return (
        <section id="skills" ref={ref} className="py-20 bg-slate-900/50 dark:bg-gray-100/50 relative overflow-hidden transition-colors duration-500">
            {/* Background geometric shapes */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 right-20 w-32 h-32 border border-purple-400 rounded-full"></div>
                <div className="absolute bottom-40 left-20 w-24 h-24 border border-pink-400 rounded-full"></div>
                <div className="absolute top-1/2 right-1/3 w-16 h-16 border border-blue-400 rounded-full"></div>
                <div className="absolute bottom-20 right-1/4 w-20 h-20 border border-cyan-400 rounded-full"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-20'}`}>
                    <h2 className="text-4xl md:text-5xl font-bold text-white dark:text-gray-900 mb-6">
                        My <span className="text-purple-400">Skills</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
                    <p className="text-gray-300 dark:text-gray-600 text-lg max-w-3xl mx-auto">
                        Technologies and tools I use to create amazing digital experiences
                    </p>
                </div>

                <div className="space-y-16">
                    {skillCategories.map((category, categoryIndex) => (
                        <div
                            key={category.title}
                            className={`transition-all duration-1000 ${isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-20'
                                }`}
                            style={{ animationDelay: `${categoryIndex * 300}ms` }}
                        >
                            {/* Category Title */}
                            <div className="mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-300 dark:text-gray-700 mb-2">
                                    {category.title}
                                </h3>
                                <div className="w-16 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"></div>
                            </div>

                            {/* Skills Grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                                {category.skills.map((skill, skillIndex) => (
                                    <div
                                        key={skill.name}
                                        className={`group bg-slate-800/30 dark:bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 dark:border-gray-300/50 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 ${isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-20'
                                            }`}
                                        style={{ animationDelay: `${categoryIndex * 300 + skillIndex * 100}ms` }}
                                    >
                                        <div className="flex flex-col items-center space-y-4">
                                            {/* Logo */}
                                            <div className="w-16 h-16 flex items-center justify-center bg-white rounded-xl p-2 group-hover:scale-110 transition-transform duration-300">
                                                <img
                                                    src={skill.logo}
                                                    alt={skill.name}
                                                    className="w-full h-full object-contain"
                                                    onError={(e) => {
                                                        // Fallback if image fails to load
                                                        e.currentTarget.style.display = 'none';
                                                        e.currentTarget.nextElementSibling!.style.display = 'flex';
                                                    }}
                                                />
                                                <div
                                                    className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg items-center justify-center text-white font-bold text-lg hidden"
                                                >
                                                    {skill.name.charAt(0)}
                                                </div>
                                            </div>

                                            {/* Skill Name */}
                                            <div className="text-center">
                                                <h4 className="text-white dark:text-gray-900 font-medium text-sm group-hover:text-purple-400 transition-colors duration-300">
                                                    {skill.name}
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;