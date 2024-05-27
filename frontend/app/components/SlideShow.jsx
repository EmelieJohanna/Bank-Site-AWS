"use client";

import { useState, useEffect } from "react";

const images = [
  "/boat-bank.webp",
  "/frontpage-bank.webp",
  "/cottage-life.webp",
  "/happy-couple.webp",
];

export default function SlideShow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Change image per 5 s
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % images.length);
    }, 5000);

    // Clear the interval
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <img
        src={images[currentIndex]}
        alt="Slideshow image"
        style={{ width: "100%", height: "auto" }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "0%",
          transform: "translate(0%, -50%)",
          backgroundImage:
            "linear-gradient(to left, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)",
          height: "100%",
          color: "white",
          padding: "10px",
        }}
      >
        Welcome to Nexta Bank <br />- Where Your Financial Future Begins
      </div>
      <button
        onClick={prevImage}
        className="absolute bottom-0 left-4 transform -translate-y-1/2 bg-slate-900 bg-opacity-70 text-text2 mr-4 p-2"
      >
        Previous
      </button>
      <button
        onClick={nextImage}
        className="absolute bottom-0 right-4 transform -translate-y-1/2 bg-slate-900 bg-opacity-70 text-text2 p-2 z-20"
      >
        Next
      </button>
    </div>
  );
}
