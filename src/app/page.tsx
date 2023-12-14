'use client'
import BookList from '@/components/book/BookList'
import { useCart } from '@/store/cart'
import { useRouter } from 'next/navigation'

export default function Home() {
  const { books, addToCart, cart } = useCart((state) => ({
    books: state.books,
    addToCart: state.addToCart,
    cart: state.cart
  }))

  const { push } = useRouter()
  
  const onAddToCartHandler = (id: string) => {
    addToCart(id)
  }

  const  onBuyNowHandler = (id: string) => {
    addToCart(id)
    push('/cart')
  }

  return (
    <main>
      <div className="flex flex-col justify-center items-center gap-8 mt-12">
        <BookList books={books} onAddToCart={onAddToCartHandler} onBuyNow={onBuyNowHandler}/>
        <div>
          Items in Cart: <span data-cy="books-in-cart">{ cart.length }</span>
        </div>
      </div>
    </main>
  )
}
