"use client"
import React, { useState } from 'react';
import ProjectCard from '../components/card';

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState('cli');

    const cliProjects = [
        {
            title: 'Simple Calculator',
            Description: 'A simple command line calculator built with TypeScript that allow user to perform simple operations like addition, subtraction, multiplication and division!',
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
            Description: 'A command-line interface ATM built with TypeScript that allows users to perform essential banking operations in a simple and efficient manner!',
            repoLink: 'https://github.com/kulsoomimran/cli-atm',
            command: 'npx k1901-cli-atm'
        },

        {
            title: 'Todo List',
            Description: 'An interactive, command-line to-do list application built with TypeScript that allows users to efficiently manage tasks, with options to view, add, update or delete tasks!',
            repoLink: 'https://github.com/kulsoomimran/todos-list',
            command: 'npx k1901-todos-list'
        },

        {
            title: 'Currency Converter',
            Description: 'A command line tool built with TypeScript that allows users to effortlessly convert amounts between different currencies!',
            repoLink: 'https://github.com/kulsoomimran/currency-converter',
            command: 'npx k1901-currency-converter'
        },

        {
            title: 'Word Counter',
            Description: 'A command line tool built with TypeScript that allows users to effortlessly convert amounts between different currencies!',
            repoLink: 'https://github.com/kulsoomimran/currency-converter',
            command: 'npx k1901-currency-converter'
        },

        {
            title: 'Quiz System',
            Description: 'A command line quiz built with TypeScript consist of 5 questions about TypeScript and user have to select the most suitable and correct option!',
            repoLink: 'https://github.com/kulsoomimran/Quiz_System',
            command: 'npx k901-quiz-system'
        },

        {
            title: 'Countdown Timer',
            Description: 'A customizable, command-line countdown timer built with TypeScript for easy terminal-based time tracking!',
            repoLink: 'https://github.com/kulsoomimran/countdown-timer',
            command: 'npx kulsoomiimran-countdown-timer'
        },
    ];

    const webProjects = [
        {
            title: 'Password Generator',
            Description: 'A simple password generator app built with Python, UV and Streamlit, where user can generate a random password of desired length and complexity!',
            repoLink: 'https://github.com/kulsoomimran/password-generator.git',
            deploymentLink: 'https://python-password-generator.streamlit.app/'
        },
        {
            title: 'Unit Converter',
            Description: 'A simple unit converter app built with Python, UV and Streamlit, where user can convert units of length, temperature, and weight!!',
            repoLink: 'https://github.com/kulsoomimran/unit-converter.git',
            deploymentLink: 'https://unit-converter-by-kulsoomimran.streamlit.app/'
        },
        {
            title: 'Countdown Timer',
            Description: " A simple countdown timer application, built with Next.js and Tailwind CSS where user can set a time duration, start, pause, and reset the timer and display the remaining time",
            repoLink: 'https://github.com/kulsoomimran/CountdownTimer',
            deploymentLink: 'https://vercel.com/kulsoom-imrans-projects/countdown-timer'
        },
        {
            title: 'The CHARMLY-A Jewelry Website',
            Description: "A stylish jewelry website, The CHARMLY, built with Next.js and Tailwind CSS, featuring reusable components, smooth routing, and a responsive design!",
            repoLink: 'https://github.com/kulsoomimran/Assignment-01',
            deploymentLink: 'https://assignment-01-nu.vercel.app/'
        },

        {
            title: 'My Blog Web',
            Description: "A dynamic blog, built with Next.js and Tailwind CSS, with multiple posts using Next.js routing!!",
            repoLink: 'https://github.com/kulsoomimran/blog-web',
            deploymentLink: 'https://blog-website-mu-three.vercel.app/'
        },

        {
            title: 'Nike Clone',
            Description: "A basic e-commerce site, a Nike clone, built with Next.js and Tailwind CSS consisting of Login, Sign-in/Sign-up, Products, Products detail, Carrt and many other pages!!",
            repoLink: 'https://github.com/kulsoomimran/UI-UX-Hackathon',
            deploymentLink: 'https://nextjs-hackathon-sable.vercel.app/'
        },

        {
            title: 'Pixel Perfect',
            Description: "A Pixel Perfect website, using the provided Figma design, built with Next.js and Tailwind CSS, !",
            repoLink: 'https://github.com/kulsoomimran/Pixel-PerfectPage',
            deploymentLink: 'https://pixel-perfect-page-pied.vercel.app/'
        },

        {
            title: 'Pixel Perfect Page 2',
            Description: "A Pixel Perfect website, using the provided Figma design, built with Next.js and Tailwind CSS!",
            repoLink: 'https://github.com/kulsoomimran/PixelPerfectPage02',
            deploymentLink: 'https://pixel-perfect-page02.vercel.app/'
        },
        {
            title: 'Dynamic Resume Builder',
            Description: "A dynamic resume builder,using HTML, CSS, and Typescript(for functionality) where user puts their input and resume genereated. users can directly edit the resume and the changes are reflected immediately without reloading the page. User can also download the resume as a PDF!",
            repoLink: 'https://github.com/kulsoomimran/Interactive_Resume_Builder/tree/main/Milestone05',
            deploymentLink: 'https://hackathon1-milestone05.vercel.app/'
        },
        {
            title: 'Static Resume',
            Description: "My Static Resume, using HTML and CSS",
            repoLink: 'https://github.com/kulsoomimran/Interactive_Resume_Builder/tree/main/Milestone1',
            deploymentLink: 'https://static-resume-builder-psi-ruddy.vercel.app/'
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