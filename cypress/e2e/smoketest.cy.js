import LibLogin from '../library/login_lib';
import Invoice from '../pages/invoice';
import LibInvoice from '../library/invoice_lib';
import LibContacts from '../library/contacts_lib';

describe('Vystavení fakturu', () => {
    beforeEach(() => {
        cy.session('login', () => LibLogin.login());
        cy.visit('https://cy.fakturaonline.cz/faktura');
    });

    it('1. Vytvor fakturu', () => {
        LibInvoice.basicInformation('15 dnů', 'Bankovní převod', '123456789/0100', 'CZ6508000000192000145399', 'KOMBCZPP');
        //Invoice.buttonInsertFile().selectFile('cypress/fixtures/zuby.jpeg',{force:true});
        LibInvoice.buyerInformation('123456789', 'Adam Novák', 'CZ123456789', 'U úlu  123', 'Praha 2', '12000')
        LibInvoice.sellerInformation('987654321', 'Roman Kováč', 'SK987654321', 'Brněnská 321', 'Rožňava', '01234', 'Slovensko')
        LibInvoice.invoiceItems('20', 'den', 'Automation testing', '1500')
        Invoice.buttonIssueAndDownload().click().wait(3000);
        LibInvoice.verifyDownloadTasks();
    });

    it.only('2. Vytvor kontakt', () => {
        LibContacts.creatingNewContact('Kateřina Janková', '789564123', 'CZ789564123', '777142345', 'katejank@seznam.cz', 'Vilémova 783', 'Lázně Bohdaneč', '53341');
    });

    it('3. Vytvor fakturu tebou vytvorenemu kontaktu', () => {


    })
})

;
