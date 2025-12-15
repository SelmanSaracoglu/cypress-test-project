import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Step 1: Visit the homepage
Given("I visit the CURA Healthcare home page", () => {
  cy.visit("https://katalon-demo-cura.herokuapp.com/");
});

// Step 2: Click make appointment to trigger login screen
When("I click on the Make Appointment button", () => {
  cy.get("#btn-make-appointment").click();
});

// Step 3: Enter Username from Fixture
When("I enter the {string} username from {string} fixture", (userKey: string, fileName: string) => {
  cy.fixture(fileName).then((data) => {
    cy.get("#txt-username").type(data[userKey].username);
  });
});

// Step 4: Enter Password from Fixture
When("I enter the {string} password from {string} fixture", (userKey: string, fileName: string) => {
  cy.fixture(fileName).then((data) => {
    cy.get("#txt-password").type(data[userKey].password);
  });
});

// Step 5: Click Login
When("I click the Login button", () => {
  cy.get("#btn-login").click();
});

// Step 6: Verification (Assertion)
Then("I should be redirected to the appointment page", () => {
  // Check if the URL contains verification
  cy.url().should("include", "#appointment");
  // Check if the header exists
  cy.get("h2").should("contain", "Make Appointment");
});

Then("I should see the error message {string}", (errorMessage: string) => {
  cy.get(".text-danger")
    .should("be.visible")
    .and("contain", errorMessage);
});