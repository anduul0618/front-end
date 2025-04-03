import React, { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [color, setColor] = useState("black");
  const router = useRouter();

  return (
    <div
      className="h-screen w-full bg-cover bg-center bg-fixed bg-no-repeat relative flex flex-col justify-center items-center transition-all duration-500"
      style={{ backgroundImage: `url('/nestlogo.jpg')` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
      <button
        className="absolute top-6 right-6 font-bold text-xl bg-gray-800 text-white px-6 py-2 rounded-lg shadow-md 
                   hover:bg-gray-600 transition transform hover:scale-105"
        onClick={() => router.push("/")}
      >
        Back
      </button>
      <div
        className={`relative flex flex-col items-center justify-center p-10 rounded-xl shadow-xl 
                    bg-${color}-800 bg-opacity-20 backdrop-blur-lg w-96 h-auto transition-all duration-500`}
      >
        <div className="flex gap-5">
          {color === "black" ? (
            <>
              <button
                className="h-24 w-24 text-white font-bold rounded-full shadow-lg bg-red-600 hover:bg-red-700 transition transform hover:scale-110"
                onClick={() => setColor("red")}
              >
                Улаан
              </button>
              <button
                className="h-24 w-24 text-white font-bold rounded-full shadow-lg bg-green-600 hover:bg-green-700 transition transform hover:scale-110"
                onClick={() => setColor("green")}
              >
                Ногоон
              </button>
              <button
                className="h-24 w-24 text-white font-bold rounded-full shadow-lg bg-blue-600 hover:bg-blue-700 transition transform hover:scale-110"
                onClick={() => setColor("blue")}
              >
                Цэнхэр
              </button>
            </>
          ) : (
            <>
              <button
                className={`h-24 w-24 text-white font-bold rounded-full shadow-lg bg-${color}-600 hover:bg-${color}-700 transition transform hover:scale-110`}
              >
                {color === "red" ? "Улаан" : color === "green" ? "Ногоон" : "Цэнхэр"}
              </button>
              <button
                className="h-24 w-24 text-white font-bold rounded-full shadow-lg bg-gray-500 hover:bg-gray-600 transition transform hover:scale-110"
                onClick={() => setColor("black")}
              >
                Refresh
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}