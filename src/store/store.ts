import { User } from '@/types/user';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useStore = create(
  persist(
    (set) => ({
      user: null,
      updateUser: (newUser: User) => set({ user: newUser }),
    }),
    {
      name: 'auth',
    }
  )
);
