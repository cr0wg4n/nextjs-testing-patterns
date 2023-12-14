import { fireEvent, render, screen } from '@testing-library/react'
import { expect } from 'vitest'
import BookItem from './BookItem'

describe('BookItem.tsx', () => {
  const bookItemData = {
    id: 'id-1',
    title: 'La Agonía del Eros',
    description: 'any description',
    image: '/book-1.jpg',
    price: 99.99,
    author: 'Byung Chul Han'
  }
  
  it('should render all the props', async () => {
    // ARRANGE 
    const onBuyNow = vi.fn()
    const onAddToCart = vi.fn()
    render(<BookItem {...bookItemData} onAddToCart={onAddToCart} onBuyNow={onBuyNow}/>)
    // ACT
    const title = await screen.findByTestId('book-item-title')
    const author = await screen.findByTestId('book-item-author')
    const description = await screen.findByTestId('book-item-description')
    const price = await screen.findByTestId('book-item-price')
    const cartButton = await screen.findByTestId('book-item-cart-button')
    const buyNowButton = await screen.findByTestId('book-item-buy-button')
    // ASSERT
    expect(title).toBeInTheDocument()
    expect(title.textContent).toBe(bookItemData.title)
    expect(author).toBeInTheDocument()
    expect(author.textContent).toBe(bookItemData.author)
    expect(description).toBeInTheDocument()
    expect(description.textContent).toBe(bookItemData.description)
    expect(price).toBeInTheDocument()
    expect(price.textContent).toBe(String(bookItemData.price))
    expect(cartButton).toBeInTheDocument()
    expect(buyNowButton).toBeInTheDocument()
  })

  it('should call the function "onBuyNow" when user clicks the buy now button', async () => {
    // ARRANGE 
    const onBuyNow = vi.fn()
    const onAddToCart = vi.fn()
    render(<BookItem {...bookItemData} onAddToCart={onAddToCart} onBuyNow={onBuyNow}/>)
    // ACT
    fireEvent.click(await screen.getByTestId('book-item-buy-button'))
    // ASSERT
    expect(onBuyNow).toHaveBeenCalledOnce()
    expect(onBuyNow).toHaveBeenCalledWith(bookItemData.id)
  })


  it('should call the function "onAddToCart" when user clicks the buy now button', async () => {
    // ARRANGE 
    const onBuyNow = vi.fn()
    const onAddToCart = vi.fn()
    render(<BookItem {...bookItemData} onAddToCart={onAddToCart} onBuyNow={onBuyNow}/>)
    // ACT
    fireEvent.click(await screen.getByTestId('book-item-cart-button'))
    // ASSERT
    expect(onAddToCart).toHaveBeenCalledOnce()
    expect(onAddToCart).toHaveBeenCalledWith(bookItemData.id)
  })
})