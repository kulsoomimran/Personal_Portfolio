"use client";
import React, { useState } from "react";
import ProjectCard from "../components/card";
import { motion } from "framer-motion";

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState("cli");

    const cliProjects = [
        {
            title: "Library Manager",
            description:
                "A simple command line tool allows users to manage a personal library of books by adding, updating, deleting, searching, and viewing statistics about their reading progress.",
            repoLink: "https://github.com/kulsoomimran/library_manager",
            imageSrc: "/libraryManager.png",
            techStack: ["Python"],
        },
        {
            title: "Simple Calculator",
            description:
                "A simple command line calculator that allows user to perform simple operations like addition, subtraction, multiplication and division!",
            repoLink: "https://github.com/kulsoomimran/simple-calculator",
            imageSrc: "/simpleCalculator.jpg",
            techStack: ["TypeScript"],
        },
        {
            title: "Number Guessing Game",
            description:
                "A fun, command-line game that challenges users to guess a randomly generated number from 1-6!",
            repoLink: "https://github.com/kulsoomimran/number-guessing",
            imageSrc: "/numberGuessingGame.png",
            techStack: ["TypeScript"],
        },
        {
            title: "ATM",
            description:
                "A command-line interface ATM that allows users to perform essential banking operations in a simple and efficient manner!",
            repoLink: "https://github.com/kulsoomimran/cli-atm",
            imageSrc: "/atm.jpg",
            techStack: ["TypeScript"],
        },
        {
            title: "Todo List",
            description:
                "An interactive, command-line to-do list application that allows users to efficiently manage tasks, with options to view, add, update or delete tasks!",
            repoLink: "https://github.com/kulsoomimran/todos-list",
            imageSrc: '/todoList.png',
            techStack: ["TypeScript"],
        },
        {
            title: "Currency Converter",
            description:
                "A command line tool that allows users to effortlessly convert amounts between different currencies!",
            repoLink: "https://github.com/kulsoomimran/currency-converter",
            imageSrc: "/currencyConvertor.png",
            techStack: ["TypeScript"],
        },
        {
            title: "Word Counter",
            description:
                "A command line tool that counts words in a given text input!",
            repoLink: "https://github.com/kulsoomimran/word-counter",
            imageSrc: "/wordCounter.jpeg",
            techStack: ["TypeScript"],
        },
        {
            title: "Quiz System",
            description:
                "A command line quiz consisting of 5 questions about TypeScript and user have to select the most suitable and correct option!",
            repoLink: "https://github.com/kulsoomimran/Quiz_System",
            imageSrc: "/quiz.jpg",
            techStack: ["TypeScript"],
        },
        {
            title: "Countdown Timer",
            description:
                "A customizable, command-line countdown timer for easy terminal-based time tracking!",
            repoLink: "https://github.com/kulsoomimran/countdown-timer",
            imageSrc: "/countdownTimer.png",
            techStack: ["TypeScript"],
        },
    ];

    const webProjects = [
        {
            title: "Password Strength Meter",
            description:
                "A web app that evaluates the strength of a password in real-time and provides feedback and suggestions to improve it, also generates strong, secure passwords for users.",
            repoLink: "https://github.com/kulsoomimran/password-strength-meter",
            deploymentLink: "https://password-strength-meter-by-kulsoom.streamlit.app/",
            imageSrc: "/passwordStrength.png",
            techStack: ["Python", "Streamlit", "UV"],
        },
        {
            title: "Secure Data Encryption",
            description:
                "A secure web app for encrypting sensitive information and managing login authentication.",
            repoLink: "https://github.com/kulsoomimran/secure-data-encryption",
            deploymentLink: "https://secure-data-encryption-bykulsoomimran.streamlit.app/",
            imageSrc: "/dataEncryption.jpeg",
            techStack: ["Python", "Streamlit", "UV"],
        },
        {
            title: "Info Scrubber and File Convertor",
            description:
                "A tool that scrubs sensitive data from text and converts files across formats (PDF ↔ TXT, CSV ↔ XLSX), enhancing data privacy and accessibility.",
            repoLink: "https://github.com/kulsoomimran/growth-mindset-challenge",
            deploymentLink: "https://growth-mindset-challenge-bykulsoomimran.streamlit.app/",
            imageSrc: "/fileConvertor.png",
            techStack: ["Python", "Streamlit", "UV"],
        },
        {
            title: "Password Generator",
            description:
                "A simple password generator app, where user can generate a random password of desired length and complexity!",
            repoLink: "https://github.com/kulsoomimran/password-generator.git",
            deploymentLink: "https://python-password-generator.streamlit.app/",
            imageSrc: "/passwordGenerator.png",
            techStack: ["Python", "Streamlit", "UV"],
        },
        {
            title: "Unit Converter",
            description:
                "A simple unit converter app, where user can convert units of length, temperature, and weight!",
            repoLink: "https://github.com/kulsoomimran/unit-converter.git",
            deploymentLink: "https://unit-converter-by-kulsoomimran.streamlit.app/",
            imageSrc: "/unitConvertor.png",
            techStack: ["Python", "UV", "Streamlit"],
        },
        {
            title: "Countdown Timer",
            description:
                "A simple countdown timer application, where user can set a time duration, start, pause, and reset the timer and display the remaining time",
            repoLink: "https://github.com/kulsoomimran/CountdownTimer",
            deploymentLink:
                "https://vercel.com/kulsoom-imrans-projects/countdown-timer",
            imageSrc: "/countdownTimer.png",
            techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
        },
        {
            title: "The CHARMLY - A Jewelry Website",
            description:
                "A stylish jewelry website, The CHARMLY, featuring reusable components, smooth routing, and a responsive design!",
            repoLink: "https://github.com/kulsoomimran/Assignment-01",
            deploymentLink: "https://assignment-01-nu.vercel.app/",
            imageSrc: "/Charmly.jpg",
            techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
        },
        {
            title: "My Blog Web",
            description:
                "A dynamic blog, with multiple posts using Next.js routing!",
            repoLink: "https://github.com/kulsoomimran/blog-web",
            deploymentLink: "https://blog-website-mu-three.vercel.app/",
            imageSrc: "/blog.png",
            techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
        },
        {
            title: "Nike Clone",
            description:
                "A basic e-commerce site, a Nike clone, built with Next.js and Tailwind CSS consisting of Login, Sign-in/Sign-up, Products, Product details, Cart and many other pages!",
            repoLink: "https://github.com/kulsoomimran/UI-UX-Hackathon",
            deploymentLink: "https://nextjs-hackathon-sable.vercel.app/",
            imageSrc: "/Nike.png",
            techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
        },
        {
            title: "Dynamic Resume Builder",
            description:
                "A dynamic resume builder, where user inputs details and the resume is generated dynamically. Users can edit the resume in real-time and download it as a PDF!",
            repoLink:
                "https://github.com/kulsoomimran/Interactive_Resume_Builder/tree/main/Milestone05",
            deploymentLink: "https://hackathon1-milestone05.vercel.app/",
            imageSrc: "/resumeBuilder.png",
            techStack: ["HTML", "CSS", "TypeScript"],
        },
    ];

    return (
        <div>
            <div className="flex justify-center gap-4 mb-8">
                <button
                    onClick={() => setSelectedCategory("cli")}
                    className={`px-5 py-2 rounded-full font-medium transition-colors duration-200 shadow-md ${selectedCategory === "cli"
                            ? "bg-indigo-600 text-white"
                            : "bg-gray-100 text-gray-800 hover:bg-indigo-100"
                        }`}
                >
                    CLI Projects
                </button>
                <button
                    onClick={() => setSelectedCategory("web")}
                    className={`px-5 py-2 rounded-full font-medium transition-colors duration-200 shadow-md ${selectedCategory === "web"
                            ? "bg-purple-600 text-white"
                            : "bg-gray-100 text-gray-800 hover:bg-purple-100"
                        }`}
                >
                    Web Projects
                </button>
            </div>

            <div className="max-w-6xl mx-auto px-4 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {selectedCategory === "cli" &&
                    cliProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="h-full"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="h-full">
                                <ProjectCard
                                    imageSrc={project.imageSrc}
                                    title={project.title}
                                    description={project.description}
                                    repoLink={project.repoLink}
                                    techStack={project.techStack}
                                    colorTheme="indigo"
                                />
                            </div>
                        </motion.div>
                    ))}

                {selectedCategory === "web" &&
                    webProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="h-full"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="h-full">
                                <ProjectCard
                                    imageSrc={project.imageSrc}
                                    title={project.title}
                                    description={project.description}
                                    repoLink={project.repoLink}
                                    deploymentLink={project.deploymentLink}
                                    techStack={project.techStack}
                                    colorTheme="purple"
                                />
                            </div>
                        </motion.div>
                    ))}
            </div>
        </div>
    );
};

export default Projects;