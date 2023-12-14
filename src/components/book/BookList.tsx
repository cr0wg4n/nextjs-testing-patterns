import { Book } from "@/types"
import BookItem from "./BookItem"

interface BookListProps {
  books: Book[]
  onBuyNow: (id: string) => void
  onAddToCart: (id: string) => void
}

const BookList: React.FC<BookListProps> = ({ books, onAddToCart, onBuyNow }: BookListProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
      {
        books.map(({
          id,
          title,
          description,
          image,
          price,
          author
        }) => (
          <BookItem 
            key={id} 
            image={image} 
            id={id} 
            title={title} 
            price={price} 
            description={description} 
            author={author}
            onAddToCart={onAddToCart}
            onBuyNow={onBuyNow}
          />
        ))
      }
    </div>
  )
}

export default BookList