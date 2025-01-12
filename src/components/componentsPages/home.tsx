import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import profileimage from "../images/201560ae-0a68-43e6-8b65-fa19a90adc1a.png";

const LandingPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200); // Memulai animasi setelah 200ms
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center font-sans">
      <main className="flex flex-col md:flex-row items-center max-w-5xl mx-auto px-4 md:px-8">
        {/* Bagian Teks */}
        <div
          className={`text-center md:text-left flex-1 transition-all duration-700 ${
            isVisible ? "animate-fadeIn" : "opacity-0"
          }`}
        >
          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
            Design - Development - Editing
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-gray-800">
            hi, perkenalkan nama saya{" "}
            <span className="text-blue-600">Fajar Geran Arifin</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Saya adalah seorang developer dengan pengalaman dalam desain UI/UX,
            pengembangan aplikasi, dan penyuntingan multimedia.
          </p>
          <div className="mt-6 flex justify-center md:justify-start space-x-4">
            <Link to="/resume">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700">
                Resume
              </button>
            </Link>

            <Link to="/project">
              <button className="border border-gray-300 text-gray-600 px-6 py-2 rounded-md font-medium hover:border-gray-400">
                Project
              </button>
            </Link>
          </div>
        </div>

        {/* Bagian Gambar */}
        <div
          className={`flex-1 flex justify-center transition-all duration-700 delay-200 ${
            isVisible ? "animate-fadeIn" : "opacity-0"
          }`}
        >
          {/* Persegi dengan Gambar */}
          <div className="relative bg-gradient-to-tr from-purple-500 to-blue-500 rounded-3xl w-[300px] h-[350px] md:w-[350px] md:h-[400px] flex items-center justify-center">
            <img
              src={profileimage}
              alt="Profile"
              className="relative z-10 w-[300px] h-[350px] md:w-[350px] md:h-[400px] object-cover rounded-md"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
