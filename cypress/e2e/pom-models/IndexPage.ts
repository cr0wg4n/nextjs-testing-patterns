export default class IndexPage {
  constructor( 
    private cy: Cypress.cy, 
    private url: string) {}

  goToInitialState() {
    this.cy.visit(this.url)
  }

  goToCartPage() {
    this.cy.get('[data-cy=cart-link]').click()
  }

  goToHomePage() {
    this.cy.get('[data-cy=home-link]').click()
  }

  getBookItemNumber(n: number) {
    return this.cy.get('[data-cy=book-item]').eq(n)
  }
  
  expectBooksInCartToBe(n: string) {
    this.cy.get('[data-cy=books-in-cart]').should('contain.text', n)
  }

  expectActualUrlToBe(url: string) {
    this.cy.url().should('eq', url)
  }
}