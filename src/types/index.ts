export interface Book {
  id: string
  title: string
  image: string
  description: string
  price: number,
  author: string,
}

export interface CartItem {
  id: string
  title: string
  author: string
  quantity: number
  price: number
}