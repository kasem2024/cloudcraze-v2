import React, { useEffect, useState } from "react";

const User = ({ data }: any) => {
  const [randomIndex, setRandomIndex] = useState(0);

  useEffect(() => {
    setRandomIndex(Math.floor(Math.random() * 6));
  }, []);

  const shortName =
    data?.user?.name
      ?.split(" ")
      .map((item: string) => item[0])
      .join("")
      .toUpperCase() || "U";

  const colors = [
    "from-green-500 to-emerald-600",
    "from-rose-500 to-pink-600",
    "from-violet-500 to-purple-600",
    "from-orange-500 to-amber-600",
    "from-cyan-500 to-blue-600",
    "from-blue-500 to-indigo-600",
  ];

  return (
    <div
      className={`
        relative
        w-10 h-10 md:w-12 md:h-12
        flex items-center justify-center
        rounded-full
        text-white font-bold
        text-sm md:text-base
        bg-gradient-to-br ${colors[randomIndex]}
        border border-white/20
        shadow-lg
        cursor-pointer
        transition-all duration-300
        hover:scale-110
        hover:shadow-xl
      `}
    >
      {shortName}

      <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 hover:opacity-100 transition" />
    </div>
  );
};

export default User;
