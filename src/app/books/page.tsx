'use client'

import BookList from '@/components/book/BookList'
import { books } from '@/data/books'

export default function Home() {
  const onAddToCartHandler = (id: string) => {
    console.log(id)
  }
  const  onBuyNowHandler = (id: string) => {
    console.log(id)
  }
  return (
    <main>
      <div className="flex justify-center items-center gap-8 my-40">
        <BookList books={books} onAddToCart={onAddToCartHandler} onBuyNow={onBuyNowHandler}/>
      </div>
    </main>
  )
}
