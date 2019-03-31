// / <reference types="Cypress" />

describe('MainPage', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/index.htm');
    });

    it('GENRE button should has "search-panel__criteria-button_selected" class after click on it', () => {
        const genreButton = cy.get('#genre-button');

        genreButton.should('not.have.class', 'search-panel__criteria-button_selected');

        genreButton.click().should('have.class', 'search-panel__criteria-button_selected');
    });

    it('SEARCH button should be enabled after typing just 1 charachter in the input field', () => {
        const searchButton = cy.get('.search-panel__search-button');

        searchButton.should('be.disabled');

        cy.get('.search-panel__input').type('a');

        searchButton.should('be.enabled');
    });
});
