describe('Form inputs', () => {

    it('Can navigate to the site', () => {

        cy.visit('http://localhost:3000/')
        cy.url().should('include', 'localhost')

    })

    it('Submit button is disabled by default', () => {

        cy.get('button')
        .should('be.disabled')

    })

})

describe('Form validation', () => {

})

describe('Form submission', () => {

})