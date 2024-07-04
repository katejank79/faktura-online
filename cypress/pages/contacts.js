class Contacts {
    buttonContacts = () => cy.get('.navbar-navigation__link--contact');
    buttonAddContact = () => cy.get('[data-test="add-contact-button"]');

    contactName = () => cy.get('[data-test="invoice_attributes_name"]');
    contactICO = () => cy.get('[data-test="vat"]');
    contactDIC = () => cy.get('[data-test="tax_number"]');
    contactPhoneNumber = () => cy.get('[data-test="phone"]');
    contactEmail = () => cy.get('[data-test="email"]');
    contactStreet = () => cy.get('[data-test="street"]');
    contactCity = () => cy.get('[data-test="city"]');
    contactPostCode = () => cy.get('[data-test="postcode"]');

    buttonContactSaveChanges = () => cy.get('[data-test="save-contact"]');

    tableRow = (companyName) => cy.contains('.el-table__row', companyName);
    buttonDeleteRow = (companyName) => this.tableRow(companyName).find('[data-test="delete_contact"]');







}


module.exports = new Contacts();