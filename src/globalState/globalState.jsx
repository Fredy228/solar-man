import { create } from 'zustand';

export const useStoreAuth = create(set => ({
  isAuth: false,
  toggleValue: value => set(() => ({ isAuth: value })),
}));

export const useStoreUser = create(set => ({
  userData: {
    id: '',
    name: '',
    email: '',
    role: '',
  },
  setUser: value => set(() => ({ userData: { ...value } })),
}));
