"use client";  

import React from "react";

const exampleData = [
    {
        id: 1,
        firstname: "Anduul",
        lastname: "Altankhaich",
        school: "NIT",
        job: "IT Specialist",
        alive: "true",
        items: [
            { id: 10, name: "-Tashuur" },
            { id: 11, name: "-Belt" }
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
        items:[
            { id: 12, name: "-0$"},
            { id: 13, name: "-Financial Debt"}
        ],
        height: 160,
        image:
        "https://www.blossomcostumes.com.au/media/catalog/product/cache/64f6a6444255333811681c0bc05bbb94/n/e/nerd_glasses.jpg"
    },
    {
        id: 3,
        firstname: "Anar",
        lastname: "Batsuh",
        school: "NIT",
        job: "Ultimate Dihler",
        alive: "true",
        items:[
            { id: 14, name: "-Mullet"},
            { id: 15, name: "-Mustache"}
        ],
        height: 135,
        image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGM0LX_CLlmKhm5MNcfePxCXjfbpDAnbXZYA&s"
    },
    {
        id: 4,
        firstname: "Chinguun",
        lastname: "Toivgoo",
        school: "NIT",
        job: "Unemployed",
        alive: "true",
        items:[
            { id: 16, name: "-Glasses"},
            { id: 17, name: "-Perm"}
        ],
        height: 155,
        image:
        "https://i1.sndcdn.com/artworks-000161472828-7t7buf-t500x500.jpg"
    },
    {
        id: 5,
        firstname: "Aidaulet",
        lastname: "Nurbolsin",
        school: "NIT",
        job: "IT Engineering Grandmaster",
        alive: "true",
        items: [
            { id: 10, name: "-Eye Lens" },
            { id: 11, name: "-Alchohol" }
        ],
        height: 185,
        image: 
        "https://images.augustman.com/wp-content/uploads/sites/5/2023/07/24164621/makeup-influencers-male-500x500.jpeg"
    },
    {
        id: 6,
        firstname: "Anand",
        lastname: "Altanhuyg",
        school: "NIT",
        job: "Dropshipper",
        alive: "true",
        items:[
            { id: 12, name: "-Toilet Paper"},
            { id: 13, name: "-Phone"}
        ],
        height: 180,
        image:
        "https://preview.redd.it/if-a-regular-skibidi-toilet-were-to-approach-you-what-would-v0-gu6wi78anb4d1.jpeg?auto=webp&s=32c883c85260e7695885116d02ca93e3ff891bfb"
    },
    {
        id: 7,
        firstname: "Ysui",
        lastname: "Enhbayr",
        school: "NIT",
        job: "Serial Killer",
        alive: "true",
        items:[
            { id: 14, name: "-Mjolnir"},
            { id: 15, name: "-Atomic Bomb"}
        ],
        height: 163,
        image:
        "https://www.canada.ca/content/dam/pch/images/campaigns/asian-heritage-month/2024/noteworthy/amy-go-500x500.jpg"
    },
    {
        id: 8,
        firstname: "Hulan",
        lastname: "Suhbold",
        school: "NIT",
        job: "Professional Boxer",
        alive: "true",
        items:[
            { id: 16, name: "-Boxing Glove"},
            { id: 17, name: "-Boxing Shoes"}
        ],
        height: 163,
        image:
        "https://img.huffingtonpost.com/asset/579b69822a00002e004f7408.jpeg?cache=aqTzLFJZCs&ops=scalefit_500_noupscale"
    },
    {
        id: 9,
        firstname: "Naranerdene",
        lastname: "Narka",
        school: "NIT",
        job: "Unemployed",
        alive: "true",
        items:[
            { id: 14, name: "-Dancing Kit"},
            { id: 15, name: "-Cheerleader Outfit"}
        ],
        height: 189,
        image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxscnX4xOu4vq5idrakJiakQyk-70eIC0q1A&s"
    },
    {
        id: 10,
        firstname: "Soyombo",
        lastname: "Chinguunjav",
        school: "NIT",
        job: "Therapist",
        alive: "true",
        items:[
            { id: 16, name: "-Wig"},
            { id: 17, name: "-Glasses"}
        ],
        height: 157,
        image:
        "https://i1.sndcdn.com/avatars-5IWG84ilEfhRzWMH-0GojXA-t500x500.jpg"
    },
    {
        id: 11,
        firstname: "Batpurev",
        lastname: "Batmunkh",
        school: "NIT",
        job: "IT engineering",
        alive: "true",
        items:[
            { id: 16, name: "-CP"},
            { id: 17, name: "-Anime"}
        ],
        height: 143,
        image:
        "https://i1.sndcdn.com/artworks-000189389833-5h1pwn-t500x500.jpg"
    },
    {
        id: 12,
        firstname: "Erhes",
        lastname: "Sanchir",
        school: "NIT",
        job: "Trinity Killer",
        alive: "true",
        items:[
            { id: 16, name: "-Hairtie"},
            { id: 17, name: "-OldMoney"}
        ],
        height: 154,
        image:
        "https://www.deleukstetaartenshop.nl/media/catalog/product/A/R/ARTICOR_13186_DISNEY_FIGUUR_VAIANA_MAUI_JPG.jpg"
    },
];
export default function Lab4() {
    return (
        <div className="bg-red-400 pt-10 m-0">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">11c Students</h1>
            <div className="grid lg:grid-cols-4 gap-10 justify-items-center">
    {exampleData.map((element) => (
        <div 
            key={element.id} 
            className="flex flex-col items-center p-8 bg-red-500 rounded-2xl border border-gray-800 hover:scale-105 transition-transform duration-300 ease-in-out"
        >
            <img 
                src={element.image} 
                alt={element.firstname} 
                className="rounded-lg w-55 h-48"
            />
            <div className="text-center mt-2">
                <p className="text-xl font-bold text-black">{element.firstname}</p>
                <p className="text-xl font-bold text-black">{element.lastname}</p>
                <p className="text-white">{element.job}</p>
                <p className="text-red-900">School: {element.school}</p>
                <p className="text-red-900">Height: {element.height}</p>
                <div>
                                <p className="text-red-700">ITEMS:</p>
                                <ul className="text-red-700">
                                    {element.items.map((items) => (
                                        <p>{items.name}</p>
                                    ))}
                                </ul>
                            </div>
            </div>
        </div>
    ))}
</div>
        </div> )}