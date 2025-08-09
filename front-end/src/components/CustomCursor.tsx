import { useEffect, useState } from "react";
import theme from "../theme";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 9999,
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.2s ease",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: position.x + 2,
          top: position.y + 2,
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          backgroundColor: theme.palette.secondary.main,
          transform: "translate(-50%, -50%)",
          transition: "all 0.1s ease",
        }}
      />
    </div>
  );
}
