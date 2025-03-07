import {useState} from "react";
const exampleData = [
    {
        id : 1,
        firstname : "Anduul",
        lastname : "Altankhaich",
        job : ""
    }
]

export default function home() {
  return (
      <div onClick={() => setClick((test) => !test)}className="flex items-center flex-col h-screen justify-center">
        <p className="border rounded-xl p-7">Dont Click This At 3 Am</p>
        <p>{click == true ? "You just became an impostor in amongus" : ""}</p>
      </div>
  );
}