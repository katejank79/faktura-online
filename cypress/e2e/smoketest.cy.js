import LibLogin from '../library/login_lib';
import Invoice from '../pages/invoice';
import LibInvoice from '../library/invoice_lib';
import LibContacts from '../library/contacts_lib';
import LibGeneral from '../library/general_lib';
import LibSpendings from '../library/spendings_lib';

describe('Vystavení faktury', () => {
    beforeEach(() => {
        cy.session('login', () => LibLogin.login());
        cy.visit('https://cy.fakturaonline.cz/faktura');
    });

    it.only('1. Vytvor fakturu', () => {
        LibGeneral.createStep('Filling basic information');
        LibInvoice.basicInformation('15 dnů', 'Bankovní převod', '123456789/0100', 'CZ6508000000192000145399', 'KOMBCZPP');
        LibGeneral.createStep('Add logo');
        LibInvoice.addingLogo();
        LibGeneral.createStep('Filling buyer information');
        LibInvoice.buyerInformation('123456789', 'Adam Novák', 'CZ123456789', 'U úlu  123', 'Praha 2', '12000')
        LibGeneral.createStep('Filling seller information');
        LibInvoice.sellerInformation('987654321', 'Roman Kováč', 'SK987654321', 'Brněnská 321', 'Rožňava', '01234', 'Slovensko')
        LibGeneral.createStep('Filling invoice items');
        LibInvoice.invoiceItems('20', 'den', 'Automation testing', '1500')
        LibGeneral.createStep('Click on button issue and download');
        Invoice.buttonIssueAndDownload().click().wait(3000);
        LibGeneral.createStep('Verify issue downloading');
        LibInvoice.verifyDownloadTasks();
        cy.percySnapshot('Create invoice');
          });

    it('2. Vytvor kontakt', () => {
        LibGeneral.createStep('Create new contact');
        LibContacts.creatingNewContact('Kateřina Janková', '789564123', 'CZ789564123', '777142345', 'katejank@seznam.cz', 'Vilémova 783', 'Lázně Bohdaneč', '53341');

    });

    it('3. Vytvor fakturu tebou vytvorenemu kontaktu', () => {
        LibGeneral.createStep('Create new contact');
        LibContacts.creatingNewContact('Kateřina Janková', '789564123', 'CZ789564123', '777142345', 'katejank@seznam.cz', 'Vilémova 783', 'Lázně Bohdaneč', '53341');
        LibGeneral.createStep('Create new invoice');
        LibInvoice.creatingNewInvoice();
        LibGeneral.createStep('Filling basic information');
        LibInvoice.basicInformation('15 dnů', 'Bankovní převod', '123456789/0100', 'CZ6508000000192000145399', 'KOMBCZPP');
        LibGeneral.createStep('Filling seller information');
        LibInvoice.sellerInformation('987654321', 'Roman Kováč', 'SK987654321', 'Brněnská 321', 'Rožňava', '01234', 'Slovensko')
        LibGeneral.createStep('Filling invoice items');
        LibInvoice.invoiceItems('20', 'den', 'Automation testing', '1500');
        //LibGeneral.createStep('Issue and send invoice');
        //LibInvoice.buttonIssueAndSend();





        //jquery
       // cy.get('html').then(() => {
         //  if(Cypress.$('#el-popover-8428').length > 0) {
           //    cy.get('[data-test="sequence_popover_cancel_button"]').click();

         //  }
           // })
        //cy.get('[data-test="invoice_number"]').type('12312').invoke('val').then((val) => {
          //  cy.get('[data-test="registration_number"]').click().should('have.value', val);
        //});



    })
})

;
