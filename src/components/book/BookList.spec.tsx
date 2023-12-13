import BookList from './BookList';
import { render, screen } from '@testing-library/react'


describe('BookList.tsx', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should render the amount of books provided (3 books)', () => {
    vi.mock('./BookItem', () => ({
      default: () => <div data-testid="book-item"></div>
    }))
    const books: any[] = [
      {
        id: 'book-1',
        title: 'La Agonía del Eros',
        description: '',
        image: '/book-1.jpg',
        price: 99.99,
        author: 'Byung Chul Han'
      },
      {
        id: 'book-2',
        title: 'La Agonía del Eros',
        description: '',
        image: '/book-1.jpg',
        price: 99.99,
        author: 'Byung Chul Han'
      },
      {
        id: 'book-3',
        title: 'La Agonía del Eros',
        description: '',
        image: '/book-1.jpg',
        price: 99.99,
        author: 'Byung Chul Han'
      },
    ]
    const onBuyNow = vitest.fn()
    const onAddToCart = vitest.fn()

    render(<BookList books={books} onBuyNow={onBuyNow} onAddToCart={onAddToCart}/>)
    const booksRendered = screen.getAllByTestId('book-item')

    expect(booksRendered).toHaveLength(3)
  })
})