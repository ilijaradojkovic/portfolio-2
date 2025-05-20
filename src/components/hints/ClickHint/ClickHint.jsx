import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./ClickHint.scss";

export default function ClickHint({ top, left }) {
  const lettersRef = useRef([]);
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      lettersRef.current,
      { x: 0, y: 0, opacity: 1 },
      {
        x: () => gsap.utils.random(-100, 100),
        y: () => gsap.utils.random(-100, 100),
        opacity: 0,
        duration: 1,
        delay: 1,
        ease: "power3.out",
        stagger: 0.05,
        onComplete: () => {
          setIsShown(true);
        },
      }
    );
  }, []);

  return (
    <>
      {!isShown && (
        <div
          className="click-hint-wrapper"
          style={{ top, left, position: "absolute" }}
        >
          {Array.from("CLICK HERE 👇").map((char, i) => (
            <span
              key={i}
              ref={(el) => (lettersRef.current[i] = el)}
              className="click-hint-letter"
            >
              {char}
            </span>
          ))}
        </div>
      )}
    </>
  );
}
