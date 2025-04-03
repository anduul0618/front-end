import React, { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [name, setName] = useState("");
  const router = useRouter();

  return (
    <div
      className="h-screen w-full flex flex-col justify-center items-center bg-cover bg-center bg-fixed relative text-white"
      style={{ backgroundImage: "url('/nestlogo.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
      <button
        className="absolute top-6 right-6 font-bold text-xl bg-gray-800 text-white px-6 py-2 rounded-lg shadow-md 
                   hover:bg-gray-600 transition transform hover:scale-105"
        onClick={() => router.push("/")}
      >
        Back
      </button>
      <div className="relative z-10 flex items-center bg-white bg-opacity-20 backdrop-blur-lg p-5 rounded-xl shadow-xl">
        <p className="mr-3 text-lg font-semibold text-white">Name:</p>
        <input
          type="text"
          className="border border-gray-300 bg-gray-200 text-black rounded-md p-2 focus:outline-none 
                     focus:ring-2 focus:ring-blue-400 transition-all"
          size="10"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <p className="mt-5 text-3xl font-bold text-white relative z-10 bg-black bg-opacity-40 px-5 py-2 rounded-lg">
        Hello, {name.trim() === "" ? "Suragch" : name}!
      </p>
    </div>
  );
}
