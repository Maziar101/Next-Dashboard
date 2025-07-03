import { create } from "zustand";
import { createJSONStorage, PersistOptions } from "zustand/middleware";
import { persist } from "zustand/middleware";

interface User {
  name: {
    first: string;
  };
  phone: string;
}

interface UserState {
  user: object | null;
  token: string | null;
  login: (data: { user: User; token: string }) => void;
  logout: () => void;
}

type MyPersist = PersistOptions<UserState>;

export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      login: ({ user, token }) => set({ user, token }),
      logout: () => set({ user: null, token: null }),
    }),
    {
      name: "user",
      storage: createJSONStorage(() => localStorage),
    } as MyPersist
  )
);
