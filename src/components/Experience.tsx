import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Experience: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation();

    const experiences = [
        {
            title: 'Senior Full-Stack Developer',
            company: 'Tech Innovation Corp',
            location: 'Remote',
            period: '2023 - Present',
            description: 'Leading full-stack development projects using React.js, NestJS, and MySQL. Mentoring junior developers and implementing best practices for code quality and performance.',
            achievements: [
                'Increased application performance by 40%',
                'Led a team of 5 developers',
                'Implemented CI/CD pipeline'
            ],
            technologies: ['React.js', 'NestJS', 'MySQL', 'Docker', 'AWS']
        },
        {
            title: 'Full-Stack Developer',
            company: 'Digital Solutions Ltd',
            location: 'New York, NY',
            period: '2022 - 2023',
            description: 'Developed and maintained multiple web applications using modern technologies. Collaborated with cross-functional teams to deliver high-quality software solutions.',
            achievements: [
                'Built 10+ production applications',
                'Reduced bug reports by 60%',
                'Implemented automated testing'
            ],
            technologies: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL']
        },
        {
            title: 'Frontend Developer',
            company: 'Creative Web Agency',
            location: 'San Francisco, CA',
            period: '2021 - 2022',
            description: 'Focused on creating responsive and interactive user interfaces. Worked closely with designers to implement pixel-perfect designs and smooth user experiences.',
            achievements: [
                'Improved user engagement by 35%',
                'Optimized loading times by 50%',
                'Created reusable component library'
            ],
            technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Redux']
        }
    ];

    return (
        <section id="experience" ref={ref} className="py-20 bg-slate-900/50 dark:bg-gray-100/50 transition-colors duration-500">
            <div className="container mx-auto px-6">
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-20'}`}>
                    <h2 className="text-4xl md:text-5xl font-bold text-white dark:text-gray-900 mb-6">
                        My <span className="text-purple-400">Experience</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
                    <p className="text-gray-300 dark:text-gray-600 text-lg max-w-3xl mx-auto">
                        My professional journey in software development
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 to-pink-400"></div>

                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className={`relative flex items-start mb-12 transition-all duration-1000 ${isVisible ? 'animate-slideInRight' : 'opacity-0 translate-x-20'
                                    }`}
                                style={{ animationDelay: `${index * 300}ms` }}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-6 w-4 h-4 bg-purple-400 rounded-full border-4 border-slate-900 z-10"></div>

                                {/* Content */}
                                <div className="ml-20 bg-slate-800/50 dark:bg-white/60 rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:scale-105 w-full">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                                        <h3 className="text-xl font-bold text-white dark:text-gray-900 mb-2 sm:mb-0">
                                            {exp.title}
                                        </h3>
                                        <div className="flex items-center space-x-2 text-purple-400">
                                            <Calendar className="w-4 h-4" />
                                            <span className="text-sm">{exp.period}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4 mb-4">
                                        <h4 className="text-lg text-purple-400 font-semibold">{exp.company}</h4>
                                        <div className="flex items-center space-x-2 text-gray-400">
                                            <MapPin className="w-4 h-4" />
                                            <span className="text-sm">{exp.location}</span>
                                        </div>
                                    </div>

                                    <p className="text-gray-300 dark:text-gray-600 mb-4 leading-relaxed">
                                        {exp.description}
                                    </p>

                                    <div className="mb-4">
                                        <h5 className="text-white dark:text-gray-900 font-semibold mb-2 flex items-center">
                                            <Award className="w-4 h-4 mr-2 text-purple-400" />
                                            Key Achievements
                                        </h5>
                                        <ul className="space-y-1">
                                            {exp.achievements.map((achievement, achievementIndex) => (
                                                <li key={achievementIndex} className="text-gray-300 dark:text-gray-600 text-sm flex items-start">
                                                    <span className="text-purple-400 mr-2">•</span>
                                                    {achievement}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="text-xs px-2 py-1 bg-slate-700/50 dark:bg-gray-200/50 text-gray-300 dark:text-gray-700 rounded-full border border-purple-500/20"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;