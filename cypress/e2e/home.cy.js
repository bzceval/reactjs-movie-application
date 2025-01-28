describe("home-test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.viewport(1200, 1200);
  });
  it("home", () => {
    cy.login();
    cy.get("[data-test='searchBar']").type("white");
    cy.get("[data-test='searchBtn']").click({ force: true });
    cy.get("[data-test='movieCardTitle']").should("be.visible");
    cy.get("[data-test='movieCardImg']").should("be.visible");
    cy.get("[data-test='movieDetailBtn']")
      .should("be.visible")
      .first()
      .click({ force: true });
    cy.url().should('include', '/detail') 
  });
});
