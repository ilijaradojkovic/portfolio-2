import React, { useEffect } from "react";
import "./DesignWorkPage.scss";
import Page from "../Page";
import { useRoomStore } from "../../../store/roomStore";
import gsap from "gsap";
import { usePageTransitionStore } from "../../../store/PageTransitionStore";
export default function DesignWorkPage() {
  const { roomType, setRoomType } = useRoomStore();
    const { isEntering, delay } = usePageTransitionStore();

  useEffect(() => {
    setRoomType("LightRoom");
  }, [roomType]);

      useEffect(() => {
    if (isEntering ) {
      const designSections = gsap.utils.toArray(".design-work-text");
      const newDelay = delay >= 2 ? delay : 0.3;

      gsap.from(designSections, {
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
      <Page requireDarkRoom={false} imageSrc={"/images/design.jpg"}>
        <div className="design-work-wrapper">
          <div className="design-work-text">
            <div className="text-header">
              <span className="text-icon">🖌️ </span>Dribble
            </div>
            <span className="text-tehnologies">
              <span className="text-tehnologies-item">FIGMA</span>
            </span>

            <div className="text-content">
              A curated collection of modern UI concepts designed in Figma
            </div>
          </div>

          <div className="design-work-text">
            <div className="text-header">
              <span className="text-icon">🐼 </span>
              <a
                href=" https://login-form-p12231.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Panda Login
              </a>
            </div>
            <span className="text-tehnologies">
              <span className="text-tehnologies-item">REACT</span>
            </span>

            <div className="text-content">
              Fun login form featuring animated pandas and playful validation
              UI.{" "}
            </div>
          </div>

          <div className="design-work-text">
            <div className="text-header">
              <span className="text-icon">🪟 </span>

              <a
                href=" https://login-form-1rf123e.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Slide Login
              </a>
            </div>
            <span className="text-tehnologies">
              <span className="text-tehnologies-item">REACT</span>
            </span>

            <div className="text-content">
              Sleek login interface with smooth sliding animations and
              transitions.
            </div>
          </div>

          <div className="design-work-text">
            <div className="text-header">
              <span className="text-icon">🪟 </span>

              <a
                href="https://login-12fs.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Slide Login 2
              </a>
            </div>
            <span className="text-tehnologies">
              <span className="text-tehnologies-item">REACT</span>
            </span>

            <div className="text-content">
              An upgraded sliding login form with enhanced UI elements and
              responsiveness.
            </div>
          </div>

          <div className="design-work-text">
            <div className="text-header">
              <span className="text-icon">🎞️ </span>
              <a
                href="https://slider-1rfef2.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Card Slider
              </a>
            </div>
            <span className="text-tehnologies">
              <span className="text-tehnologies-item">REACT</span>
            </span>

            <div className="text-content">
              A flexible image or content slider built for showcasing projects
              or media.
            </div>
          </div>
        </div>
      </Page>
    </div>
  );
}
