"use client";

import { useEffect } from "react";

export default function Lab5() {
  useEffect(() => {
    const scrollLinks = document.querySelectorAll("[data-scroll-target]");
    scrollLinks.forEach((link) => {
      link.addEventListener("click", () => {
        const targetId = link.getAttribute("data-scroll-target");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        } else {
          console.error(`Target element with ID ${targetId} not found.`);
        }
      });
    });
  }, []);

  return (
    <div>
      <header className="bg-white h-[100px] flex justify-between items-center px-6 md:px-12 sticky top-0 z-50">
        <img
          className="w-[120px] md:w-[160px] ml-4 md:ml-[150px]"
          src="https://www.toki.mn/wp-content/uploads/2022/08/Asset-1@3x.png"
          alt="Logo"
        />
        <nav className="flex space-x-5 mr-6 md:mr-[110px]">
          <button
            className="text-gray-800 font-bold hover:text-orange-400 cursor-pointer"
            data-scroll-target="#section1"
          >
            Services
          </button>
          <p
            className="text-gray-800 font-bold hover:text-orange-400 cursor-pointer"
            data-scroll-target="#section2"
          >
            Advantages
          </p>
          <p
            className="text-gray-800 font-bold hover:text-orange-400 cursor-pointer"
            data-scroll-target="#section3"
          >
            News
          </p>
          <p
            className="text-gray-800 font-bold hover:text-orange-400 cursor-pointer"
            data-scroll-target="#section4"
          >
            Collaborate
          </p>
        </nav>
      </header>

      <section className="flex justify-center items-center bg-orange-200 h-screen w-full text-center px-4">
  <div>
    <p className="font-light text-black text-2xl md:text-3xl mb-6">
      Get Your Required Services in One Place...
    </p>
    <img
      className="w-full max-w-md md:max-w-xl mb-6 mx-auto"
      src="https://www.toki.mn/wp-content/uploads/2020/06/Artboard-1-2.png"
      alt="Main"
    />
    <div className="flex gap-4 justify-center items-center">
      <img
        className="h-[60px] md:h-[100px] w-auto"
        src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg"
        alt="App Store"
      />
      <img
        className="h-[15px] md:h-[30px] w-auto"
        src="https://freelogopng.com/images/all_img/1664287128google-play-store-logo-png.png"
        alt="Play Store"
      />
    </div>
  </div>
</section>


      <section
        className="bg-gray-200 w-full py-16 px-6 flex flex-col md:flex-row items-center justify-center gap-10 h-screen"
        id="section1"
      >
        <img
          className="w-full max-w-xl"
          src="https://www.toki.mn/wp-content/uploads/2020/06/Artboard-2.png"
          alt="Service Image"
        />
        <div className="text-left max-w-lg">
          <h2 className="text-[#FBBF24] text-2xl md:text-3xl font-semibold mb-4">
            Toki Service
          </h2>
          <p className="text-gray-800 leading-relaxed">
            Request a taxi, order coffee, food, buy mobile data, pay bills, play
            games, and top up your account all in one place with ease.
          </p>
        </div>
      </section>

      <section
        className="bg-orange-200 w-full py-16 px-6 flex flex-col-reverse md:flex-row items-center justify-center gap-10 h-screen"
        id="section2"
      >
        <div className="text-left max-w-lg md:text-right">
          <h2 className="text-orange-400 text-2xl md:text-3xl font-semibold mb-4">
            Toki Pay
          </h2>
          <p className="text-gray-800 leading-relaxed">
            Toki Pay is a brand new digital wallet that turns your real wallet
            into a digital one. Connect all your bank cards, make payments, and
            store your loyalty cards and documents in one place.
          </p>
        </div>
        <img
          className="w-full max-w-xl"
          src="https://www.toki.mn/wp-content/uploads/2020/06/Artboard-3.png"
          alt="Toki Pay"
        />
      </section>

      <section
        className="bg-gray-200 w-full py-16 px-6 flex flex-col md:flex-row items-center justify-center gap-10 h-screen"
        id="section3"
      >
        <img
          className="w-full max-w-xl"
          src="https://www.toki.mn/wp-content/uploads/2020/06/Artboard-4.png"
          alt="Shop"
        />
        <div className="text-left max-w-lg">
          <h2 className="text-orange-400 text-2xl md:text-3xl font-semibold mb-4">
            Toki Shop
          </h2>
          <p className="text-gray-800 leading-relaxed">
            You can easily browse and purchase your desired products directly
            from authorized shops in one place.
          </p>
        </div>
      </section>

      <section
        className="bg-white w-full py-16 px-6 flex flex-col items-center space-y-6 text-center"
        id="section4"
      >
        <p className="text-orange-400 text-2xl md:text-3xl font-semibold">
          Toki App is Here to Help You Every Day
        </p>
        <p className="text-gray-800 max-w-2xl">
          Toki is an all-in-one app designed to make your daily life easier
          by providing all the essential services in one place.
        </p>
      </section>

      <section className="bg-orange-200 w-full py-10 flex justify-center items-center">
        <div className="bg-amber-500 rounded-full p-4 px-8 font-bold cursor-pointer">
          ADVANTAGES
        </div>
      </section>

      <footer className="bg-black w-full py-10 px-6 md:px-20 flex flex-col md:flex-row justify-between items-start md:items-center text-sm space-y-6 md:space-y-0">
        <img
          className="w-[120px]"
          src="https://www.toki.mn/wp-content/uploads/2022/08/Asset-1@3x.png"
          alt="Logo"
        />
        <div className="space-y-1 text-gray-400">
          <p className="hover:text-orange-200 cursor-pointer">FAQ</p>
          <p>8th Floor, Central Tower, 8th Khoroo, Sukhbaatar District</p>
          <p>77074477, 4477 info@toki.mn</p>
          <p>Copyright © 2022 | Toki.mn</p>
        </div>
        <div className="text-gray-400 hover:text-orange-200 cursor-pointer">
          Privacy
        </div>
      </footer>
    </div>
  );
}
