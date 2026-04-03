import { useEffect, useState } from "react";

const GradientBackground = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCoords({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="hidden md:block fixed  inset-0 z-0 pointer-events-none"
      style={{
        background: `radial-gradient(600px at ${coords.x}px ${coords.y}px, rgba(100, 116, 139, 0.08), transparent 80%)`,
      }}
    />
  );
};

export default GradientBackground;
