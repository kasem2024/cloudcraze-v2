"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Search from "./Search";

import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import { API_Key } from "@/data/api";
import Link from "next/link";
import { LogOut } from "lucide-react";
import User from "./User";

const bgData = [
  "bg-navbg1",
  "bg-navbg2",
  "bg-navbg3",
  "bg-navbg4",
  "bg-navbg5",
  "bg-navbg6",
  "bg-navbg7",
  "bg-navbg8",
  "bg-navbg9",
];

const apiWeatherUrl = "https://api.openweathermap.org/data/2.5";

const Weather = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [counter, setCounter] = useState(0);
  const [forecast, setForecast] = useState(null);
  const { data } = useSession();

  const handleOnSearchChange = (searchData: any) => {
    const [lat, lon] = searchData.value.split(" ");

    Promise.all([
      fetch(
        `${apiWeatherUrl}/weather?lat=${lat}&lon=${lon}&appid=${API_Key}&units=metric`,
      ),
      fetch(
        `${apiWeatherUrl}/forecast?lat=${lat}&lon=${lon}&appid=${API_Key}&units=metric`,
      ),
    ])
      .then(async ([weatherRes, forecastRes]) => {
        const weather = await weatherRes.json();
        const forecast = await forecastRes.json();

        setCurrentWeather({ ...weather, city: searchData.label });
        setForecast({ ...forecast, city: searchData.label });
      })
      .catch(console.log);
  };

  useEffect(() => {
    const id = setTimeout(() => {
      setCounter((prev) => (prev < 8 ? prev + 1 : 0));
    }, 11000);
    return () => clearTimeout(id);
  }, [counter]);

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden font-sans">
      <div
        className={`min-h-screen w-full ${bgData[counter]} bg-cover bg-center flex flex-col transition-all duration-1000`}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-0" />

        <nav className="relative z-30 w-full flex items-center justify-between px-4 md:px-10 py-4 backdrop-blur-md bg-white/5 border-b border-white/10">
          {/* LOGO */}
          <div className="text-2xl md:text-3xl font-extrabold tracking-wide">
            <span className="text-cyan-400 drop-shadow-lg">C</span>
            <span className="text-white">loud</span>
          </div>

          {/* SEARCH */}
          <div className="flex-1 max-w-[600px] mx-3 md:mx-8">
            <div className="w-full border border-white/20 rounded-xl px-2 py-1 bg-white/10 backdrop-blur-lg shadow-inner">
              <Search onSearchChange={handleOnSearchChange} />
            </div>
          </div>

          {/* USER */}
          <div className="flex items-center gap-3">
            <User data={data} />
            <Link
              href={"/api/auth/signout"}
              className="p-2 md:p-3 bg-white/10 hover:bg-white/20 backdrop-blur-lg rounded-full border border-white/20 transition-all duration-300 shadow-lg"
            >
              <LogOut size={20} className="text-white" />
            </Link>
          </div>
        </nav>

        <div className="relative z-20 flex-1 flex justify-center items-start px-4 md:px-6 pt-20 md:pt-12">
          <div
            className="
              w-full max-w-5xl
              bg-white/10
              backdrop-blur-2xl
              border border-white/20
              rounded-2xl
              p-5 md:p-8
              shadow-[0_20px_60px_rgba(0,0,0,0.6)]
              transition-all duration-500
            "
          >
            {/* HEADER */}
            <div className="mb-6 flex items-center justify-between">
              <h1 className="text-xl md:text-2xl font-bold text-white tracking-wide">
                Weather Dashboard
              </h1>
              <span className="text-cyan-400 text-sm opacity-80">
                Live Data
              </span>
            </div>

            {/* CURRENT WEATHER */}
            {currentWeather && (
              <div className="mb-6">
                <CurrentWeather currentWeather={currentWeather} />
              </div>
            )}

            {/* FORECAST */}
            {forecast && (
              <div className="border-t border-white/10 pt-6">
                <Forecast data={forecast} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
