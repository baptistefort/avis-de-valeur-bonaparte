import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const ACCESS_PASSWORD = 'bonaparte2026';

interface AuthState {
  authenticated: boolean;
  email: string | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      authenticated: false,
      email: null,
      login: (email, password) => {
        if (password !== ACCESS_PASSWORD) return false;
        set({ authenticated: true, email });
        return true;
      },
      logout: () => set({ authenticated: false, email: null }),
    }),
    {
      name: 'bonaparte-auth',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        authenticated: state.authenticated,
        email: state.email,
      }),
    }
  )
);
