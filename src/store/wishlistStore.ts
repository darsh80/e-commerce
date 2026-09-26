import { create } from "zustand";

type WishlistStore = {
  wishlistCount: number;
  setWishlistCount: (count: number) => void;
};

export const useWishlistStore = create<WishlistStore>((set) => ({
  wishlistCount: 0,
  setWishlistCount: (count) => set({ wishlistCount: count }),
}));