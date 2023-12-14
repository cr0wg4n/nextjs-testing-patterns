'use client'
import BookList from '@/components/book/BookList'
import { useCart } from '@/store/cart'
import { useRouter } from 'next/navigation'

export default function Home() {
  const {books, addToCart} = useCart((state) => ({
    books: state.books,
    cart: state.cart,
    addToCart: state.addToCart
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
      <div className="flex justify-center items-center gap-8 my-40">
        <BookList books={books} onAddToCart={onAddToCartHandler} onBuyNow={onBuyNowHandler}/>
      </div>
    </main>
  )
}
