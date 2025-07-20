import { useEffect, useState } from "react";

export const CloudBackground = () => {
  const [clouds, setClouds] = useState([]);

  useEffect(() => {
    generateClouds();
    const handleResize = () => generateClouds();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateClouds = () => {
    const count = 8;
    const generated = [];
    for (let i = 0; i < count; i++) {
      generated.push({
        id: i,
        top: `${10 + Math.random() * 70}%`,
        left: `${Math.random() * 100}%`,
        scale: 0.8 + Math.random() * 0.6,
        speed: 60 + Math.random() * 50,
        delay: Math.random() * 10,
      });
    }
    setClouds(generated);
  };

  return (
    <div className="fixed inset-0 bg-sky-200 z-0 overflow-hidden pointer-events-none">
      {clouds.map((cloud) => (
        <div
          key={cloud.id}
          className="absolute cloud animate-cloud rounded-full"
          style={{
            top: cloud.top,
            left: cloud.left,
            width: "200px",
            height: "80px",
            transform: `translateX(0) scale(${cloud.scale})`,
            animationDuration: `${cloud.speed}s`,
            animationDelay: 0,
          }}
        />
      ))}
    </div>
  );
};