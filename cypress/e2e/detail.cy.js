describe("detail-test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.viewport(1200, 1200);
  });
  it("detail-page", () => {
    cy.login();
    cy.home();
    cy.get("[data-test='movieDetailImg']").should("be.visible");
    cy.get("[data-test='releaseDate']").should("be.visible");
    cy.get("[data-test='movieDetailTitle']").should("be.visible");
    cy.get("[data-test='movieDetailOverview']").should("be.visible");
  });
});
