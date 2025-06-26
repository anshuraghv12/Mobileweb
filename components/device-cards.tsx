"use client"; // Required for hooks in the app directory

import React from 'react';
import Link from "next/link";

export default function DeviceCardsSection() {
  // Device repair cards data
  const deviceCards = [
    { id: 1, name: "iPhone", image: "/assets/category/iPhone.png", route: "/devices/iphone" },
    { id: 2, name: "Samsung", image: "/assets/category/Samsung.jpg", route: "/devices/samsung" },
    { id: 3, name: "iPad", image: "/assets/category/ipad.jpg", route: "/devices/tablet" },
    { id: 4, name: "Game Consoles", image: "/assets/category/game console.jpg", route: "/devices/accessories" },
    { id: 5, name: "Mac", image: "/assets/category/mac.jpg", route: "/devices/laptop" },
    { id: 6, name: "Computer", image: "/assets/category/computer.jpg", route: "/devices/laptop" },
    { id: 7, name: "Tablet", image: "/assets/category/Tablet.png", route: "/devices/tablet" },
    { id: 8, name: "Other Phones", image: "/assets/category/other phone.jpg", route: "/devices/oneplus" },
  ];

  return (
    <div className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Discover All The Devices</h2>
          <p className="text-2xl font-bold text-red-600 mt-2">You Can Repair With Us!</p>
        </div>
        
        {/* Device cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {deviceCards.map((device) => (
            <Link 
              key={device.id}
              href={device.route}
              className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 block"
            >
              <div className="p-4">
                <img 
                  src={device.image} 
                  alt={device.name} 
                  className="w-full h-48 object-contain bg-gray-200 rounded-md"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-gray-900">{device.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}