import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div className="h-screen w-full bg-gradient-to-r from-black via-gray-500 to-white p-9">
      <div className="flex justify-center items-center mt-10 mb-10">
        <p className="font-extrabold text-3xl text-white">Anduul Biy Daalt</p>
      </div>
      <div className="flex justify-center items-center flex-wrap">
        <button
          className="h-12 min-w-[160px] bg-gray-500 hover:bg-gray-700 text-white font-semibold rounded-full shadow-lg transform transition-all duration-300 m-5 hover:scale-105"
          onClick={() => router.push("/lab1")}
        >
          Hichel 1
        </button>
        <button
          className="h-12 min-w-[160px] bg-gray-500 hover:bg-gray-700 text-white font-semibold rounded-full shadow-lg transform transition-all duration-300 m-5 hover:scale-105"
          onClick={() => router.push("/lab3")}
        >
          Hichel 2
        </button>
        <button
          className="h-12 min-w-[160px] bg-gray-500 hover:bg-gray-700 text-white font-semibold rounded-full shadow-lg transform transition-all duration-300 m-5 hover:scale-105"
          onClick={() => router.push("/lab4")}
        >
          Hichel 3
        </button>
        <button
          className="h-12 min-w-[160px] bg-gray-500 hover:bg-gray-700 text-white font-semibold rounded-full shadow-lg transform transition-all duration-300 m-5 hover:scale-105"
          onClick={() => router.push("/lab7")}
        >
          Hichel 4
        </button>
      </div>
    </div>
  );
}
