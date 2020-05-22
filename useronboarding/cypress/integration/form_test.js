describe('Form inputs', () => {

    it('Can navigate to the site', () => {

        cy.visit('http://localhost:3000/')
        cy.url().should('include', 'localhost')

    })

    it('Submit button is disabled by default', () => {

        cy.get('button')
        .should('be.disabled')

    })

    it('Can type a username', () => {

        cy.get('input[name="name"]')
        .type('Mister Person')

    })

    it('Name was correctly typed and displayed in the input box', () => {

        cy.get('input[name="name"]')
        .should('have.value', 'Mister Person')

    })

})

describe('Form validation', () => {

})

describe('Form submission', () => {

})