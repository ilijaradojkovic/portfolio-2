/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 .\Light_Room_Target.glb 
*/

import React, { useEffect, useRef } from "react";
import { Html, useGLTF } from "@react-three/drei";
import { useUiStore } from "../../store/UiStore";
import { useNavigate } from "react-router";
import gsap from "gsap";
import { useExperienceStore } from "../../store/ExperienceStore";
import { useRoomStore } from "../../store/roomStore";
import { usePageTransitionStore } from "../../store/PageTransitionStore";
export function LightRoomTarget(props) {
  const { nodes, materials } = useGLTF(
    "/models/Light_Room/Light_Room_Target.glb"
  );
  const { openPanel } = useUiStore();
  const navigate = useNavigate();
  const devWorkAnimRef = useRef();
  const designWorkAnimRef = useRef();
  const {
    isExperienceReady,
    isModelVisible,
    isFirstTimeOnLightPage,
    setIsFirstTimeOnLightPage,
  } = useExperienceStore();
  const { delay } = usePageTransitionStore();
  const { roomType } = useRoomStore();
  const clickAnimRefs = useRef([]);

  const animationPairs = {
    devWork: {
      ref: devWorkAnimRef,
      scale: { x: -0.014, y: -0.012, z: -0.013 },
    },
    designWork: {
      ref: designWorkAnimRef,
      scale: { x: -0.014, y: -0.013, z: -0.018 },
    },
  };
  const hover = (typeAnim, isHovered) => {
    const { ref, scale } = animationPairs[typeAnim];
    gsap.to(ref.current.scale, {
      duration: 0.5,
      x: isHovered ? scale.x : 0,
      y: isHovered ? scale.y : 0,
      z: isHovered ? scale.z : 0,
    });
  };
  useEffect(() => {
    // čekaj da refovi budu mountovani

    if (!isModelVisible || !isFirstTimeOnLightPage || roomType !== "LightRoom")
      return;
    console.log("radim");
    const refs = clickAnimRefs.current.filter(Boolean);
    if (refs.length > 0) {
      console.log("Refs:", refs);
      // npr. gsap animacija od 0 do 100
      gsap.fromTo(
        refs.map((ref) => ref.children[0]), // targeting the <div> inside <Html>
        { opacity: 1 },
        {
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          delay: 2.5,
          onComplete: () => {
            setIsFirstTimeOnLightPage();
          },
        }
      );
    }
  }, [isModelVisible, roomType, isFirstTimeOnLightPage]);
  return (
    <>
      {isFirstTimeOnLightPage && (
        <>
          <Html
            position={[-2.906, 1.618, 1.301]}
            ref={(el) => (clickAnimRefs.current[0] = el)}
          >
            <div style={{ color: "black" }}>Click</div>
          </Html>

          <Html
            position={[0.022, 1.773, -2.864]}
            ref={(el) => (clickAnimRefs.current[1] = el)}
          >
            <div style={{ color: "black" }}>Click</div>
          </Html>
        </>
      )}
      <group {...props} dispose={null}>
        <mesh
          ref={devWorkAnimRef}
          geometry={nodes.Hover_Effect_Dev_Works.geometry}
          material={nodes.Hover_Effect_Dev_Works.material}
          position={[-2.906, 1.618, 1.301]}
          scale={0}
        />
        <mesh
          visible={false}
          onPointerOver={() => hover("devWork", true)}
          onPointerOut={() => hover("devWork", false)}
          onClick={() => {
            navigate("dev-work");
          }}
          geometry={nodes.Cube_Dev_Works.geometry}
          material={nodes.Cube_Dev_Works.material}
          position={[-2.905, 1.61, 1.305]}
          scale={[1, 0.755, 1.701]}
        />
        <mesh
          ref={designWorkAnimRef}
          geometry={nodes.Hover_Effect_Design_Works.geometry}
          material={nodes.Hover_Effect_Design_Works.material}
          position={[0.022, 1.773, -2.864]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0}
        />
        <mesh
          onPointerOver={() => hover("designWork", true)}
          onPointerOut={() => hover("designWork", false)}
          onClick={() => {
            navigate("design-work");
          }}
          visible={false}
          geometry={nodes.Cube_Design_Works.geometry}
          material={nodes.Cube_Design_Works.material}
          position={[0.024, 1.764, -2.861]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.988, 0.81, 2.354]}
        />
      </group>
    </>
  );
}

useGLTF.preload("/models/Light_Room/Light_Room_Target.glb");
