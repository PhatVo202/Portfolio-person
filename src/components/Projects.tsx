import React from 'react';
import { ExternalLink, Github, Database, Smartphone } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import imgShoppe from "/images/imgShoppe.png"
import imgMovie from "/images/imgMovie.jpg"
import imgJira from "/images/imgJira.png"
import imgPrinterest from "/images/imgPrinterest.jpg"

const Projects: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation();

    const projects = [
        {
            title: 'Shopee Clone - E-Commerce Web App',
            description: 'This is a project to clone the user page of the e-commerce platform Shopee',
            image: imgShoppe,
            technologies: ['ReactJS', ' React Query', 'Typescript', 'Tailwindcss', 'React Router', 'React Hook Form', ' Yup'],
            category: 'Frontend',
            icon: Smartphone,
            links: {
                demo: 'https://shopee-clone-ecommerce.surge.sh',
                github: 'https://github.com/PhatVo202/ShopeeClone'
            }
        },
        {
            title: 'Movie Ticket Booking – Web Application',
            description: 'Project Our project aim to develop an online platform for booking movie tickets. User can browse through a variety of movies, check showtimes, select seats, and securely purchase tickets',
            image: imgMovie,
            technologies: ['ReactJS', 'React Router', 'Redux', 'Antd', 'BootStrap '],
            category: 'Frontend',
            icon: Smartphone,
            links: {
                demo: 'https://movie-booking-git-main-phatvo202s-projects.vercel.app/',
                github: 'https://github.com/PhatVo202/Capstone-reactjs-bc36.git'
            }
        },
        {
            title: 'Jira Clone',
            description: 'This is a bug, issue and project management and tracking application, developed to make this process easier for any organization',
            image: imgJira,
            technologies: ['ReactJS', 'React Router', 'Redux', 'Redux thunk', 'BootStrap', 'Antd'],
            category: 'Frontend',
            icon: Smartphone,
            links: {
                demo: 'https://jira-project-roan.vercel.app',
                github: 'https://github.com/PhatVo202/Jira_project'
            }
        },
        // {
        //     title: 'Pinterest Clone Backend – RESTful API',
        //     description: 'A RESTful API for an image-sharing platform inspired by Pinterest. It supports user authentication, image upload, post management, and commenting features.',
        //     image: imgPrinterest,
        //     technologies: ['NodeJS', 'ExpressJS', 'Mysql', 'Prisma', 'Cloudinary', "JWT"],
        //     category: 'Backend',
        //     icon: Database,
        //     links: {
        //         demo: '#',
        //         github: 'https://github.com/PhatVo202/BE_Express_ORM'
        //     }
        // },
        // {
        //     title: 'Inventory Management System',
        //     description: 'Complete inventory management solution with barcode scanning, stock tracking, and automated reporting features.',
        //     image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
        //     technologies: ['NestJS', 'PostgreSQL', 'React.js', 'TypeScript'],
        //     category: 'Full-Stack',
        //     icon: Database,
        //     links: {
        //         demo: '#',
        //         github: '#'
        //     }
        // },
        // {
        //     title: 'Weather Forecast App',
        //     description: 'Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
        //     image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
        //     technologies: ['React.js', 'API Integration', 'Tailwind CSS', 'Charts'],
        //     category: 'Frontend',
        //     icon: Smartphone,
        //     links: {
        //         demo: '#',
        //         github: '#'
        //     }
        // }
    ];

    return (
        <section id="projects" ref={ref} className="py-20 bg-slate-800/50 dark:bg-white/50 transition-colors duration-500">
            <div className="container mx-auto px-6">
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-20'}`}>
                    <h2 className="text-4xl md:text-5xl font-bold text-white dark:text-gray-900 mb-6">
                        My <span className="text-purple-400">Projects</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
                    <p className="text-gray-300 dark:text-gray-600 text-lg max-w-3xl mx-auto">
                        Here are some of my recent projects that showcase my skills and experience
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`group bg-slate-900/50 dark:bg-white/60 rounded-lg overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-20'
                                }`}
                            style={{ animationDelay: `${index * 200}ms` }}
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute top-4 right-4">
                                    <div className="bg-purple-500/20 backdrop-blur-sm rounded-full p-2">
                                        <project.icon className="w-5 h-5 text-purple-400" />
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-xl font-bold text-white dark:text-gray-900 group-hover:text-purple-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <span className="text-xs px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full">
                                        {project.category}
                                    </span>
                                </div>

                                <p className="text-gray-300 dark:text-gray-600 text-sm mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="text-xs px-2 py-1 bg-slate-700/50 dark:bg-gray-200/50 text-gray-300 dark:text-gray-700 rounded-full border border-purple-500/20"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center space-x-4">
                                    <a
                                        href={project.links.demo}
                                        className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        <span className="text-sm">Live Demo</span>
                                    </a>
                                    <a
                                        href={project.links.github}
                                        className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                                    >
                                        <Github className="w-4 h-4" />
                                        <span className="text-sm">Code</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;