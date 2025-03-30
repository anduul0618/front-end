import React, { useState } from "react";
import { useRouter } from "next/router";
export default function Home() {
  const [color, setColor] = useState("black");
  const router = useRouter();
  return (
    <div className="bg-gray-600">
    <button
className="absolute top-6 right-6 font-bold text-xl bg-[rgb(0,0,0)] text-[rgb(255,255,255)] px-6 py-2 rounded-lg shadow-md hover:bg-[rgb(102,102,102)] transition"
onClick={() => router.push("/")}>
Back
</button>
    <div className={`flex h-screen w-screen bg-${color}-800`}>
      {color == "red" ? (
        <><button
          className="border bg-red-800 h-96 w-32"
          onClick={() => setColor("red")}
        >
          Улаан
        </button>
        <button className="border bg-slate-500 h-96 w-32" onClick={() => setColor("black")}>
        Refresh
        </button></>
      ) : color == "green" ? (
        <><button
          className="border bg-green-800 h-96 w-32"
          onClick={() => setColor("green")}
        >
          Ногоон
        </button>
        <button className="border bg-slate-500 h-96 w-32" onClick={() => setColor("black")}>
        Refresh
        </button></>
      ):color == "blue" ? (
        <><button
          className="border bg-blue-800 h-96 w-32"
          onClick={() => setColor("blue")}
        >
          Цэнхэр
        </button>
        <button className="border bg-slate-500 h-96 w-32" onClick={() => setColor("black")}>
        Refresh
        </button></>
      ):(
        <><button
            className="border bg-red-800 h-96 w-32"
            onClick={() => setColor("red")}
          >
            Улаан
          </button><button
            className="border bg-green-800 h-96 w-32"
            onClick={() => setColor("green")}
          >
             Ногоон
            </button><button
              className="border bg-blue-800 h-96 w-32"
              onClick={() => setColor("blue")}
            >
              Цэнхэр
            </button></>
      )}
    </div>
    </div>
  );
}