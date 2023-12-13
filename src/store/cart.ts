import { create } from 'zustand'

const useCart = create((set) => ({
  cart: [],
  addItem: (newItem: any) => set((state: any) => {
    state.cart.push(newItem)
    return state
  })
}))