import React, { useState } from "react";

export default function Home() {
  const [color, setColor] = useState("black");
  return (
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
  );
}