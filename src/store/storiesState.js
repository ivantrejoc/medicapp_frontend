import { create } from "zustand";
import { getStoryById } from "../services/historyServices";

export const useStories = create((set) => ({
  historyById: [],
  fetchStoryById: async (patientId) => {
    try {
      const story = await getStoryById(patientId);
      if (story) {
        set((state) => ({
          ...state,
          historyById: story
        }));
      }
    } catch (error) {
      console.error;
      return error.message;
    }
  }
}));
