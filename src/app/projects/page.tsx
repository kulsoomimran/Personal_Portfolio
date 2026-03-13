"use client";
import React, { useState } from "react";
import ProjectCard from "../components/card";
import { Code, Globe } from "lucide-react";

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
            title: "Todo Full-Stack Web Application",
            description:
                "A full\u2011stack task management app where AI assists users by intelligently adding tasks and enhancing workflow with automated suggestions.",
            repoLink: "https://github.com/kulsoomimran/Todo-Full-Stack-Web-Application",
            deploymentLink: "https://todo-full-stack-web-application-sigma.vercel.app/",
            imageSrc: "/todo.png",
            techStack: ["Next.js", "FastAPI", "PostgreSQL (Neon Serverless)", "JWT Authentication"],
        },
        {
            title: "Physical AI and Humanoid Robotics",
            description:
                "An interactive AI\u2011enhanced platform that combines robotics knowledge with a RAG chatbot, enabling context\u2011aware answers based on the book\u2019s content.",
            repoLink: "https://github.com/kulsoomimran/physical_ai_and_humanoid_robotics.git",
            deploymentLink: "https://ai-and-humanoid-robotics-book.vercel.app/",
            imageSrc: "/book.png",
            techStack: ["Docusaurus", "FastAPI", "Cohere Embeddings", "Qdrant Vector Database"],
        },
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
        <div id="projects" className="bg-black min-h-screen text-white py-20 px-6 lg:px-20">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-12">
                    <h2 
                        data-aos="fade-down"
                        data-aos-duration="800"
                        className="text-4xl lg:text-5xl font-extrabold text-white mb-3"
                    >
                        My <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00FFFF] to-[#FF00FF]">Projects</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FFFF00] mx-auto rounded-full"></div>
                </div>

                {/* Category Tabs */}
                <div 
                    data-aos="fade-up"
                    data-aos-duration="600"
                    className="flex justify-center gap-4 mb-12"
                >
                    <button
                        onClick={() => setSelectedCategory("cli")}
                        className={`group relative px-8 py-3 rounded-xl font-semibold transition-all duration-300 overflow-hidden ${
                            selectedCategory === "cli"
                                ? "bg-gradient-to-r from-indigo-600 to-indigo-700 text-white scale-105 shadow-lg shadow-indigo-500/50"
                                : "bg-gray-800 text-gray-300 hover:bg-gray-700 border-2 border-gray-700 hover:border-indigo-500"
                        }`}
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            <Code className="w-5 h-5" />
                            CLI Projects
                        </span>
                    </button>
                    <button
                        onClick={() => setSelectedCategory("web")}
                        className={`group relative px-8 py-3 rounded-xl font-semibold transition-all duration-300 overflow-hidden ${
                            selectedCategory === "web"
                                ? "bg-gradient-to-r from-purple-600 to-purple-700 text-white scale-105 shadow-lg shadow-purple-500/50"
                                : "bg-gray-800 text-gray-300 hover:bg-gray-700 border-2 border-gray-700 hover:border-purple-500"
                        }`}
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            <Globe className="w-5 h-5" />
                            Web Projects
                        </span>
                    </button>
                </div>

                {/* Projects Grid */}
                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {selectedCategory === "cli" &&
                        cliProjects.map((project, index) => (
                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                data-aos-duration="600"
                                className="h-full"
                            >
                                <ProjectCard
                                    imageSrc={project.imageSrc}
                                    title={project.title}
                                    description={project.description}
                                    repoLink={project.repoLink}
                                    techStack={project.techStack}
                                    colorTheme="indigo"
                                />
                            </div>
                        ))}

                    {selectedCategory === "web" &&
                        webProjects.map((project, index) => (
                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                data-aos-duration="600"
                                className="h-full"
                            >
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
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
