import React, { useMemo } from "react";
import "./RoomToggleButton.scss";
import { useRoomStore } from "../../../store/roomStore";
import { useUiStore } from "../../../store/UiStore";
import { useExperienceStore } from "../../../store/ExperienceStore";
export default function RoomToggleButton() {
  const { roomType, setRoomType, isTransitioning } = useRoomStore();
  const { closePanel } = useUiStore();
  const {
    setIsFirstTimeOnDarkPage,
    setIsFirstTimeOnLightPage,
    isFirstTimeOnLightPage,
    isFirstTimeOnDarkPage,
  } = useExperienceStore();
  const className = useMemo(
    () => `toggle-button${roomType === "DarkRoom" ? "-dark" : "-light"}`,
    [roomType]
  );
  const handleToggle = (roomTypeValue) => {
    closePanel();
    if (!isTransitioning) {
      if (roomType === "DarkRoom") {
        console.log(roomType);
        setRoomType("LightRoom");
      } else {
        console.log(roomType);
        setRoomType("DarkRoom");
      }
    }
  };
  return (
    <button
      className={`toggle-button ${className}`}
      disabled={isTransitioning}
      onClick={() => handleToggle(null)}
    >
      <svg
        width="48"
        height="18"
        viewBox="0 0 31 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="9.99939"
          y="5.55542"
          width="10.6667"
          height="0.888892"
          fill="currentColor"
        />
        <rect
          x="20.2013"
          y="6"
          width="6.65685"
          height="6.65685"
          transform="rotate(-45 20.2013 6)"
          stroke="currentColor"
        />
        <rect
          x="1.29289"
          y="6"
          width="6.65685"
          height="6.65685"
          transform="rotate(-45 1.29289 6)"
          stroke="currentColor"
        />
      </svg>
    </button>
  );
}
