describe('Index Page', () => {
  beforeEach(() => {
    cy.visit('/')
    // or the command:
    // cy.visitHome()
  })

  it('should navigate to the site', () => {
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('should visit to the cart route' , () => {
    cy.get('[data-cy=cart-link]').click()
    cy.url().should('eq', 'http://localhost:3000/cart')
  })

  it('should visit to the cart route and go back home' , () => {
    cy.get('[data-cy=cart-link]').click()
    cy.url().should('eq', 'http://localhost:3000/cart')
    cy.get('[data-cy=home-link]').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('should buy a book (the book number 2 in the list), 10 books', () => {
    cy.get('[data-cy=books-in-cart]').should('contain','0')
    new Buffer(10).forEach(() => {
      cy.get('[data-cy=book-item]').eq(1).find('[data-cy=book-item-cart-button]')
        .click()
    })
    cy.get('[data-cy=books-in-cart]').should('contain','10')
  })
})
