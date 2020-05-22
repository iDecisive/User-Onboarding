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

    it('Can type an email', () => {

        cy.get('input[name="email"]')
        .type('mister@person.com')

    })

    it('Can type a password', () => {

        cy.get('input[name="password"]')
        .type('aBcDeFg123')

    })

    it('Can check checkbox', () => {

        cy.get('input.terms').check()

    })

    it('Can submit form', () => {

        cy.get('button').click()
        //.should('be.enabled')

    })

})


describe('Form validation', () => {

    it('Email validation', () => {

        cy.get('input[name="email"]').clear()

        cy.get('.emailerr').contains('Must')

    })

})
