class LibGeneral {

    createStep(step) {
        cy.step(step);
    }

    createIntercept(method, url) {
        return cy.intercept(method, url);

    }

    createSession(sessionId, setUpFunc) {
        cy.session(sessionId, setUpFunc);

    }

}


module.exports = new LibGeneral();