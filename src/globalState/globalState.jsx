import { create } from 'zustand';

export const useStoreAuth = create(set => ({
  isAuth: false,
  toggleValue: value => set(() => ({ isAuth: value })),
}));
