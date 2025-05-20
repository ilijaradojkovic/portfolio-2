import React, { useEffect } from "react"; // <== Ovo ti je falilo
import "./ServicesPage.scss";
import Page from "../Page";
import gsap from "gsap";
import { usePageTransitionStore } from "../../../store/PageTransitionStore";
import ClickHint from "../../hints/ClickHint/ClickHint";

export default function ServicesPage() {
  const { isEntering, delay } = usePageTransitionStore();

  useEffect(() => {
    if (isEntering) {
      const sections = gsap.utils.toArray(".services-text");
      const newDelay = delay >= 2 ? delay : 0.3;

      gsap.from(sections, {
        y: 40,
        delay: newDelay,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power3.out",
      });
    }
  }, [isEntering, delay]);

  return (
    <>

      <Page requireDarkRoom={true} imageSrc={"/images/services.jpg"}>
        <div className="services-wrapper">
          <div className="services-text">
            <div className="text-header">
              <span className="text-icon">🚀</span> What I Do
            </div>
            <div className="text-content">
              I’m passionate about turning ideas into fully functional digital
              solutions — whether it’s developing robust RESTful APIs, designing
              intuitive user interfaces, or deploying secure and performant web
              applications. I enjoy working closely with clients to understand
              their needs and bring their vision to life, and I’m always ready
              to tackle complex technical challenges head-on.
            </div>
          </div>
          <div className="services-text">
            <div className="text-header">
              <span className="text-icon">🛠</span> Services I Offer
            </div>
            <div className="text-content">
              ✅ Full-Stack Web Development (Java, Spring Boot, React, Angular)
              <br />✅ REST API Development & Integration
              <br />✅ Front-End Development (React, Angular, HTML, CSS,
              JavaScript)
              <br />✅ Database Design & Management (SQL, NoSQL)
              <br />✅ Responsive Web Design (Mobile-first approach)
              <br />✅ Web Application Deployment & Hosting (Cloud-ready)
              <br />✅ E-commerce Platforms & CMS Development
              <br />✅ Performance Optimization & Scalability Enhancements
            </div>
          </div>
        </div>
      </Page>
    </>
  );
}
