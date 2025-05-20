import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import Scene from "./Scene";
import { Canvas } from "@react-three/fiber";

import { OrbitControls, OrthographicCamera } from "@react-three/drei";
// import { useResponsiveStore } from "../stores/useResponsiveStore";
// import { useExperienceStore } from "../stores/experienceStore";
import { useRoomStore } from "./store/roomStore";
import { useUiStore } from "./store/UiStore";
import { useResponsiveStore } from "./store/ResponsiveStore";
import { useExperienceStore } from "./store/ExperienceStore";

const Experience = () => {
  const cameraRef = useRef();
  const pointerRef = useRef({ x: 0, y: 0 });
  const { isMobile } = useResponsiveStore();

  const {isExperienceReady}=useExperienceStore()


  const { roomType,isTransitioning,setIsTransitioning } = useRoomStore();

  const cameraPositions = {
    DarkRoom: {
      position: [8.993007055722195, 7.369970534877968, 7.523353745934667],
      rotation:[ -0.7550906017228067, 0.7222175082239006, 0.5565455749850822,]
    },
    LightRoom: {
      position: [36.295246986492437, 30.489664147895052, -39.91208682192778],
      rotation:[ -0.7550906017228067, 0.7222175082239006, 0.5565455749850822,]

    },
  };

  const zoomValues = {
    default: isMobile ? 30 : 60,
    animation: isMobile ? 25 : 50,
  };

  useEffect(() => {
    if (!cameraRef.current) return;

    const targetPosition = cameraPositions[roomType].position;
    gsap.set(cameraRef.current.position, {
      x: targetPosition[0],
      y: targetPosition[1],
      z: targetPosition[2],
    });
  }, [isExperienceReady]);

  useEffect(() => {
    if (!cameraRef.current) return;

    zoomValues.default = isMobile ? 30 : 60;
    zoomValues.animation = isMobile ? 25 : 50;

    cameraRef.current.zoom = zoomValues.default;
    cameraRef.current.updateProjectionMatrix();
  }, [isMobile]);

  useEffect(() => {
    if (!cameraRef.current) return;

    const targetPosition = cameraPositions[roomType].position;
   
    const t1 = gsap.timeline({
      onComplete: () => {
        setIsTransitioning(false);
      },
    });
    t1.to(cameraRef.current, {
      zoom: zoomValues.animation,
      duration: 1,
      ease: "power3.out",
      onStart: () => {
        setIsTransitioning(true);

        // setIsBeforeZooming(true);
      },
      onUpdate: () => {
        cameraRef.current.updateProjectionMatrix();
      },
    })
      .to(cameraRef.current.position, {
        x: targetPosition[0],
        y: targetPosition[1],
        z: targetPosition[2],
        duration: 1.5,
        ease: "power3.out",
      })
      .to(cameraRef.current, {
        zoom: zoomValues.default,
        duration: 1,
        ease: "power3.out",
        onStart: () => {
          // setIsBeforeZooming(false);
        },
        onUpdate: () => {
          cameraRef.current.updateProjectionMatrix();
        },
      });
  }, [roomType]);

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
      window.removeEventListener("touchmove", onTouchMove);
    };
  });



  return (
    <>
      <Canvas style={{ position: "fixed", zIndex: 1, top: 0, left: 0 }}>
        {/* <OrbitControls /> */}
        <OrthographicCamera
          ref={cameraRef}
          makeDefault
          position={cameraPositions.DarkRoom.position}
          rotation={cameraPositions.DarkRoom.rotation}
          zoom={zoomValues.default}
          near={isMobile ? -15: -5}
          far={1000}
        />
        <Scene
          camera={cameraRef}
          pointerRef={pointerRef}
          isExperienceReady={isExperienceReady}
        />
      </Canvas>
    </>
  );
};

export default Experience;
