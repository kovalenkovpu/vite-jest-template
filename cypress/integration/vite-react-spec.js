/// <reference types="cypress" />

describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("/");

    cy.contains("User data is loading...");

    // Looks CY automatically awaits for the text to appear in the DOM
    cy.contains("Hello John Doe");

    cy.findByRole("button", { name: /click to increase:/i })
      .click()
      .click();

    cy.get("button").contains("count is: 2");
  });
});
