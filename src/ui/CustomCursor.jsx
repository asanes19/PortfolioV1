import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const leave = () => setIsVisible(false);
    const enter = () => setIsVisible(true);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, [isVisible]);

  // Smooth ring follow with requestAnimationFrame
  useEffect(() => {
    let animId;
    const animate = () => {
      setRingPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.15,
        y: prev.y + (pos.y - prev.y) * 0.15,
      }));
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [pos]);

  // Detect hoverable elements
  useEffect(() => {
    const hoverables = document.querySelectorAll(
      "a, button, [role='button'], input, textarea, select, [onclick]"
    );

    const onEnter = () => setIsHovering(true);
    const onLeave = () => setIsHovering(false);

    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  });

  if (!isVisible) return null;

  return (
    <>
      {/* Inner dot */}
      <div
        style={{
          position: "fixed",
          left: pos.x - 4,
          top: pos.y - 4,
          width: 8,
          height: 8,
          borderRadius: "50%",
          backgroundColor: "#334155",
          pointerEvents: "none",
          zIndex: 9999,
          transition: isHovering
            ? "transform 0.2s ease, background-color 0.2s ease"
            : "none",
          transform: isHovering ? "scale(0)" : "scale(1)",
        }}
      />
      {/* Outer ring */}
      <div
        style={{
          position: "fixed",
          left: ringPos.x - 20,
          top: ringPos.y - 20,
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "1.5px solid #94a3b8",
          pointerEvents: "none",
          zIndex: 9998,
          transition: isHovering
            ? "transform 0.25s ease, border-color 0.25s ease, background-color 0.25s ease"
            : "none",
          transform: isHovering ? "scale(1.5)" : "scale(1)",
          borderColor: isHovering ? "#334155" : "#94a3b8",
          backgroundColor: isHovering ? "rgba(51, 65, 85, 0.08)" : "transparent",
        }}
      />
    </>
  );
};

export default CustomCursor;
