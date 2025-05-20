import React from "react";
// import { Route, Routes } from 'react-router-dom'; // <- 'react-router-dom', ne samo 'react-router'
import TransitionComponent from "../components/Transition";
import DesignWorkPage from "../components/Pages/DesignWorkPage/DesignWorkPage";
import App from "../App";
import DevWorkPage from "../components/Pages/DevWorkPage/DevWorkPage";
import AboutPage from "../components/Pages/AboutPage/AboutPage";
import { Route, Routes } from "react-router";
import NotFoundPage from "../components/Pages/NotFoundPage/NotFoundPage";
import HomePage from "../components/Pages/HomePage/HomePage";
import ServicesPage from "../components/Pages/ServicesPage/ServicesPage";
import ContactPage from "../components/Pages/ContactPage/ContactPage";

export default function Router() {
  return (
    <Routes>
      <Route
        path="/"
        index
        element={
          <TransitionComponent>
            <HomePage />
          </TransitionComponent>
        }
      />
        <Route
          path="about"
          element={
            <TransitionComponent>
              <AboutPage />
            </TransitionComponent>
          }
        />
        <Route
          path="services"
          element={
            <TransitionComponent>
              <ServicesPage />
            </TransitionComponent>
          }
        />
        <Route
          path="dev-work"
          element={
            <TransitionComponent>
              <DevWorkPage />
            </TransitionComponent>
          }
        />
        <Route
          path="design-work"
          element={
            <TransitionComponent>
              <DesignWorkPage />
            </TransitionComponent>
          }
        />

          <Route
        path="/contact"
        index
        element={
          <TransitionComponent>
            <ContactPage />
          </TransitionComponent>
        }
      />
      

      <Route
        path="*"
        element={
          <TransitionComponent>
            <NotFoundPage />
          </TransitionComponent>
        }
      />
    </Routes>
  );
}
