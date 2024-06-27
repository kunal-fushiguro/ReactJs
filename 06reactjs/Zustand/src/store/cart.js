import { create } from "zustand";

const cart = (set) => ({
  cart: [],
  addFn: (item) =>
    set((state) => ({
      cart: [item, ...state.cart],
    })),
  rmFn: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),
});

const useCart = create(cart);

export default useCart;
