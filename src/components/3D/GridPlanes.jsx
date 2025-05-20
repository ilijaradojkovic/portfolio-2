import { useFrame } from "@react-three/fiber";
import React, { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { useRoomStore } from "../../store/roomStore";
const Plane = ({ position, planeDepth, planeWidth }) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const { roomType, isTransitioning } = useRoomStore();

  useEffect(() => {
    if (!meshRef.current) return;

    const material = meshRef.current.material;
    const targetColor = roomType==='DarkRoom' ? "#ffffff" : "#000000";
    const targetColorObj = new THREE.Color(targetColor);

    gsap.to(material.color, {
      r: targetColorObj.r,
      g: targetColorObj.g,
      b: targetColorObj.b,
    });
    gsap.to(material.emissive, {
      r: targetColorObj.r,
      g: targetColorObj.g,
      b: targetColorObj.b,
    });
  }, [roomType]);

  const material = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: "white",
      emissive: "white",
      emissiveIntensity: 0.8,
      transparent: true,
      opacity: 0,
    });
  }, []);

  useFrame(() => {
    if (!meshRef.current) return;
    const targetOpacity = hovered ? 0.8 : 0;
    let lerpFactor = hovered ? 0.1 : 0.03;
    if(isTransitioning){
      lerpFactor=0.3
    }
    setOpacity(THREE.MathUtils.lerp(opacity, targetOpacity, lerpFactor));
    meshRef.current.material.opacity = opacity;
    meshRef.current.emissiveIntensity = hovered ? 1.5 : 0.8;
  });
  return (
    <mesh
      ref={meshRef}
      position={position}
      rotation={[-Math.PI / 2, 0, 0]}
      material={material}
      onPointerMove={() => {
        if(isTransitioning) return
        setHovered(true);
      }}
      onPointerOut={() => {
        setHovered(false);
      }}
    >
      <planeGeometry args={[planeDepth, planeWidth]} />
    </mesh>
  );
};

export default function GridPlanes({
  position,
  rows,
  columns,
  planeWidth,
  planeDepth,
  spacing,
  ref,
}) {
  const planes = useMemo(() => {
    const tempPlanes = [];
    const gridWidth = columns * (planeWidth + spacing) - spacing;
    const gridDepth = rows * (planeDepth + spacing) - spacing;
    const startX = planeWidth / 2 - gridWidth / 2;
    const startZ = planeDepth / 2 - gridDepth / 2;

    for (let row = 0; row < rows; row++) {
      for (let column = 0; column < columns; column++) {
        const x = startX + column * (planeWidth + spacing);
        const z = startZ + row * (planeDepth + spacing);
        tempPlanes.push(
          <Plane
            key={`${row}-${column}`}
            position={[x, -1.5, z]}
            planeDepth={planeDepth}
            planeWidth={planeWidth}
          />
        );
      }
    }

    // console.log("Planes generated:", tempPlanes); // <- Ovde dodaješ console.log
    return tempPlanes;
  }, [rows, columns, planeWidth, planeDepth, spacing]);

  return (
    <group ref={ref} position={position}>
      {planes}
    </group>
  );
}
