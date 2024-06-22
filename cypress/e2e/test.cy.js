import LibLogin from '../library/login_lib';
import Invoice from '../pages/invoice';
import LibInvoice from '../library/invoice_lib';

describe('Vystavení fakturu', () => {
    beforeEach(() => {
        cy.visit('https://cy.fakturaonline.cz/');
        LibLogin.login();

    });
        it('Vystavení faktury', () => {
            LibInvoice.basicInformation('15 dnů','Bankovní převod','123456789/0100', 'CZ6508000000192000145399', 'KOMBCZPP');
            Invoice.buttonInsertFile();



        });
})

