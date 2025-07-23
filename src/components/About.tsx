import React from 'react';
import { Code2, BookOpen, Target, Heart, Lightbulb, Rocket } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation();

    const highlights = [
        {
            icon: BookOpen,
            title: 'Fresh Graduate',
            description: 'Recently graduated with strong foundation in computer science',
            color: 'from-blue-400 to-blue-600'
        },
        {
            icon: Heart,
            title: 'Passionate Learner',
            description: 'Always eager to learn new technologies and best practices',
            color: 'from-red-400 to-pink-500'
        },
        {
            icon: Target,
            title: 'Goal-Oriented',
            description: 'Focused on building quality applications and growing as a developer',
            color: 'from-green-400 to-emerald-500'
        },
        {
            icon: Lightbulb,
            title: 'Problem Solver',
            description: 'Love tackling challenges and finding creative solutions',
            color: 'from-yellow-400 to-orange-500'
        }
    ];

    const personalStats = [
        { label: 'Academic Projects', value: '15+', icon: Code2 },
        { label: 'Technologies Learned', value: '10+', icon: Rocket },
        { label: 'Months of Study', value: '48+', icon: BookOpen },
        { label: 'Coding Hours', value: '1000+', icon: Target }
    ];

    return (
        <section id="about" ref={ref} className="py-20 bg-slate-800/50 dark:bg-white/50 relative overflow-hidden transition-colors duration-500">
            {/* Background decorations */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-20 w-40 h-40 border border-purple-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-32 h-32 border border-pink-400 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 border border-blue-400 rounded-full animate-pulse"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-20'}`}>
                    <h2 className="text-4xl md:text-5xl font-bold text-white dark:text-gray-900 mb-6">
                        About <span className="text-purple-400">Me</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left side - Profile */}
                    <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'animate-slideInLeft' : 'opacity-0 -translate-x-20'}`}>
                        <div className="relative max-w-md mx-auto">
                            {/* Profile circle with animated border */}
                            <div className="relative">
                                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 p-1 mx-auto animate-pulse">
                                    <div className="w-full h-full rounded-full bg-slate-800 dark:bg-white flex items-center justify-center relative overflow-hidden">
                                        {/* Animated background pattern */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-pink-900/30 dark:from-purple-100/30 dark:to-pink-100/30"></div>
                                        <div className="relative z-10 text-center">
                                            <Code2 className="w-24 h-24 text-purple-400 mx-auto mb-4" />
                                            <div className="text-white dark:text-gray-900 font-bold text-lg">Fresh Graduate</div>
                                            <div className="text-purple-300 text-sm">Full-Stack Developer</div>
                                        </div>
                                    </div>
                                </div>
                                {/* Floating icons */}
                                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center animate-bounce">
                                    <Rocket className="w-6 h-6 text-white" />
                                </div>
                                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '0.5s' }}>
                                    <Heart className="w-6 h-6 text-white" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Content */}
                    <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'animate-slideInRight' : 'opacity-0 translate-x-20'}`}>
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold text-white dark:text-gray-900 mb-6">
                                Aspiring <span className="text-purple-400">Full-Stack Developer</span>
                            </h3>

                            <p className="text-gray-300 dark:text-gray-600 text-lg leading-relaxed">
                                Hi! I'm a fresh graduate with a passion for creating amazing web applications.
                                While I may be new to the professional world, I bring enthusiasm, dedication,
                                and a strong foundation in modern web technologies.
                            </p>

                            <p className="text-gray-300 dark:text-gray-600 text-lg leading-relaxed">
                                I specialize in React.js, Node.js, and MySQL, and I'm always excited to learn
                                new technologies. My goal is to contribute to meaningful projects while
                                continuously growing as a developer.
                            </p>

                            {/* Personal highlights */}
                            <div className="grid sm:grid-cols-2 gap-4 mt-8">
                                {highlights.map((highlight, index) => (
                                    <div
                                        key={index}
                                        className={`bg-slate-900/50 dark:bg-white/50 rounded-lg p-4 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:scale-105 ${isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-20'
                                            }`}
                                        style={{ animationDelay: `${800 + index * 100}ms` }}
                                    >
                                        <div className="flex items-start space-x-3">
                                            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${highlight.color} flex items-center justify-center flex-shrink-0`}>
                                                <highlight.icon className="w-5 h-5 text-white" />
                                            </div>
                                            <div>
                                                <h4 className="text-white dark:text-gray-900 font-semibold text-sm mb-1">{highlight.title}</h4>
                                                <p className="text-gray-400 dark:text-gray-600 text-xs leading-relaxed">{highlight.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats section */}
                <div className={`mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-20'}`}>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {personalStats.map((stat, index) => (
                            <div
                                key={index}
                                className={`text-center p-6 rounded-lg bg-slate-900/30 dark:bg-white/30 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:scale-105 ${isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-20'
                                    }`}
                                style={{ animationDelay: `${1000 + index * 100}ms` }}
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <stat.icon className="w-6 h-6 text-white" />
                                </div>
                                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                                <div className="text-2xl font-bold text-white dark:text-gray-900 mb-1">{stat.value}</div>
                                <div className="text-sm text-gray-400 dark:text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to action */}
                <div className={`text-center mt-12 transition-all duration-1000 delay-900 ${isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-20'}`}>
                    <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-100/50 dark:to-pink-100/50 rounded-2xl p-8 border border-purple-500/20">
                        <h4 className="text-xl font-bold text-white dark:text-gray-900 mb-3">Ready to Start My Journey</h4>
                        <p className="text-gray-300 dark:text-gray-600 mb-6 max-w-2xl mx-auto">
                            I'm excited to bring fresh perspectives, learn from experienced developers,
                            and contribute to innovative projects. Let's build something amazing together!
                        </p>
                        <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                            Let's Connect
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;