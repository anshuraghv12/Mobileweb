// components/hero-section.tsx
"use client";
import React, { useState, useEffect } from "react";

export default function HeroSection() {
  const phoneModels = [
    {
      id: 1,
      name: "Galaxy Note",
      brand: "Samsung",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=800&fit=crop",
    },
    {
      id: 2,
      name: "Galaxy S24 Ultra",
      brand: "Samsung",
      image: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=400&h=800&fit=crop",
    },
    {
      id: 3,
      name: "iPhone 16 Pro",
      brand: "Apple",
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=800&fit=crop",
    },
    {
      id: 4,
      name: "Nothing Phone 2",
      brand: "Nothing",
      image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&h=800&fit=crop",
    },
    {
      id: 5,
      name: "OnePlus 12",
      brand: "OnePlus",
      image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=400&h=800&fit=crop",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showPhones, setShowPhones] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setShowPhones(true);
    }, 300);

    const interval = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % phoneModels.length);
          setIsAnimating(false);
        }, 600);
      }
    }, 3000);

    return () => {
      clearTimeout(startTimer);
      clearInterval(interval);
    };
  }, [isAnimating, phoneModels.length]);

  const getPhonePosition = (phoneIndex: number, currentIndex: number): number => {
    const totalPhones = phoneModels.length;
    return (phoneIndex - currentIndex + totalPhones) % totalPhones;
  };

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <div className="relative z-10 w-full pt-20 pb-12">
        <div className="phone-gallery-container">
          <div className="phones-row">
            {phoneModels.map((phone, index) => {
              const position = getPhonePosition(index, currentIndex);
              return (
                <div
                  key={phone.id}
                  className={`phone-item position-${position} ${showPhones ? "show" : ""} ${
                    isAnimating ? "transitioning" : ""
                  }`}
                  style={{
                    ["--delay" as any]: `${index * 0.15}s`,
                  }}
                >
                  <div className="phone-image-container">
                    <img src={phone.image} alt={phone.name} className="phone-image" />
                    <div className="phone-label">
                      <span className="phone-brand">{phone.brand}</span>
                      <span className="phone-name">{phone.name}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="relative z-10 text-center text-white mt-10">
        <h1 className="text-4xl font-bold">Fix Your Phone Like New Again</h1>
        <p className="mt-4 text-lg">Expert repairs • Genuine parts • Fast turnaround</p>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {phoneModels.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating && index !== currentIndex) {
                setIsAnimating(true);
                setTimeout(() => {
                  setCurrentIndex(index);
                  setIsAnimating(false);
                }, 400);
              }
            }}
            className={`nav-dot ${index === currentIndex ? "active" : ""}`}
          />
        ))}
      </div>

      <style jsx>{`
        .phone-gallery-container {
          position: relative;
          width: 100%;
          max-width: 1400px;
          height: 600px;
          margin: 0 auto;
          perspective: 1200px;
        }
        .phones-row {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          position: relative;
        }
        .phone-item {
          position: absolute;
          transform: translateY(100px) scale(0.7);
          opacity: 0;
          transition: all 0.8s ease;
          animation-delay: var(--delay);
        }
        .phone-item.show {
          opacity: 1;
        }
        .phone-item.transitioning {
          transition-duration: 0.6s;
        }
        .position-0 {
          left: 50%;
          transform: translateX(-50%) translateY(0) scale(1.2);
          z-index: 5;
        }
        .position-1 {
          left: 65%;
          transform: translateX(-50%) scale(0.95);
          z-index: 4;
        }
        .position-2 {
          left: 75%;
          transform: translateX(-50%) scale(0.8);
          z-index: 3;
        }
        .position-3 {
          left: 25%;
          transform: translateX(-50%) scale(0.8);
          z-index: 3;
        }
        .position-4 {
          left: 35%;
          transform: translateX(-50%) scale(0.95);
          z-index: 4;
        }
        .phone-image {
          width: 200px;
          height: 400px;
          object-fit: cover;
          border-radius: 20px;
          box-shadow: 0 20px 30px rgba(0, 0, 0, 0.5);
        }
        .nav-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          border: none;
          cursor: pointer;
        }
        .nav-dot.active {
          background: white;
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
}
