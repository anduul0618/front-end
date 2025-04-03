import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div
      className="h-screen w-full bg-cover bg-center bg-fixed bg-no-repeat relative p-9"
      style={{ backgroundImage: "url('/nestlogo.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
      <div className="relative flex flex-col items-center justify-center h-full animate-fade-in">
        <p className="font-extrabold text-2xl md:text-6xl text-white drop-shadow-lg mb-4 tracking-wide">
          Aндуул 11в
        </p>
        <p className="text-lg md:text-2xl text-gray-300 mb-10">
          Бие Даалт
        </p>
        <div className="flex flex-wrap justify-center">
          {["lab1", "lab3", "lab4", "lab7"].map((lab, index) => (
            <button
              key={lab}
              className="h-12 min-w-[180px] bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-700 hover:to-purple-800 
                        text-white font-semibold rounded-full shadow-lg transform transition-all duration-300 
                        m-5 hover:scale-105 hover:shadow-lg hover:shadow-purple-900"
              onClick={() => router.push(`/${lab}`)}
            >
              {`Хичээл ${index + 1}`}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
