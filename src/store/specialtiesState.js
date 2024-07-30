import { create } from "zustand";
import { getSpecialties } from "../services";
import { getMedics } from "../services";

export const useSpecialtiesState = create((set) => ({
  specialties: [],
  medics: [],
  fetchSpecialties: async () => {
    const response = await getSpecialties();
    set((state) => ({
      ...state,
      specialties: response
    }));
  },
  fetchMedics: async () => {
    const response = await getMedics();
    set((state) => ({
      ...state,
      medics: response
    }));
  }
}));
