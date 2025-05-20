import { create } from "zustand";
export const useRoomStore=create((set)=>({
    roomType:'DarkRoom',
    isTransitioning:false,
    setRoomType:(roomValueType)=>set({
    
        roomType:roomValueType,
    }),
    setIsTransitioning:(value)=>set({
    
        isTransitioning:value,
    }),

    
}))