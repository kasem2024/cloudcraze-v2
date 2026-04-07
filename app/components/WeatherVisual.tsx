import { motion } from "framer-motion";
const WeatherVisual = ({ weather = "rain" }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center justify-center cursor-pointer"
    >
      <motion.svg
        width="260"
        height="260"
        viewBox="0 0 200 200"
        className="drop-shadow-[0_0_40px_rgba(0,200,255,0.7)]"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        {/* 🌙 NIGHT MODE */}
        {weather === "night" && (
          <>
            <circle cx="140" cy="50" r="20" fill="#facc15" />
            <circle cx="150" cy="45" r="20" fill="#0f172a" />

            {[...Array(6)].map((_, i) => (
              <motion.circle
                key={i}
                cx={30 + i * 25}
                cy={30 + (i % 2) * 10}
                r="2"
                fill="white"
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              />
            ))}
          </>
        )}

        {/* ☀️ SUN */}
        {weather === "sunny" && (
          <motion.circle
            cx="100"
            cy="80"
            r="30"
            fill="url(#sunGradient)"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "100px 80px" }}
          />
        )}

        {/* ☁️ CLOUD */}
        {(weather === "rain" || weather === "storm") && (
          <>
            <motion.ellipse
              cx="110"
              cy="90"
              rx="45"
              ry="25"
              fill="url(#cloudGradient)"
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <motion.ellipse
              cx="80"
              cy="95"
              rx="30"
              ry="20"
              fill="url(#cloudGradient)"
              animate={{ x: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          </>
        )}

        {/* 🌧️ RAIN */}
        {weather === "rain" &&
          [...Array(5)].map((_, i) => (
            <motion.line
              key={i}
              x1={80 + i * 15}
              y1="120"
              x2={80 + i * 15}
              y2="150"
              stroke="#38bdf8"
              strokeWidth="3"
              strokeLinecap="round"
              animate={{ y: [0, 15, 0], opacity: [0, 1, 0] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}

        {/* ⚡ THUNDERSTORM */}
        {weather === "storm" && (
          <>
            {/* rain */}
            {[...Array(4)].map((_, i) => (
              <motion.line
                key={i}
                x1={90 + i * 12}
                y1="120"
                x2={90 + i * 12}
                y2="150"
                stroke="#60a5fa"
                strokeWidth="3"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}

            {/* lightning */}
            <motion.polygon
              points="110,110 95,140 115,140 100,170"
              fill="#fde047"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
            />
          </>
        )}

        {/* 🎨 GRADIENTS */}
        <defs>
          <linearGradient id="sunGradient">
            <stop offset="0%" stopColor="#fde047" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>

          <linearGradient id="cloudGradient">
            <stop offset="0%" stopColor="#e5e7eb" />
            <stop offset="100%" stopColor="#9ca3af" />
          </linearGradient>
        </defs>
      </motion.svg>
    </motion.div>
  );
};

export default WeatherVisual;
