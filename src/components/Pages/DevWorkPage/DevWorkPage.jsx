import React, { useEffect } from "react";
import "./DevWorkPage.scss";
import Page from "../Page";
import gsap from "gsap";
import { usePageTransitionStore } from "../../../store/PageTransitionStore";
import ClickHint from "../../hints/ClickHint/ClickHint";
export default function DevWorkPage() {
  const { isEntering, delay } = usePageTransitionStore();

  useEffect(() => {
    if (isEntering) {
      const devSections = gsap.utils.toArray(".dev-work-text");
      const newDelay = delay >= 2 ? delay : 0.3;

      gsap.from(devSections, {
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
      <Page requireDarkRoom={false} imageSrc={"/images/projects.jpg"}>
        <div className="dev-work-wrapper">
          <div className="dev-work-text">
            <div className="text-header">
              <ClickHint top={"-20%"} left={"0%"} />
              <span className="text-icon">⚽️</span>

              <a
                href="https://primavera-liga.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Football League
              </a>
            </div>
            <span className="text-tehnologies">
              <span className="text-tehnologies-item">REACT</span>
              <span className="text-tehnologies-item">FIREBASE</span>
            </span>

            <div className="text-content">
              A management dashboard for football leagues – teams, matches, and
              stats tracking.
            </div>
          </div>
          <div className="dev-work-text">
            <div className="text-header">
              <span className="text-icon">🚗</span>
              <a href="" target="_blank" rel="noopener noreferrer">
                Car Tracking Management <span className="text-nda">NDA</span><span className="text-no-link">no link</span>
              </a>
            
            </div>
            <span className="text-tehnologies">
              <span className="text-tehnologies-item">REACT</span>
              <span className="text-tehnologies-item">FIREBASE</span>
            </span>
            <div className="text-content">
              A web-based dashboard for monitoring and managing a fleet of
              vehicles in real time. The app allows users to track vehicle
              locations on an interactive map, view movement history, assign
              drivers, and receive maintenance alerts.
            </div>
          </div>

          <div className="dev-work-text">
            <div className="text-header">
              <span className="text-icon">🧾</span>
              <a href="" target="_blank" rel="noopener noreferrer">
                Invoice Management System <span className="text-nda">NDA</span><span className="text-no-link">no link</span>
              </a>
            </div>
            <span className="text-tehnologies">
              <span className="text-tehnologies-item">REACT</span>
              <span className="text-tehnologies-item">JAVA</span>
              <span className="text-tehnologies-item">MYSQL</span>
            </span>
            <div className="text-content">
              A tool for creating, sending, and managing invoices with tax logic
              and PDF,XLS import and exports.
            </div>
          </div>

          <div className="dev-work-text">
            <div className="text-header">
              <span className="text-icon">🏢</span>
              <a href="" target="_blank" rel="noopener noreferrer">
                Office Management Platform <span className="text-nda">NDA</span><span className="text-no-link">no link</span>
              </a>
            </div>
            <span className="text-tehnologies">
              <span className="text-tehnologies-item">ANGULAR</span>
              <span className="text-tehnologies-item">JAVA</span>
              <span className="text-tehnologies-item">POSTGRESQL</span>
            </span>
            <div className="text-content">
              Internal dashboard for managing teams, scheduling, and internal
              office operations.
            </div>
          </div>

          <div className="dev-work-text">
            <div className="text-header">
              <span className="text-icon">📱</span>
              <a href="" target="_blank" rel="noopener noreferrer">
                Social Media Micro Platform <span className="text-nda">NDA</span><span className="text-no-link">no link</span>
              </a>
            </div>
            <span className="text-tehnologies">
              <span className="text-tehnologies-item">REACT</span>
              <span className="text-tehnologies-item">FIREBASE</span>
            </span>
            <div className="text-content">
              A minimalist platform for posting updates, following users, and
              social interaction in real-time.
            </div>
          </div>

          <div className="dev-work-text">
            <div className="text-header">
              <span className="text-icon">🎰</span>
              <a href="" target="_blank" rel="noopener noreferrer">
                Aviator Betting Game <span className="text-nda">NDA</span><span className="text-no-link">no link</span>
              </a>
            </div>
            <span className="text-tehnologies">
              <span className="text-tehnologies-item">JAVA</span>
              <span className="text-tehnologies-item">REDIS</span>
              <span className="text-tehnologies-item">REACT</span>
            </span>
            <div className="text-content">
              A high-stakes multiplayer betting game inspired by Aviator, with
              real-time logic and secure payouts.
            </div>
          </div>

          <div className="dev-work-text">
            <div className="text-header">
              <span className="text-icon">🎨</span>
              <a
                href="https://character-custoization.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Character Customizer
              </a>
            </div>
            <span className="text-tehnologies">
              <span className="text-tehnologies-item">REACT</span>
              <span className="text-tehnologies-item">THREEJS</span>
            </span>

            <div className="text-content">
              Create your own 3D character with a fully interactive
              customization tool for appearance and clothing.
            </div>
          </div>

          <div className="dev-work-text">
            <div className="text-header">
              <span className="text-icon">🏠</span>
              <a
                href="https://nexter-ht.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agents
              </a>
            </div>
            <span className="text-tehnologies">
              <span className="text-tehnologies-item">REACT</span>
              <span className="text-tehnologies-item">FIREBASE</span>
            </span>

            <div className="text-content">
              A CRUD-based application for managing secret agents and missions.
            </div>
          </div>

          <div className="dev-work-text">
            <div className="text-header">
              <span className="text-icon">🧑‍💻</span>
              <a
                href="https://assasins-si.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Assassins Platform
              </a>
            </div>
            <span className="text-tehnologies">
              <span className="text-tehnologies-item">REACT</span>
              <span className="text-tehnologies-item">FIREBASE</span>
            </span>

            <div className="text-content">
              A fictional platform to manage game characters, extensions
            </div>
          </div>

          <div className="dev-work-text">
            <div className="text-header">
              <span className="text-icon">✈️</span>
              <a
                href="https://tours-sh.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tours
              </a>
            </div>
            <span className="text-tehnologies">
              <span className="text-tehnologies-item">REACT</span>
              <span className="text-tehnologies-item">FIREBASE</span>
            </span>

            <div className="text-content">
              Tour booking app with interactive maps and destination management.
            </div>
          </div>

          <div className="dev-work-text">
            <div className="text-header">
              <span className="text-icon">🏨</span>
              <a
                href="https://hotel-sh.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hotel
              </a>
            </div>
            <span className="text-tehnologies">
              <span className="text-tehnologies-item">REACT</span>
              <span className="text-tehnologies-item">FIREBASE</span>
            </span>

            <div className="text-content">
              Hotel reservation system with calendar views and filter options.
            </div>
          </div>

          <div className="dev-work-text">
            <div className="text-header">
              <span className="text-icon">👕</span>
              <a
                href="https://t-shirt-customization-1241.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                T-shirt Customizer
              </a>
            </div>
            <span className="text-tehnologies">
              <span className="text-tehnologies-item">REACT</span>
              <span className="text-tehnologies-item">THREEJS</span>
              <span className="text-tehnologies-item">BLENDER</span>
            </span>

            <div className="text-content">
              Customize your own t-shirt – choose colors, upload designs, and
              add text.
            </div>
          </div>

          <div className="dev-work-text">
            <div className="text-header">
              <span className="text-icon">🧑‍💼</span>
              <a
                href="https://personel-121s.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Personnel
              </a>
            </div>
            <span className="text-tehnologies">
              <span className="text-tehnologies-item">REACT</span>
            </span>

            <div className="text-content">
              Staff management system with employee listings, schedules, and
              performance tracking.
            </div>
          </div>

          <div className="dev-work-text">
            <div className="text-header">
              <span className="text-icon">🧑‍💻</span>
              <a
                href="https://portfolio-i-2.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sample Portfolio
              </a>
            </div>
            <span className="text-tehnologies">
              <span className="text-tehnologies-item">REACT</span>
            </span>

            <div className="text-content">
              A clean, responsive developer portfolio template with project
              previews and contact form.
            </div>
          </div>

          <div className="dev-work-text">
            <div className="text-header">
              <span className="text-icon">🌊 </span>
              <a
                href="https://sea-sh.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Animated Sea
              </a>
            </div>
            <span className="text-tehnologies">
              <span className="text-tehnologies-item">REACT</span>
              <span className="text-tehnologies-item">THREEJS</span>
            </span>

            <div className="text-content">
              Real-time ocean simulation with wave animations, reflections, and
              lighting.
            </div>
          </div>

          <div className="dev-work-text">
            <div className="text-header">
              <span className="text-icon">🌍 </span>
              <a
                href="https://tubular-treacle-e2fe0b.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Earth
              </a>
            </div>
            <span className="text-tehnologies">
              <span className="text-tehnologies-item">REACT</span>
              <span className="text-tehnologies-item">THREEJS</span>
            </span>

            <div className="text-content">
              A rotating 3D model of Earth with realistic textures and lighting.
            </div>
          </div>

          <div className="dev-work-text">
            <div className="text-header">
              <span className="text-icon">🎆 </span>
              <a
                href="https://rococo-alpaca-7c61a8.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Firework
              </a>
            </div>
            <span className="text-tehnologies">
              <span className="text-tehnologies-item">REACT</span>
              <span className="text-tehnologies-item">THREEJS</span>
            </span>

            <div className="text-content">
              Interactive fireworks powered by a custom particle system in a 3D
              environment.
            </div>
          </div>

          <div className="dev-work-text">
            <div className="text-header">
              <span className="text-icon">🌀 </span>
              <a
                href="https://holohrams-sh.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Holograms
              </a>
            </div>
            <span className="text-tehnologies">
              <span className="text-tehnologies-item">REACT</span>
              <span className="text-tehnologies-item">THREEJS</span>
            </span>

            <div className="text-content">
              WebGL-based experiments with holographic visuals and depth
              illusions.
            </div>
          </div>

          <div className="dev-work-text">
            <div className="text-header">
              <span className="text-icon">🌐 </span>
              <a
                href="https://animated-sphere-21312.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Animated Sphere
              </a>
            </div>
            <span className="text-tehnologies">
              <span className="text-tehnologies-item">REACT</span>
              <span className="text-tehnologies-item">THREEJS</span>
            </span>

            <div className="text-content">
              A dynamic 3D sphere with animation effects and responsive
              lighting.
            </div>
          </div>

          <div className="dev-work-text">
            <div className="text-header">
              <span className="text-icon">🎶 </span>
              <a
                href="https://music-sphere12.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Music Sphere
              </a>
            </div>
            <span className="text-tehnologies">
              <span className="text-tehnologies-item">REACT</span>
              <span className="text-tehnologies-item">THREEJS</span>
            </span>

            <div className="text-content">
              A 3D audio-reactive sphere that visualizes music in real time.
            </div>
          </div>
        </div>
      </Page>
    </div>
  );
}
