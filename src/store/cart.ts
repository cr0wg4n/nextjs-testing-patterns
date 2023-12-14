import { create } from 'zustand'
import { books } from '@/data/books'
import { Book } from '@/types'


interface CartStore {
  books: Book[]
  cart: Book[]
  addBook: (newItem: Book) => void
  addToCart: (itemId: string) => void
  purchase: () => any[]
}

const useCart = create<CartStore>((set, get) => ({
  books: (() => books)(),
  cart: [],
  addBook: (newItem: any) => set((state) => {
    return {
      books: [
        ...state.books,
        newItem
      ]
    }
  }),
  addToCart: (itemId: any) => set((state) => {
    const book = state.books.find(({ id }: any) => id === itemId)
    return {
      cart: [
        ...state.cart,
        ...book ? [book] : []
      ]
    }
  }),
  purchase: () => {
    const cart = get().cart
    const purchase = []
    const books: any = {}
    cart.forEach(({ id }) => {
      if(!books[id]) {
        books[id] = 1
      } else {
        books[id] += 1
      }
    })
    for (const bookId in books) {
      const bookById = get().books.find(({ id }) => id === bookId)
      bookById && purchase.push({
        id: bookById.id,
        title: bookById.title,
        author: bookById.author,
        quantity: books[bookId],
        price: books[bookId] * bookById.price
      })
    }
    return purchase
  }
}))

export {
  useCart
}