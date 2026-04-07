"use client";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import React from "react";
import Link from "next/link";
import cloud from "@/app/src/assets/cloud.jpg";
import Image from "next/image";
import WeatherVisual from "./WeatherVisual";

const Login = () => {
  return (
    <div
      className="
      min-h-screen w-screen
      flex flex-col lg:flex-row
      items-center justify-center
      bg-gradient-to-br from-black via-zinc-900 to-zinc-800
      px-6 py-12 gap-10
      relative overflow-hidden
    "
    >
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />

      {/* LEFT SIDE */}
      <div
        className="
        flex flex-col items-center lg:items-start
        justify-center
        space-y-10
        w-full lg:w-1/2
        max-w-2xl
        relative z-10
      "
      >
        <ReactTyped
          strings={[
            "Welcome to Cloud Craze ☁️",
            "Continue with Google 🚀",
            "Let’s build something amazing ✨",
          ]}
          typeSpeed={50}
          backSpeed={30}
          loop
          className="
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            font-extrabold
            bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500
            bg-clip-text text-transparent
            text-center lg:text-left
            leading-tight
          "
        />

        <p className="text-zinc-400 text-center lg:text-left text-sm sm:text-base max-w-md">
          A modern cloud platform to build, scale, and innovate faster than
          ever.
        </p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full flex justify-center lg:justify-start"
        >
          <Link
            href="/api/auth/signin"
            className="
              relative inline-flex items-center justify-center
              px-8 py-3
              text-lg font-semibold
              text-white
              rounded-xl
              bg-gradient-to-r from-cyan-500 to-blue-600
              shadow-lg shadow-cyan-500/20
              overflow-hidden
              transition-all duration-300
              hover:shadow-cyan-400/40
              hover:brightness-110
            "
          >
            <span className="relative z-10">Start Now</span>

            {/* glow effect */}
            <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition" />
          </Link>
        </motion.div>
      </div>

      {/* RIGHT SIDE */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
          w-full lg:w-1/2
          flex justify-center items-center
          relative z-10
        "
      >
        <div
          className="
          relative
          p-6
          rounded-2xl
          bg-white/5
          backdrop-blur-xl
          border border-white/10
          shadow-2xl
        "
        >
          <WeatherVisual />
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
