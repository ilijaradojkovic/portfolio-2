import { create } from "zustand";
export const useExperienceStore = create((set) => ({
  isExperienceReady: false,
  isModelVisible: false,
  isFirstTimeOnLightPage: true,
  isFirstTimeOnDarkPage: true,
  isHintShownDevWork: false,
  isHintShownDesignWork: false,

  setIsExperienceReady: () =>
    set({
      isExperienceReady: true,
    }),
  setIsModelVisible: () =>
    set({
      isModelVisible: true,
    }),

  setIsFirstTimeOnDarkPage: () =>
    set({
      isFirstTimeOnDarkPage: false,
    }),
  setIsFirstTimeOnLightPage: () =>
    set({
      isFirstTimeOnLightPage: false,
    }),
}));
