"use client";
import React, { useEffect, useRef } from "react";

const TRAIL_LENGTH = 12;
const TRAIL_FADE = 1 / TRAIL_LENGTH;

export default function CustomCursor() {
  const trailRef = useRef<HTMLDivElement[]>([]);
  const mouse = useRef({ x: 0, y: 0 });
  const positions = useRef(Array.from({ length: TRAIL_LENGTH }, () => ({ x: 0, y: 0 })));

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      mouse.current = { x: e.clientX, y: e.clientY };
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    let animationId: number;
    const animate = () => {
      // Shift positions
      positions.current.pop();
      positions.current.unshift({ ...mouse.current });
      // Update DOM
      trailRef.current.forEach((el, i) => {
        if (el) {
          el.style.transform = `translate3d(${positions.current[i].x}px, ${positions.current[i].y}px, 0)`;
          el.style.opacity = `${1 - i * TRAIL_FADE}`;
        }
      });
      animationId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <>
      {Array.from({ length: TRAIL_LENGTH }).map((_, i) => (
        <div
          key={i}
          ref={el => { trailRef.current[i] = el!; }}
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            width: 18,
            height: 18,
            pointerEvents: "none",
            zIndex: 9999,
            color: "white",
            fontSize: 18,
            fontWeight: 700,
            userSelect: "none",
            transition: "opacity 0.1s linear",
            willChange: "transform, opacity",
          }}
        >
          +
        </div>
      ))}
    </>
  );
}