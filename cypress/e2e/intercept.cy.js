import LibLogin from "../library/login_lib";

describe('Intercept test', () => {
    before(() => {
        cy.visit('https://cy.fakturaonline.cz/');
        LibLogin.login();

    });

    it('Intercept test', () => {
        cy.intercept('GET', /api\/invoices\/reports/).as('reports');
        cy.get('.navbar-navigation__link--reports').click().wait('@reports');


   });
});

