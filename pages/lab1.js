import {useState} from "react";

export default function home() {
  const [click, setClick] = useState(false);

  let string = "anduul";

  let number = 0;

  let boolean = true;

  return (
      <div onClick={() => setClick((test) => !test)}className="flex items-center flex-col h-screen justify-center">
        <p className="border rounded-xl p-7">Dont Click This At 3 Am</p>
        <p>{click == true ? "You just became an impostor in amongus" : ""}</p>
      </div>
  );
}