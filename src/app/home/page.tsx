import Image from "next/image"
import Profile from "../public/Profile.jpg"

export default function Home() {
    return (
        <div
            id="home"
            className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-teal-200 to-purple-200 p-8 text-center space-y-8"
        >
            <div className="flex flex-col justify-center items-center md:flex-row md:items-center md:space-x-12">

                <div className="flex-1 flex flex-col justify-center items-center md:items-start space-y-4">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-700">
                        Welcome to my Portfolio
                    </h2>
                    <p className="text-lg text-slate-800">I&apos;m</p>
                    <h1 className="text-5xl text-customBlue font-bold transition-transform hover:scale-125">
                        Kulsoom Imran
                    </h1>
                    <h3 className="text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-600 to-red-500 transition-transform hover:scale-95">
                        a Developer!!
                    </h3>
                </div>

                <div className="flex-1 flex justify-center">
                    <Image
                        src={Profile}
                        alt="Profile Picture"
                        className="w-48 h-64 md:w-60 md:h-80 lg:w-72 lg:h-96 object-cover rounded-lg shadow-lg transition-transform hover:scale-105"
                    />
                </div>
            </div>
        </div>
    );
}