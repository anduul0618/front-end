import React, { useState, useEffect } from "react";
export default function Home() {
  const [name, setName] = useState("");
  return (
    <div className="h-screen w-full flex justify-center items-center bg-white text-black">
        <p className="mr-3">Name:</p>
        <input type="text" className="border border-black rounded p-2" size={"10"} onChange={(e) => setName(e.target.value)}/>
        <p className="ml-3">Hello</p>
        {name==("") ? (<><p className="ml-3">, Suragch</p></>) : <p className="ml-1">{name}</p> }
    </div>
  );
}
