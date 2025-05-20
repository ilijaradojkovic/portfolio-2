import React, { useEffect, useRef, useState } from "react";
import "./ContactPage.scss";
import Page from "../Page";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { usePageTransitionStore } from "../../../store/PageTransitionStore";
import gsap from "gsap";
export default function ContactPage() {
  const [loading, setLoading] = useState(false);
    const { isEntering, delay } = usePageTransitionStore();
  
  const formRef = useRef();
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          toast.success("Success!");
          formRef.current.reset();
          setLoading(false);
        },
        (error) => {
          toast.error("Error: " + error.text);
          setLoading(false);
        }
      );
  };

    useEffect(() => {
    if (isEntering ) {
      const contactSections = gsap.utils.toArray(".contact-text");
      const newDelay = delay >= 2 ? delay : 0.3;

      gsap.from(contactSections, {
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
    <>
      <Page requireDarkRoom={true} imageSrc={"/images/contact.png"}>
        <div className="contact-wrapper">
          <div className="contact-text">
            <div className="text-header">
              <span className="text-icon">📧</span> Contact me
            </div>
            <div className="text-content">
              <form ref={formRef} onSubmit={sendEmail} className={"form"}>
                <label className={"label"}>
                  Name
                  <input type="text" name="name" required className={"input"} />
                </label>
                <label className={"label"}>
                  Email
                  <input
                    type="email"
                    name="email"
                    required
                    className={"input"}
                  />
                </label>

                <label className={"label"}>
                  Message
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className={"textarea"}
                  />
                </label>

                <button disabled={loading} type="submit" className={"button"}>
                  {loading ? <span className="spinner" /> : "Send"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </Page>
    </>
  );
}
