import { create } from "zustand";
import { editHistory, getStories } from "../services/historyServices";

export const useStories = create((set, get) => ({
  stories: [],
  historyById: [],
  fetchStories: async () => {
    const response = await getStories();
    set((state) => ({
      ...state,
      stories: response
    }));
  },
  fetchStoryById: async (id) => {
    try {
      const state = await get();
      const story = await state.stories.find(
        (story) => story.patient_id === id
      );
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
