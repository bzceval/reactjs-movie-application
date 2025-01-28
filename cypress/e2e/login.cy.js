describe('user-step-by-step-login-redirect', () => {
  it('home-page-redirect', () => {
    cy.visit('http://localhost:3000/')  
    cy.get("[data-test='logo']").should('be.visible').contains('Ninjas Movie App')
  })
  it('login-page-redirect', () => {
    cy.visit('http://localhost:3000/')  
    cy.get("[data-test='logo']").should('be.visible').contains('Ninjas Movie App')
    cy.get("[data-test='login-button']").click()
    cy.url().should('include', '/login')
  })
  it('user-login', () => {
    cy.visit('http://localhost:3000/')  
    cy.get("[data-test='logo']").should('be.visible').contains('Ninjas Movie App')
    cy.get("[data-test='login-button']").click()
    cy.url().should('include', '/login')
    cy.get("[data-test='login-header']").should('be.visible').contains('Login')
    cy.get("[data-test='email']").should('be.visible').type('busraaceval@gmail.com')
    cy.get("[data-test='password']").should('be.visible').type('cvl2727.')
    cy.get("[data-test='loginSbmtBtn']").click()
    cy.get("[data-test='loginDisplayName']").should('be.visible').contains('Busra Ceval')
  })
})