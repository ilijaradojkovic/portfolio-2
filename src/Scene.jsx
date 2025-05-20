import React, { Suspense, useEffect, useRef } from "react";
import { DarkRoom } from "./components/3D/Dark_Room";
import { DarkRoomTarget } from "./components/3D/Dark_Room_Target";
import { LightRoomTarget } from "./components/3D/Light_Room_Target";
import { useFrame, useThree } from "@react-three/fiber";
import GridPlanes from "./components/3D/GridPlanes";
import * as THREE from "three";
import { useRoomStore } from "./store/roomStore";
import gsap from "gsap";
import {  LightRoom } from "./components/3D/Light_Room";

export default function Scene({ pointerRef }) {
  const darkGroupRef = useRef();
  const lightGroupRef = useRef();
  const gridPlanesRef = useRef();
  const groupRotationRef = useRef(0);
  const darkRoomGroupPosition = new THREE.Vector3(0, 0, 0);
  const lightRoomGroupPosition = new THREE.Vector3(0, 0.079, -70);
  const { camera } = useThree();
  const { roomType, isTransitioning } = useRoomStore();

  useEffect(() => {
    if (!gridPlanesRef.current) return;
    const targetPosition =
      roomType === "DarkRoom" ? darkRoomGroupPosition : lightRoomGroupPosition;
    gsap.to(gridPlanesRef.current.position, {
      duration: 1,
      x: targetPosition.x,
      y: targetPosition.y,
      z: targetPosition.z,
      delay: 1,
    });
  }, [roomType]);

  useFrame(() => {
    if (
      !darkGroupRef.current ||
      !lightGroupRef.current ||
      !gridPlanesRef.current
    )
      return;

    if (camera.current) {
      console.log(camera.current.position);
      // console.log(camera.current.rotation);
      console.log(camera.current.zoom);
    }

    const targetRotation = pointerRef.current.x * Math.PI * 0.032;
    groupRotationRef.current = THREE.MathUtils.lerp(
      groupRotationRef.current,
      targetRotation,
      0.1
    );

    darkGroupRef.current.rotation.y = groupRotationRef.current;
    lightGroupRef.current.rotation.y = groupRotationRef.current;
    gridPlanesRef.current.rotation.y = groupRotationRef.current;
  });
  return (
    <Suspense>
      <group ref={darkGroupRef} position={darkRoomGroupPosition}>
        <DarkRoom />
        <DarkRoomTarget />
      </group>
      <group ref={lightGroupRef} position={lightRoomGroupPosition}>
        {/* <LightRoom/> */}
        <LightRoom/>
        <LightRoomTarget /> 
      </group>

      <group ref={gridPlanesRef}>
        <GridPlanes
          color={"white"}
          position={[0, 1.7, 0]}
          rows={15}
          columns={15}
          planeWidth={5}
          planeDepth={5}
          spacing={0}
        />
      </group>
    </Suspense>
  );
}
