/// <reference types="cypress" />
describe('page', () => {
  it.skip('works', () => {
    cy.visit('https://example.cypress.io')
  })

  it('does not retry', () => {
    cy.intercept('/').as('page')
    cy.visit('https://example.cypress.io')
    cy.wait('@page').should('have.property', 'foo')
  })


  it('is slow', () => {
    cy.intercept('/').as('page')
    cy.visit('https://example.cypress.io')
    cy.wait('@page').its('response.statusCode').should('eq', 500)
  })
})
