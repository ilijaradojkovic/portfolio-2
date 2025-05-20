import React, { useEffect, useRef } from "react";
import "./AboutPage.scss";
import Page from "../Page";
import { usePageTransitionStore } from "../../../store/PageTransitionStore";
import gsap from "gsap";
import ClickHint from "../../hints/ClickHint/ClickHint";

export default function AboutPage() {
  const { isEntering, delay } = usePageTransitionStore();

  useEffect(() => {
    if (isEntering ) {
      const aboutSections = gsap.utils.toArray(".about-text");
      const newDelay = delay >= 2 ? delay : 0.3;

      gsap.from(aboutSections, {
        y: 40,
        delay: newDelay,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power3.out",
      });
    } // ⬅️ ključ da animira *SAMO* unutar aboutRef
  }, [isEntering, delay]);

  return (
    <div>
      
      <Page requireDarkRoom={true} imageSrc={"/images/about-me.jpg"}>
        <div className="about-wrapper" >
          <div className="about-text">
            <div className="text-header">
              <span className="text-icon">👨‍💻</span> About Me
            </div>
            <div className="text-content">
              I'm a Full-Stack Developer with deep expertise in
              <span className="text-highlight"> Java (Spring Boot)</span>,{" "}
              <span className="text-highlight">React</span>, and{" "}
              <span className="text-highlight">Angular</span>. With over{" "}
              <span className="text-highlight">5 years</span> of experience in
              full-stack development, I specialize in building scalable back-end
              systems using Spring Boot, as well as creating dynamic and
              responsive front-end applications with modern JavaScript
              frameworks.
            </div>
          </div>
          <div className="about-text">
            <div className="text-header">
              <span className="text-icon">🌍</span> Languages
            </div>
            <div className="text-content">
              Native <span className="text-highlight">Serbian</span> speaker
              Fluent in <span className="text-highlight">English</span> (both
              spoken and written)
            </div>
          </div>
        </div>
      </Page>
    </div>
  );
}
