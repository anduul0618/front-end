import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [click, setClick] = useState(false);
  const router = useRouter();

  return (
    <div
      className="h-screen w-full bg-cover bg-center bg-fixed bg-no-repeat relative flex flex-col justify-center items-center"
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
      <div
        onClick={() => setClick((prev) => !prev)}
        className="relative flex flex-col items-center text-center bg-white bg-opacity-10 backdrop-blur-lg p-10 rounded-xl shadow-lg 
                   transition transform hover:scale-105 cursor-pointer"
      >
        <p className="border border-white rounded-xl p-7 text-lg font-semibold text-white">
         Битгий Дараарай!
        </p>
        <p className="mt-4 text-xl text-red-400 font-bold">
          {click ? "Та Хожигдлоо!" : ""}
        </p>
      </div>
    </div>
  );
}
