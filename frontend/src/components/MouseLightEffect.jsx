import { useState, useEffect } from "react";

export default function MouseDiscoEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [colorIndex, setColorIndex] = useState(0);

  const colors = [
    "rgba(255, 0, 0, 0.6)",    // Red
    "rgba(255, 165, 0, 0.6)",  // Orange
    "rgba(0, 255, 0, 0.6)",    // Green
    "rgba(0, 0, 255, 0.6)",    // Blue
    "rgba(75, 0, 130, 0.6)",   // Indigo
    "rgba(238, 130, 238, 0.6)" // Violet
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const colorInterval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length);
    }, 400); // Faster color transition for a real disco vibe

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(colorInterval);
    };
  }, []);

  return (
    <div>
      {/* Stronger & More Visible Disco Glow Effect */}
      <div
        className="fixed pointer-events-none transition-all duration-50"
        style={{
          top: position.y - 60,
          left: position.x - 60,
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          background: colors[colorIndex], // Smoothly changing colors
          filter: "blur(60px)", // More defined glow effect
          opacity: 0.9, // Higher visibility
          zIndex: 9999, // Keep it above all elements
          mixBlendMode: "screen", // Vibrant blending
        }}
      />
    </div>
  );
}
