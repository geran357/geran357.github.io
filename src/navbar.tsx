import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import music from "./components/music/utomp3.com - Inspiring and Motivational Cinematic Background Music For Videos  Royalty Free.mp3";
import {
  FaHome,
  FaProjectDiagram,
  FaImages,
  FaFileAlt,
  FaInstagram,
  FaMusic,
} from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlayer = () => {
    setIsPlayerOpen((prev) => !prev);
  };

  // Memutar musik otomatis saat halaman dimuat
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true); // Mengatur status sebagai sedang diputar
    }
  }, []);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying); // Toggle status play/pause
    }
  };

  const handlePlayerClose = () => {
    setIsPlayerOpen(false);
    // Jangan hentikan musik saat player ditutup
  };

  return (
    <nav className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 shadow-lg z-20">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-3xl font-extrabold text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-300">
            MyPortfolio
          </span>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-8">
          {[
            {
              to: "/",
              label: "Home",
              icon: <FaHome className="inline mr-2" />,
            },
            {
              to: "/project",
              label: "Project",
              icon: <FaProjectDiagram className="inline mr-2" />,
            },
            {
              to: "/gallery",
              label: "Gallery",
              icon: <FaImages className="inline mr-2" />,
            },
            {
              to: "/resume",
              label: "Resume",
              icon: <FaFileAlt className="inline mr-2" />,
            },
          ].map(({ to, label, icon }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `transition-all duration-300 flex items-center text-lg ${
                    isActive
                      ? "font-bold text-yellow-300 underline decoration-2"
                      : "text-white hover:text-yellow-300"
                  }`
                }
              >
                {icon} {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Instagram Link */}
          <a
            href="https://www.instagram.com/qx.nkp_amv/profilecard/?igsh=MXV6azUzODVoMzdlMQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-yellow-300 text-blue-800 font-bold rounded-full shadow-md hover:bg-yellow-400 transition duration-300"
          >
            <FaInstagram className="mr-2" />
            Follow Me
          </a>

          {/* Music Player Toggle */}
          <button
            onClick={togglePlayer}
            className="p-2 bg-yellow-300 text-blue-800 font-bold rounded-full shadow-md hover:bg-yellow-400 transition duration-300"
          >
            <FaMusic />
          </button>
        </div>
      </div>

      {/* Music Player */}
      <div
        className={`absolute top-0 right-0 h-full bg-gray-800 text-white shadow-lg transition-all duration-500 ${
          isPlayerOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{
          width: "300px",
          transition: "opacity 0.5s ease, visibility 0s 0.5s",
        }}
      >
        <div className="flex flex-col items-center justify-center h-full p-4">
          <h3 className="text-lg font-semibold text-yellow-300">
            Music Player
          </h3>
          <audio ref={audioRef} loop>
            <source src={music} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <div className="flex space-x-4">
            {/* Play/Pause Button */}
            <button
              onClick={handlePlayPause}
              className="px-4 py-2 bg-yellow-300 text-blue-800 rounded-full shadow-md hover:bg-yellow-400 transition duration-300"
            >
              {isPlaying ? "Pause" : "Play"}
            </button>
            {/* Close Button */}
            <button
              onClick={handlePlayerClose}
              className="px-4 py-2 bg-red-500 text-white rounded-full shadow-md hover:bg-red-600 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
