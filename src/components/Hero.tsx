import React from 'react';
import { ArrowDown, Facebook, Github, Mail } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { TypeAnimation } from 'react-type-animation';

const Hero: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation();
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '../../public/CV_VoLeTruongPhat_FrontEnd.pdf'; // file đặt trong thư mục public
        link.download = 'CV_VoLeTruongPhat_FrontEnd.pdf';
        link.click();
    };

    return (
        <>
            <section id="home" ref={ref} className="min-h-screen flex items-center justify-center relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-slate-900/50 to-blue-900/20 dark:from-purple-100/20 dark:via-gray-100/50 dark:to-blue-100/20" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse" />

                <div className="container mx-auto px-6 text-center relative z-10">
                    <div className={`transition-all duration-1000 ${isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-20'}`}>
                        <div className='flex justify-center items-center'><img className="object-cover object-center rounded-full h-60 w-60"
                            src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2832&amp;q=80"
                            alt="nature image" /></div>

                        <h2 >
                            <span className="text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6 animate-glow">I'm a{' '}</span>

                            <TypeAnimation
                                sequence={[
                                    'Fullstack Developer', 3000,
                                    'Frontend Developer', 3000,
                                    'Backend Developer', 3000,
                                ]}
                                wrapper="span"
                                cursor={true}
                                repeat={Infinity}
                                className='text-4xl md:text-6xl font-bold text-white mb-6 animate-glow'
                            />
                        </h2>

                        <p className="text-xl md:text-2xl text-gray-300 dark:text-gray-600 mb-8 max-w-3xl mx-auto animate-slideInUp">
                            Crafting exceptional digital experiences with modern technologies like React.js, NestJS, Node.js, and MySQL
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
                            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                                <div className="flex items-center space-x-2">
                                    <Mail className="w-5 h-5" />
                                    <span>Download CV</span>
                                </div>
                            </button>

                            <button className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-full font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105">
                                View Projects
                            </button>
                        </div>

                        <div className="flex items-center justify-center space-x-6">
                            <a href="https://github.com/PhatVo202" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110">
                                <Github className="w-6 h-6" />
                            </a>
                            <a href="https://www.facebook.com/phatkun1103/" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110">
                                <Facebook className="w-6 h-6" />
                            </a>
                            <a href="mailto:9a10voletruongphat@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110">
                                <Mail className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <ArrowDown className="w-6 h-6 text-purple-400" />
                </div>
            </section>
        </>

    );
};

export default Hero
