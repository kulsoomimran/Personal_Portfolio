export default function About() {
    return (
        <section id="about" className="max-w-5xl mx-auto p-8 sm:p-12 lg:p-16 text-center bg-gradient-to-b from-blue-50 to-purple-100 rounded-lg shadow-xl my-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-emerald-800 mb-6">About Me</h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-10 leading-relaxed max-w-3xl mx-auto">
                Hello! I&apos;m Kulsoom, a passionate software developer skilled in both web and CLI development. Currently pursuing certification in Cloud Applied Generative AI Engineering, I have hands-on experience in building scalable, responsive, and user-friendly applications.
            </p>
            <h3 className="text-3xl sm:text-4xl font-bold text-purple-700 mb-6">My Skills</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-6 lg:gap-8 mb-12">

                <li className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-6 py-4 rounded-lg shadow-xl text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">HTML</li>
                <li className="bg-gradient-to-r from-purple-600 via-violet-500 to-blue-500 text-white px-6 py-4 rounded-lg shadow-xl text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">CSS</li>
                <li className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-white px-6 py-4 rounded-lg shadow-xl text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">TypeScript</li>
                <li className="bg-gradient-to-r from-teal-400 via-green-400 to-blue-400 text-white px-6 py-4 rounded-lg shadow-xl text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">Next.js</li>
                <li className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-white px-6 py-4 rounded-lg shadow-xl text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">Tailwind CSS</li>
                <li className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-white px-6 py-4 rounded-lg shadow-xl text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">Node.js</li>
                <li className="bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 text-white px-6 py-4 rounded-lg shadow-xl text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">Python</li>
                <li className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white px-6 py-4 rounded-lg shadow-xl text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">Streamlit</li>
                <li className="bg-gradient-to-r from-gray-700 via-gray-500 to-gray-300 text-white px-6 py-4 rounded-lg shadow-xl text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">UV</li>

                <li></li>
            </ul>
        </section>
    )
}