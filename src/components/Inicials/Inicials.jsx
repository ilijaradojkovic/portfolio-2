import React, { useMemo } from 'react'
import './Inicials.scss'
import { useRoomStore } from '../../store/roomStore';
export default function Inicials() {
      const { roomType, setRoomType, isTransitioning } = useRoomStore();
        const className=useMemo(()=>`inicials${roomType==="DarkRoom"?"-dark":"-light"}`,[roomType])
  return (
    <div className={`inicials ${className}`}>IR</div>
  )
}
