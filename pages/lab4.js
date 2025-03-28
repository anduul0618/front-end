import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
export default function Home() {
  const [name, setName] = useState("");
  const router = useRouter();
  return (
    <div className="h-screen w-full flex justify-center items-center bg-gray-600 text-black">
    
      <button
        className="absolute top-6 right-6 font-bold text-xl bg-[rgb(100,100,100)] text-[rgb(255,255,255)] px-6 py-2 rounded-lg shadow-md hover:bg-[rgb(102,102,102)] transition"
        onClick={() => router.push("/")}>
        Back
      </button>
        <p className="mr-3">Name:</p>
        <input type="text" className="border border-black rounded p-2" size={"10"} onChange={(e) => setName(e.target.value)}/>
        <p className="ml-3">Hello</p>
        {name==("") ? (<><p className="ml-3">, Suragch</p></>) : <p className="ml-1">{name}</p> }
    </div>
  );
}
