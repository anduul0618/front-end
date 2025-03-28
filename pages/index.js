import Image from "next/image";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return(
    <div className=" h-screen w-full bg-gray-600 p-9">
      <div className="flex justify-center items-center mt-10 mb-10"
      ><p className="font-bold text-4xl text-white">Anduul Biy Daalt</p>
      </div>
      <div className="flex justify-center items-center">
      <button className="h-12 w-36 bg-gray-500 hover:bg-gray-800 text-white font-semibold rounded-md shadow-sm m-5"
        onClick={() => router.push("/lab1")}
          >Hichel 1</button>
      <button className="h-12 w-36 bg-gray-500 hover:bg-gray-800 text-white font-semibold rounded-md shadow-sm m-5"
        onClick={() => router.push("/lab3")}
          >Hichel 2</button>
      <button className="h-12 w-36 bg-gray-500 hover:bg-gray-800 text-white font-semibold rounded-md shadow-sm m-5"
        onClick={() => router.push("/lab4")}
          >Hichel 3</button>
      <button className="h-12 w-36 bg-gray-500 hover:bg-gray-800 text-white font-semibold rounded-md shadow-sm m-5"
        onClick={() => router.push("/lab7")}
          >Hichel 4</button>
      </div>
    </div>
  ); 
}