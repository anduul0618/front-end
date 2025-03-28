import {useState} from "react";
import { useRouter } from "next/router";

export default function home() {
  const [click, setClick] = useState(false);
  const router = useRouter();

  let string = "anduul";

  let number = 0;

  let boolean = true;

  return (
    <div className="flex items-center flex-col h-screen bg-gray-600 justify-center">
            <button
        className="absolute top-6 right-6 font-bold text-xl bg-[rgb(0,0,0)] text-[rgb(255,255,255)] px-6 py-2 rounded-lg shadow-md hover:bg-[rgb(102,102,102)] transition"
        onClick={() => router.push("/")}>
        Back
      </button>
      <div onClick={() => setClick((test) => !test)}className="flex items-center flex-col h-screen justify-center">
        <p className="border rounded-xl p-7">Dont Click This At 3 Am</p>
        <p className="w-30 h-15">{click == true ? "You just became an impostor in amongus" : ""}</p>
      </div>
      </div>
  );
}