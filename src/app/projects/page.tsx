"use client"
import React, { useState } from 'react';
import ProjectCard from '../components/card';

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState('cli');

    const cliProjects = [
        {
            title: 'Simple Calculator',
            Description: 'A simple command line calculator that allow user to perform simple operations like addition, subtraction, multiplication and division!',
            repoLink: 'https://github.com/kulsoomimran/simple-calculator',
            command: 'npx k1901-simple-calculator'
        },

        {
            title: 'Number Guessing Game',
            Description: 'A fun, command-line game that challenges users to guess a randomly generated number from 1-6!',
            repoLink: 'https://github.com/kulsoomimran/number-guessing',
            command: 'npx ki-1901-number-guessing-game'
        },

        {
            title: 'ATM',
            Description: 'A command-line interface ATM that allows users to perform essential banking operations in a simple and efficient manner!',
            repoLink: 'https://github.com/kulsoomimran/cli-atm',
            command: 'npx k1901-cli-atm'
        },

        {
            title: 'Todo List',
            Description: 'An interactive, command-line to-do list application that allows users to efficiently manage tasks, with options to view, add, update or delete tasks!',
            repoLink: 'https://github.com/kulsoomimran/todos-list',
            command: 'npx k1901-todos-list'
        },

        {
            title: 'Currency Converter',
            Description: 'A command line tool that allows users to effortlessly convert amounts between different currencies!',
            repoLink: 'https://github.com/kulsoomimran/currency-converter',
            command: 'npx k1901-currency-converter'
        },

        {
            title: 'Word Counter',
            Description: 'A command line tool that allows users to effortlessly convert amounts between different currencies!',
            repoLink: 'https://github.com/kulsoomimran/currency-converter',
            command: 'npx k1901-currency-converter'
        },

        {
            title: 'Quiz System',
            Description: 'A command line quiz consist of 5 questions about TypeScript and user have to select the most suitable and correct option!',
            repoLink: 'https://github.com/kulsoomimran/Quiz_System',
            command: 'npx k901-quiz-system'
        },

        {
            title: 'Countdown Timer',
            Description: 'A customizable, command-line countdown timer for easy terminal-based time tracking!',
            repoLink: 'https://github.com/kulsoomimran/countdown-timer',
            command: 'npx kulsoomiimran-countdown-timer'
        },
    ];

    const webProjects = [
        {
            title: 'Static Resume',
            Description: "My Static Resume, using HTML and CSS",
            repoLink: 'https://github.com/kulsoomimran/Interactive_Resume_Builder/tree/main/Milestone1-2',
            deploymentLink: 'https://interactive-resume-builderstatic-resume.vercel.app/'
        },

        {
            title: 'The CHARMLY-A Jewelry Website',
            Description: "A stylish jewelry website, The CHARMLY, built with Next.js and Tailwind CSS, featuring reusable components, smooth routing, and a responsive design!",
            repoLink: 'https://github.com/kulsoomimran/Assignment-01',
            deploymentLink: 'https://assignment-01-nu.vercel.app/'
        },

        {
            title: 'Pixel Perfect Page',
            Description: "A pixel-perfect web page based on a Figma design, using Next.Js for the framework and Tailwind.CSS for styling.",
            repoLink: 'https://github.com/kulsoomimran/Pixel-PerfectPage',
            deploymentLink: 'https://pixel-perfect-page-pied.vercel.app/'
        },

    ];

    return (
        <div id='projects' className="max-w-4xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">My Projects</h1>

            <div className="flex space-x-4 mb-6">
                <button
                    onClick={() => setSelectedCategory('cli')}
                    className={`px-4 py-2 rounded ${selectedCategory === 'cli' ? 'bg-blue-950 text-white' : 'bg-gray-200'}`}
                >
                    CLI-Based Projects
                </button>
                <button
                    onClick={() => setSelectedCategory('web')}
                    className={`px-4 py-2 rounded ${selectedCategory === 'web' ? 'bg-blue-950 text-white' : 'bg-gray-200'}`}
                >
                    Web Development Projects
                </button>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                {selectedCategory === 'cli' &&
                    cliProjects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            Description={project.Description}
                            repoLink={project.repoLink}
                            command={project.command}
                        />
                    ))}

                {selectedCategory === 'web' &&
                    webProjects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            Description={project.Description}
                            repoLink={project.repoLink}
                            deploymentLink={project.deploymentLink}
                        />
                    ))}
            </div>
        </div>
    );
};

export default Projects;