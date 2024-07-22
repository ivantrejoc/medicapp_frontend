import { create } from "zustand";
import { getAppointmentsById } from "../services";

export const useAppointmentsStore = create((set) => ({
  appointmentsById: [],
  fetchAppointmentsById: async (id) => {
    const response = await getAppointmentsById(id);
    set((state) => ({
      ...state,
      appointmentsById: response
    }));
  }
}));
