import IndexPage from "./pom-models/IndexPage"

describe('Index Page: Pom Version', () => {
  let indexPage = new IndexPage(cy, '/')

  beforeEach(() => {
    indexPage.goToInitialState()
  })

  it('should navigate to the site', () => {
    indexPage.expectActualUrlToBe('http://localhost:3000/')
  })

  it('should visit to the cart route' , () => {
    indexPage.goToCartPage()
    indexPage.expectActualUrlToBe('http://localhost:3000/cart')
  })

  it('should visit to the cart route and go back home' , () => {
    indexPage.goToCartPage()
    indexPage.expectActualUrlToBe('http://localhost:3000/cart')
    indexPage.goToHomePage()
    indexPage.expectActualUrlToBe('http://localhost:3000/')
  })

  it('should buy a book (the book number 2 in the list), 10 books', () => {
    indexPage.expectBooksInCartToBe('0')
    new Buffer(10).forEach(() => {
      indexPage.getBookItemNumber(1).find('[data-cy=book-item-cart-button]').click()
    })
    indexPage.expectBooksInCartToBe('10')
  })
})