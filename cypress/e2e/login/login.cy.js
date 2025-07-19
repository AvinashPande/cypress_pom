
import loginAction from '../../PageObject/PageActions/LoginActions'



describe('template spec', () => {

  it('passes', () => {


    loginAction.getUrl();


    cy.log("helo world")

    loginAction.login("standard_user", "secret_sauce");
    cy.log("user login")

    cy.url().should("include", "https://www.saucedemo.com/v1/inventory.html")



  })
})