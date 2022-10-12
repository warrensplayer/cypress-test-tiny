/// <reference types="cypress" />
describe('page', () => {
  it.skip('works', () => {
    cy.visit('https://example.cypress.io')
  })


  //Examples for https://github.com/cypress-io/cypress/issues/24164

  // Example that does not retry
  it('does not retry', () => {
    cy.intercept('/').as('page')
    cy.visit('https://example.cypress.io')
    cy.wait('@page').should('have.property', 'foo')
  })


  // Example that retries when the documentation indicates that it should not
  // https://docs.cypress.io/api/commands/wait#Assertions
  it('is slow', () => {
    cy.intercept('/').as('page')
    cy.visit('https://example.cypress.io')
    cy.wait('@page').its('response.statusCode').should('eq', 500)
  })
})
