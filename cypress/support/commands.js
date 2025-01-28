// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", () => {
  cy.url().should("include", "/");
  cy.get("[data-test='logo']")
    .should("be.visible")
    .contains("Ninjas Movie App");
  cy.get("[data-test='login-button']").click();
  cy.url().should("include", "/login");
  cy.get("[data-test='login-header']").should("be.visible").contains("Login");
  cy.get("[data-test='email']")
    .should("be.visible")
    .type("busraaceval@gmail.com");
  cy.get("[data-test='password']").should("be.visible").type("cvl2727.");
  cy.get("[data-test='loginSbmtBtn']").click();
  cy.get("[data-test='loginDisplayName']")
    .should("be.visible")
    .contains("Busra Ceval");
});

Cypress.Commands.add("home", () => {
  cy.get("[data-test='searchBar']").type("white");
  cy.get("[data-test='searchBtn']").click({ force: true });
  cy.get("[data-test='movieCardTitle']").should("be.visible");
  cy.get("[data-test='movieCardImg']").should("be.visible");
  cy.get("[data-test='movieDetailBtn']")
    .should("be.visible")
    .first()
    .click({ force: true });
  cy.url().should("include", "/detail");
});
