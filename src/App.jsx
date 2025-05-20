import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import Experience from "./Experience";
import { button, useControls } from "leva";
import {
  CameraControls,
  Environment,
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
  useHelper,
} from "@react-three/drei";
import * as THREE from "three";
import RoomToggleButton from "./components/Buttons/RoomToggleButton/RoomToggleButton";
import { useResponsiveStore } from "./store/ResponsiveStore";
import { Outlet } from "react-router";
import LoadingPage from "./components/Pages/LoadingPage/LoadingPage";
import Menu from "./components/Menu/Menu";
import Router from "./routes/Router";
import Overlay from "./components/Overlay/Overlay";
import Inicials from "./components/Inicials/Inicials";
import MailButton from "./components/Buttons/MailButton/MailButton";
import ClickHint from "./components/hints/ClickHint/ClickHint";
import { ToastContainer } from "react-toastify";

export default function App() {
  const pointerRef = useRef({ x: 0, y: 0 });
  const { updateDimensions } = useResponsiveStore();

  useEffect(() => {
    const onPointerMove = (e) => {
      pointerRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointerRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    const onTouchMove = (e) => {
      if (e.touches.length === 1) {
        pointerRef.current.x =
          (e.touches[0].clientX / window.innerWidth) * 2 - 1;
        pointerRef.current.y =
          -(e.touches[0].clientY / window.innerHeight) * 2 + 1;
      }
    };
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("touchmove", onTouchMove);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.addEventListener("touchmove", onTouchMove);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />
      <Router />

      <Inicials />
      <MailButton />
      <Overlay />
      <LoadingPage />
      <RoomToggleButton />
      <Experience pointerRef={pointerRef} />
    </>
  );
}
