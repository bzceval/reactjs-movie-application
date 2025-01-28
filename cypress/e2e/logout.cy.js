describe("logout-test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.viewport(1200, 1200);
  });
  it("logout", () => {
    cy.login();
    cy.home();
    cy.detail();
    cy.get("[data-test='logout-button']").click({ force: true });
    cy.url().should('include', '/login')
  });
});
