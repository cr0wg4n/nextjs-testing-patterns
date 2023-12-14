import Image from "next/image"

interface BookItemProps {
  id: string
  title: string
  image: string
  description: string
  price: number,
  author: string,
  onAddToCart: (id: string) => void
  onBuyNow: (id: string) => void
}

const BookItem: React.FC<BookItemProps> = ({
  id,
  title,
  image,
  description,
  price,
  author,
  onAddToCart,
  onBuyNow
}: BookItemProps) => {
  return (
    <div className="card w-96 border border-neutral-200 hover:scale-105 shadow-lg">
      <figure className="p-10">
        <Image src={image} alt="book" width={130} height={0} className="object-cover h-52"/>
      </figure>
      <div className="card-body bg-neutral-300 p-4 rounded-b-2xl">
        <div className="card-title truncate" data-testid="book-item-title">
          { title }
        </div>
        <div className="text-sm font-light" data-testid="book-item-author">
          { author }
        </div>
        <p className="line-clamp-3 text-sm mb-4" data-testid="book-item-description">{ description }</p>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row text-neutral">
            <div className="text-2xl font-bold" data-testid="book-item-price">
              { price }
            </div>
            <div className="text-sm font-light mt-2">
              $
            </div>
          </div>
          <div>
            <button 
              className="btn btn-secondary mr-2" 
              onClick={()=>onAddToCart(id)}
              data-testid="book-item-cart-button"
            >
              Add to Cart
            </button>
            <button 
              className="btn btn-accent text-white" 
              onClick={()=>onBuyNow(id)}
              data-testid="book-item-buy-button"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookItem