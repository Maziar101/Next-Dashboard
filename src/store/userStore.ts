import { create } from "zustand";
import { PersistOptions } from "zustand/middleware";
import { persist } from "zustand/middleware";

interface UserState {
  user: object | null;
  token: string | null;
  login: (data: { user: object; token: string }) => void;
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
      storage: typeof window !== "undefined" ? localStorage : undefined,
    } as MyPersist
  )
);
