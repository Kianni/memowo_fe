/// <reference types="cypress" />

describe('App Integration Test', () => {
  it('fetches words from backend and updates state on button click', () => {
    // Visit the app
    cy.visit(`${process.env.REACT_APP_FRONTEND_URL}`); // Adjust the URL based on your local setup

    // Simulate button click to fetch words
    cy.get('button').contains('Learn Sea Creatures').click();

    // Wait for the words to be displayed
    cy.contains('anguila').should('be.visible');
  });
});
