"use client";
import { useEffect, useState } from "react";

export default function Hero() {
  const stats = [
    { label: "Population", value: "~12,000", arabic: "السكان" },
    { label: "Altitude", value: "850m", arabic: "الارتفاع" },
    { label: "Area", value: "15km²", arabic: "المساحة" },
    { label: "From Beirut", value: "25km", arabic: "عن بيروت" },
  ];

  // 👉 List of background images
  const images = [
    "/images/wadi1.png",
    "/images/wadi2.png",
    "/images/wadi3.png"
    ];

  const [currentImage, setCurrentImage] = useState(0);

  // Auto-change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden">
      {/* Background Images */}
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            i === currentImage ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
 <div className="relative z-10 text-white">
  <h1 className="text-5xl font-bold mb-8">
    Wadi Chahrour <span className="text-green-200">El Oulia</span>
  </h1>

  <div className="max-w-7xl mx-auto px-6"> {/* wider & padded */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((s, i) => (
        <div key={i} className="p-8 bg-white/20 backdrop-blur rounded-lg shadow-lg">
          <p className="text-3xl font-bold text-green-200">{s.value}</p>
          <p className="text-base">{s.label}</p>
          <p className="text-sm text-gray-200">{s.arabic}</p>
        </div>
      ))}
    </div>
  </div>
</div>

    </section>
  );
}
