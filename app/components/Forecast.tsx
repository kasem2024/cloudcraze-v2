"use client";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { motion } from "framer-motion";

// Map OpenWeather icon codes to inline SVG components
const WeatherSVG = ({ icon }: { icon: string }) => {
  switch (icon) {
    case "01d": // Clear Day
      return (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width={60}
          height={60}
          viewBox="0 0 64 64"
          whileHover={{ scale: 1.2 }}
          className="text-yellow-400"
        >
          <circle cx="32" cy="32" r="12" fill="currentColor" />
        </motion.svg>
      );
    case "01n": // Clear Night
      return (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width={60}
          height={60}
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
    case "02d": // Few clouds day
    case "03d": // Scattered clouds
    case "04d": // Broken clouds
      return (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width={60}
          height={60}
          viewBox="0 0 64 64"
          whileHover={{ rotateY: 15 }}
          className="text-gray-400"
        >
          <ellipse cx="32" cy="36" rx="20" ry="12" fill="currentColor" />
          <ellipse cx="40" cy="28" rx="12" ry="8" fill="currentColor" />
        </motion.svg>
      );
    case "09d": // Shower rain
    case "10d": // Rain day
      return (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width={60}
          height={60}
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
          width={60}
          height={60}
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
          width={60}
          height={60}
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
          className="w-12 h-12 bg-gray-500 rounded-full"
          whileHover={{ scale: 1.1 }}
        />
      );
  }
};

const week_days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }: any) => {
  const dayInAweek = new Date().getDay();
  const newDays = week_days
    .slice(dayInAweek)
    .concat(week_days.slice(0, dayInAweek));

  return (
    <div className="w-full max-w-4xl mx-auto mt-6">
      <Accordion allowZeroExpanded>
        {data.list.slice(0, 7).map((item: any, index: number) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex justify-between items-center p-4 md:p-6 mb-2 bg-gradient-to-r from-cyan-900 via-blue-900 to-indigo-900 rounded-xl shadow-lg cursor-pointer"
                >
                  <WeatherSVG icon={item.weather[0]?.icon} />
                  <div className="flex-1 ml-4 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4">
                    <span className="text-cyan-400 font-bold text-sm md:text-lg">
                      {newDays[index]}
                    </span>
                    <span className="text-white text-sm md:text-lg capitalize">
                      {item?.weather[0]?.description}
                    </span>
                    <span className="text-white/70 text-sm md:text-lg">
                      {Math.round(item.main.temp_min)}°C /{" "}
                      {Math.round(item.main.temp_max)}°C
                    </span>
                  </div>
                </motion.div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2 p-4 bg-black/30 backdrop-blur-md rounded-xl shadow-inner">
                <div className="flex justify-between items-center">
                  <span className="text-white/80 font-semibold">Pressure</span>
                  <span className="text-white font-bold">
                    {item.main.pressure} hPa
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-cyan-400 font-semibold">Humidity</span>
                  <span className="text-white font-bold">
                    {item.main.humidity}%
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80 font-semibold">Clouds</span>
                  <span className="text-white font-bold">
                    {item.clouds.all}%
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-cyan-400 font-semibold">
                    Wind Speed
                  </span>
                  <span className="text-white font-bold">
                    {item.wind.speed} m/s
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80 font-semibold">Sea Level</span>
                  <span className="text-white font-bold">
                    {item.main.sea_level} m
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-cyan-400 font-semibold">
                    Feels Like
                  </span>
                  <span className="text-white font-bold">
                    {Math.round(item.main.feels_like)}°C
                  </span>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Forecast;
