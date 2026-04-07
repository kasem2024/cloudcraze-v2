"use client";

import React from "react";
import { motion } from "framer-motion";

// Map OpenWeather icon codes to SVGs
const WeatherSVG = ({ icon }: { icon: string }) => {
  switch (icon) {
    case "01d": // Clear Day
      return (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width={100}
          height={100}
          viewBox="0 0 64 64"
          whileHover={{ scale: 1.2, rotate: 10 }}
          className="text-yellow-400"
        >
          <circle cx="32" cy="32" r="14" fill="currentColor" />
        </motion.svg>
      );
    case "01n": // Clear Night
      return (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width={100}
          height={100}
          viewBox="0 0 64 64"
          whileHover={{ rotate: 10 }}
          className="text-gray-300"
        >
          <path
            fill="currentColor"
            d="M32 12a20 20 0 1020 20 20 20 0 00-20-20zm0 36a16 16 0 1116-16 16 16 0 01-16 16z"
          />
        </motion.svg>
      );
    case "02d": // Few clouds
    case "03d": // Scattered clouds
    case "04d": // Broken clouds
      return (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width={100}
          height={100}
          viewBox="0 0 64 64"
          whileHover={{ rotateY: 15 }}
          className="text-gray-400"
        >
          <ellipse cx="32" cy="36" rx="20" ry="12" fill="currentColor" />
          <ellipse cx="40" cy="28" rx="12" ry="8" fill="currentColor" />
        </motion.svg>
      );
    case "09d": // Rain
    case "10d": // Shower
      return (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width={100}
          height={100}
          viewBox="0 0 64 64"
          whileHover={{ rotateY: 10 }}
          className="text-blue-400"
        >
          <ellipse cx="32" cy="28" rx="20" ry="12" fill="currentColor" />
          <line
            x1="22"
            y1="42"
            x2="22"
            y2="52"
            stroke="currentColor"
            strokeWidth="3"
          />
          <line
            x1="32"
            y1="42"
            x2="32"
            y2="52"
            stroke="currentColor"
            strokeWidth="3"
          />
          <line
            x1="42"
            y1="42"
            x2="42"
            y2="52"
            stroke="currentColor"
            strokeWidth="3"
          />
        </motion.svg>
      );
    case "11d": // Thunderstorm
      return (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width={100}
          height={100}
          viewBox="0 0 64 64"
          whileHover={{ scale: 1.2, rotate: 10 }}
          className="text-yellow-300"
        >
          <ellipse cx="32" cy="28" rx="20" ry="12" fill="currentColor" />
          <polygon points="28,42 36,42 30,52" fill="currentColor" />
        </motion.svg>
      );
    case "13d": // Snow
      return (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width={100}
          height={100}
          viewBox="0 0 64 64"
          whileHover={{ rotate: 15 }}
          className="text-white"
        >
          <ellipse cx="32" cy="28" rx="20" ry="12" fill="currentColor" />
          <text
            x="32"
            y="50"
            textAnchor="middle"
            fill="currentColor"
            fontSize="16"
          >
            ❄
          </text>
        </motion.svg>
      );
    default:
      return (
        <motion.div
          className="w-24 h-24 bg-gray-500 rounded-full"
          whileHover={{ scale: 1.1 }}
        />
      );
  }
};

const CurrentWeather = ({ currentWeather }: any) => {
  return (
    <div className="bg-black/50 backdrop-blur-xl rounded-xl shadow-2xl p-6 md:p-10 text-white w-full max-w-4xl mx-auto">
      {/* HEADER */}
      <motion.div
        whileTap={{ scale: 1.03 }}
        className="flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-cyan-800 via-blue-800 to-indigo-900 p-4 rounded-xl shadow-lg"
      >
        <div className="text-center md:text-left">
          <p className="text-2xl md:text-4xl font-extrabold text-cyan-400">
            {currentWeather?.city}
          </p>
          <p className="text-sm md:text-xl text-slate-300 capitalize">
            {currentWeather?.weather[0]?.description}
          </p>
        </div>

        <motion.div whileHover={{ rotateY: 20 }} className="mt-4 md:mt-0">
          <WeatherSVG icon={currentWeather?.weather[0]?.icon} />
        </motion.div>
      </motion.div>

      {/* MAIN DATA */}
      <div className="mt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        {/* TEMPERATURE */}
        <p className="text-4xl md:text-6xl font-bold text-white flex items-baseline">
          {Math.round(currentWeather.main.temp)}
          <span className="text-2xl md:text-4xl text-cyan-400 ml-1">°C</span>
        </p>

        {/* DETAILS */}
        <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <span className="text-sm md:text-lg font-semibold text-white/80">
              Feels Like
            </span>
            <span className="text-lg md:text-2xl font-bold text-white">
              {Math.round(currentWeather.main.feels_like)}°C
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm md:text-lg font-semibold text-cyan-400">
              Wind
            </span>
            <span className="text-lg md:text-2xl font-bold text-cyan-400">
              {currentWeather.wind.speed} m/s
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm md:text-lg font-semibold text-white/80">
              Humidity
            </span>
            <span className="text-lg md:text-2xl font-bold text-white">
              {currentWeather.main.humidity}%
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm md:text-lg font-semibold text-cyan-400">
              Pressure
            </span>
            <span className="text-lg md:text-2xl font-bold text-cyan-400">
              {currentWeather.main.pressure} hPa
            </span>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="mt-6 text-sm text-white/70 text-center md:text-left">
        Last updated: {new Date().toLocaleTimeString()}
      </div>
    </div>
  );
};

export default CurrentWeather;
