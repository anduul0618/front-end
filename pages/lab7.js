"use client";  

import React, { useState } from "react";

const exampleData = [
    {
        id: 1,
        firstname: "Anduul",
        lastname: "Altankhaich",
        school: "NIT",
        job: "IT Specialist",
        alive: "true",
        cardType: "rare",
        items: [
            { id: 10, name: "-M9" },
            { id: 11, name: "-Chaos" }
        ],
        height: 190,
        image: 
        "https://i1.sndcdn.com/artworks-Nuss1FlXwi9mEOqM-2J3qig-t500x500.jpg"
    },
    {
        id: 2,
        firstname: "Ayden",
        lastname: "Amarbayr",
        school: "NIT",
        job: "Janitor",
        alive: "true",  
        cardType:"free",
        items:[
            { id: 12, name: "-0$"},
            { id: 13, name: "-Financial Debt"}
        ],
        height: 160,
        image:
        "https://scontent.fuln1-2.fna.fbcdn.net/v/t1.15752-9/483914519_3907938179448701_6469545874869052460_n.jpg?stp=dst-jpg_p480x480_tt6&_nc_cat=104&ccb=1-7&_nc_sid=0024fc&_nc_ohc=s_BjrfNS9YQQ7kNvgEH9_fi&_nc_oc=AdgU8QJPrEud-7nkvfgpy-FZRHls2qLkqz8QUamdt08ZMy_sYnnud05f_P3Q8_eR8MM&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fuln1-2.fna&oh=03_Q7cD1wGrbm_DVUnRe42cQHY7qI-DrF8SrBWIuUdtNyUG-AnAFQ&oe=67FA526E"
    },
    {
        id: 3,
        firstname: "Anar",
        lastname: "Batsuh",
        school: "NIT",
        job: "Ultimate Emo",
        alive: "true",
        cardType:"epic",
        items:[
            { id: 14, name: "-Mullet"},
            { id: 15, name: "-Mustache"}
        ],
        height: 135,
        image:
        "https://scontent.fuln1-1.fna.fbcdn.net/v/t1.15752-9/484257505_23965323033056158_4512120239204279581_n.jpg?stp=dst-jpg_p480x480_tt6&_nc_cat=101&ccb=1-7&_nc_sid=0024fc&_nc_ohc=E0w4VgwPOWAQ7kNvgFejvnl&_nc_oc=AdhtJu_B7WBZvwNHNQn54RRyQJgNRywfMtlv0uCTMVoz5m8mfpjLW2vIQn9ZaFBOqBY&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fuln1-1.fna&oh=03_Q7cD1wEmg1TroXXkV24hD54HN0R3sx1vLAUAOvkRcy-vx8FvIA&oe=67FA49CB"
    },
    {
        id: 4,
        firstname: "Chinguun",
        lastname: "Toivgoo",
        school: "NIT",
        job: "Unemployed",
        alive: "true",
        cardType:"legendary",
        items:[
            { id: 16, name: "-Glasses"},
            { id: 17, name: "-Perm"}
        ],
        height: 155,
        image:
        "https://scontent.fuln1-2.fna.fbcdn.net/v/t1.15752-9/483156456_636616812451810_2288452974353455718_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_ohc=6OZ-E_FLlmQQ7kNvgGisT8O&_nc_oc=Adinh-Flc0Os_eqAS-cvI2J-ao03_QBfYYLKtOOsfJVw0x67CJOBKH-JGpDzlvFbB50&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fuln1-2.fna&oh=03_Q7cD1wFqyPZD95lbKDZtocAy4mdaDScCDheBv8N0I5DC6iQIKw&oe=67FA46C4"
    },
    {
        id: 5,
        firstname: "Aidaulet",
        lastname: "Nurbolsin",
        school: "NIT",
        job: "IT Engineering",
        alive: "true",
        cardType:"ultra common",
        items: [
            { id: 10, name: "-Eye Lens" },
            { id: 11, name: "-Wig" }
        ],
        height: 185,
        image: 
        "https://scontent.fuln1-2.fna.fbcdn.net/v/t1.15752-9/483141176_954329939806976_3758109266462212785_n.jpg?stp=dst-jpg_p480x480_tt6&_nc_cat=104&ccb=1-7&_nc_sid=0024fc&_nc_ohc=xZA0iSSDI70Q7kNvgE8LE6R&_nc_oc=AdgG_-QtOo3aBAYJ5hV0h6vFIhVo6GtwJnVaDV18kI0WGr5lVfMHcb9eLmvRYuOPENM&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fuln1-2.fna&oh=03_Q7cD1wFwwRRW9d1X3NXs85crsZQP3mcu5jbv3vOrPKeB2QUToQ&oe=67FA63ED"
    },
    {
        id: 6,
        firstname: "Anand",
        lastname: "Altanhuyg",
        school: "NIT",
        job: "Dropshipper",
        alive: "true",
        cardType:"1 of 1",
        items:[
            { id: 12, name: "-Toilet Paper"},
            { id: 13, name: "-Phone"}
        ],
        height: 180,
        image:
        "https://scontent.fuln1-2.fna.fbcdn.net/v/t1.15752-9/482699532_651092041190131_6546146277519269585_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=110&ccb=1-7&_nc_sid=0024fc&_nc_ohc=AFrk08XAVM8Q7kNvgGI2yWp&_nc_oc=AdgA-7L5WX6YbBpA8SFz0gLTMwwUxznunuHWYLQMvsHeix-jnD72D1fz0sIcy0tOHh8&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fuln1-2.fna&oh=03_Q7cD1wErZ7hjJax4Izd37CcZHqxaGMT54ti7wIS3AurwHoyRkg&oe=67FA6EF4"
    },
    {
        id: 7,
        firstname: "Ysui",
        lastname: "Enhbayr",
        school: "NIT",
        job: "Serial Killer",
        alive: "true",
        cardType:"rare",
        items:[
            { id: 14, name: "-Mjolnir"},
            { id: 15, name: "-Atomic Bomb"}
        ],
        height: 163,
        image:
        "https://scontent.fuln1-1.fna.fbcdn.net/v/t1.15752-9/483357018_627696673325150_6084318428298951416_n.jpg?stp=dst-jpg_p480x480_tt6&_nc_cat=101&ccb=1-7&_nc_sid=0024fc&_nc_ohc=ivyxALCARgEQ7kNvgFxGepQ&_nc_oc=AdgcKN5yg161cCHqVHzGeLNXoMmEumjIK1RC_UzYISit6zTgqL6yfMBhy7gKrBwxUtc&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fuln1-1.fna&oh=03_Q7cD1wFHLGFlxxX-MngNz8LFe8y5suyCbQ91NxiPrxtDGJB6bQ&oe=67FA3FC7"
    },
    {
        id: 8,
        firstname: "Hulan",
        lastname: "Suhbold",
        school: "NIT",
        job: "Professional Boxer",
        alive: "true",
        cardType:"common",
        items:[
            { id: 16, name: "-Boxing Glove"},
            { id: 17, name: "-Boxing Shoes"}
        ],
        height: 163,
        image:
        "https://scontent.fuln2-2.fna.fbcdn.net/v/t1.15752-9/482917550_1180974113377182_4332879285701636975_n.jpg?stp=dst-jpg_p480x480_tt6&_nc_cat=104&ccb=1-7&_nc_sid=0024fc&_nc_ohc=71WhIVir_FQQ7kNvgFLaUVR&_nc_oc=Adh_bB-IuuRATOhz4n5VvISvDv_jGkmeea8KnhUkwZML4uL_aTV3Ml9j_kVCVEMRxnM&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fuln2-2.fna&oh=03_Q7cD1wGHgtCfG48BFtpKqvJL39-zMXfwMJwDZyVgmw9b943cUg&oe=67FAF20B"
    },
    {
        id: 9,
        firstname: "Naranerdene",
        lastname: "Narka",
        school: "NIT",
        job: "Unemployed",
        alive: "true",
        cardType:"rare",
        items:[
            { id: 14, name: "-Dancing Kit"},
            { id: 15, name: "-Cheerleader Outfit"}
        ],
        height: 189,
        image:
        "https://scontent.fuln1-2.fna.fbcdn.net/v/t1.15752-9/482736535_1174232937759042_6675480875358325877_n.jpg?stp=dst-jpg_p480x480_tt6&_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_ohc=wBhoZGsgOmwQ7kNvgFD7dNC&_nc_oc=AdghFLLnQ0cHNHRR8rsYcQ-SUEMFQGbykVJZ8DObdC8S2gJn2Uqid5swYz6IeyD0Eig&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fuln1-2.fna&oh=03_Q7cD1wFKOr72tLDCSBR9X8NTjjBPfC1cHbhJuTiyVr31KuETzg&oe=67FA66F9"
    },
    {
        id: 10,
        firstname: "Soyombo",
        lastname: "Chinguunjav",
        school: "NIT",
        job: "Therapist",
        alive: "true",
        cardType:"common",
        items:[
            { id: 16, name: "-Wig"},
            { id: 17, name: "-Glasses"}
        ],
        height: 157,
        image:
        "https://scontent.fuln1-1.fna.fbcdn.net/v/t1.15752-9/484571456_1045702130732950_5687602795301940437_n.jpg?stp=dst-jpg_p480x480_tt6&_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_ohc=uCPyMyE-Ih8Q7kNvgEgbM7C&_nc_oc=AdgVnJG8XBLJrIvKSVSPY8jN8u5hgXmHsHkFzRHszlG0wvyXfBFVDxkcZRhrBho8l2U&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fuln1-1.fna&oh=03_Q7cD1wFK6EaDeywy1dvAYzCKl9U02b6HGNUsWLTn7ZOD4tnrpQ&oe=67FA44CC"
    },
    {
        id: 11,
        firstname: "Batpurev",
        lastname: "Batmunkh",
        school: "NIT",
        job: "IT engineering",
        alive: "true",
        cardType:"common",
        items:[
            { id: 16, name: "-CP"},
            { id: 17, name: "-Anime"}
        ],
        height: 143,
        image:
        "https://scontent.fuln1-1.fna.fbcdn.net/v/t1.15752-9/482937985_531634986198208_8510053614741006676_n.jpg?stp=dst-jpg_p480x480_tt6&_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_ohc=yl-cRyY56lwQ7kNvgGe8bA8&_nc_oc=AdiORPvFZqfX0-ViWENiODsSkX8E9cxcYG9rINrCfpyrYkeB9iWMeB2NY_ua1ncNaWg&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fuln1-1.fna&oh=03_Q7cD1wEKk0pqIvqEUp2TJD2HeONu3-PmXg7qZEkLQD6etk_BuA&oe=67FA6D16"
    },
    {
        id: 12,
        firstname: "Erhes",
        lastname: "Sanchir",
        school: "NIT",
        job: "Trinity Killer",
        alive: "true",
        cardType:"common",
        items:[
            { id: 16, name: "-Hairtie"},
            { id: 17, name: "-OldMoney"}
        ],
        height: 154,
        image: "https://scontent.fuln1-2.fna.fbcdn.net/v/t1.15752-9/482878713_998334362235543_1345856295346520788_n.jpg?stp=dst-jpg_p480x480_tt6&_nc_cat=110&ccb=1-7&_nc_sid=0024fc&_nc_ohc=asFEOluhxIkQ7kNvgF3Ngd9&_nc_oc=AdisjsBOyFUpqYOBO-UNC0EGO_7JqRkp2JKzqtrS3ZcoUanG-BBSzyk3pjjkXCI6icI&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fuln1-2.fna&oh=03_Q7cD1wHA-JylsEHp8q9PyVxB9SJlx4lf9fhG_msWAA20WsKwtQ&oe=67FA4D80"
    },
    {
        id: 13,
        firstname: "Hantushig",
        lastname: "Ganhuyg",
        school: "NIT",
        job: "NBA prospect",
        alive: "true",
        items:[
            { id: 16, name: "-Book"},
            { id: 17, name: "-Pen"}
        ],
        height: 213,
        image:
        "https://clipground.com/images/white-lock-icon-png-1.png"
    },
    {
        id: 14,
        firstname: "Telmuun",
        lastname: "Tserenbaljir",
        school: "NIT",
        job: "Otaku",
        alive: "true",
        items:[
            { id: 16, name: "-Anime"},
            { id: 17, name: "-Book"}
        ],
        height: 180,
        image:
        "https://clipground.com/images/white-lock-icon-png-1.png"
    },
    {
        id: 15,
        firstname: "Gunsan Ynjin",
        lastname: "Tsengel",
        school: "NIT",
        job: "Gamer",
        alive: "true",
        items:[
            { id: 16, name: "-Phone"},
            { id: 17, name: "-PC"}
        ],
        height: 164,
        image:
        "https://clipground.com/images/white-lock-icon-png-1.png"
    },
    {
        id: 16,
        firstname: "Serj Mydag",
        lastname: "Ganhuyg",
        school: "NIT",
        job: "Roblox Player",
        alive: "true",
        items:[
            { id: 16, name: "-Hairtie"},
            { id: 17, name: "-Bottle"}
        ],
        height: 160,
        image:
        "https://clipground.com/images/white-lock-icon-png-1.png"
    },
    {
        id: 17,
        firstname: "Oyunbilig",
        lastname: "Chimiddorj",
        school: "NIT",
        job: "IT Engineer",
        alive: "true",
        items:[
            { id: 16, name: "-Hairtie"},
            { id: 17, name: "-Glasses"}
        ],
        height: 170,
        image:
        "https://clipground.com/images/white-lock-icon-png-1.png"
    },
    {
        id: 18,
        firstname: "Azzaya",
        lastname: "Amarbat",
        school: "NIT",
        job: "IT Engineer",
        alive: "true",
        items:[
            { id: 16, name: "-Phone"},
            { id: 17, name: "-Glasses"}
        ],
        height: 165,
        image:
        "https://clipground.com/images/white-lock-icon-png-1.png"
    },
    {
        id: 19,
        firstname: "Minori",
        lastname: "Nguen",
        school: "NIT",
        job: "Violinist",
        alive: "true",
        items:[
            { id: 16, name: "-Violin"},
            { id: 17, name: "-42 robux"}
        ],
        height: 163,
        image:
        "https://clipground.com/images/white-lock-icon-png-1.png"
    },
    {
        id: 20,
        firstname: "Tsolmon",
        lastname: "Bat",
        school: "NIT",
        job: "Violinist 2",
        alive: "true",
        items:[
            { id: 16, name: "-Violin"},
            { id: 17, name: "-Phone"}
        ],
        height: 163,
        image: "https://clipground.com/images/white-lock-icon-png-1.png"
    },
]
export default function Lab4() {
    const [searchTerm, setSearchTerm] = useState("");
    const [isRow, setIsRow] = useState(false);
  
    const filteredData = exampleData.filter((person) =>
      person.firstname.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log(filteredData);
  
    return (
      <div className="bg-gray-400 pt-10 min-h-screen px-4">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">11c Students</h1>
        <div className="flex justify-between items-center mb-6 max-w-5xl mx-auto">
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 w-full max-w-md rounded-lg border border-gray-800 bg-white text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <button
            onClick={() => setIsRow(!isRow)}
            className="ml-4 px-4 py-2 bg-gray-800 text-white rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            Change Layout
          </button>
        </div>
        <div className={`grid ${isRow ? 'grid-cols-1' : 'lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1'} gap-10 justify-items-center`}>
          {filteredData.length > 0 ? (
            filteredData.map((element) => (
              <div
                key={element.id}
                className={`flex flex-col items-center p-6 bg-gray-500 rounded-2xl border border-gray-800 hover:scale-105 transition-transform duration-300 ease-in-out shadow-xl shadow-black ${isRow ? "flex-row w-full max-w-5xl p-4": "m-5"}`}
              >
                <div className={`flex ${isRow ? 'flex-row' : 'flex-col'} items-center`}>
                  <img
                    src={element.image}
                    alt={element.firstname}
                    className="rounded-lg w-40 h-40 object-cover mr-4 mb-4"
                  />
                  <div className="text-center mt-2">
                    <p className="text-lg font-bold text-black">{element.firstname} {element.lastname}</p>
                    <p className="text-white">{element.job}</p>
                    <p className="text-gray-900">School: {element.school}</p>
                    <p className="text-gray-900">Height: {element.height}</p>
                    <p className="text-gray-900">Card Type: {element.cardType}</p>
                    <div>
                      <p className="text-gray-700">ITEMS:</p>
                      <ul className="text-gray-700">
                        {element.items.map((item) => (
                          <p key={item.id}>{item.name}</p>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-900 col-span-4 text-lg">No results found.</p>
          )}
        </div>
      </div>
    );
  }
  