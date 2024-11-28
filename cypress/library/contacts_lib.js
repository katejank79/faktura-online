import Contacts from '../pages/contacts';

class LibContacts {
    creatingNewContact(contactName, contactICO, contactDIC, contactPhoneNumber, contactEmail, contactStreet, contactCity, contactPostCode) {
        Contacts.buttonContacts().click();
        Contacts.buttonAddContact().click();
        Contacts.contactName().type(contactName);
        Contacts.contactICO().type(contactICO);
        Contacts.contactDIC().type(contactDIC);
        Contacts.contactPhoneNumber().type(contactPhoneNumber);
        Contacts.contactEmail().type(contactEmail);
        Contacts.contactStreet().type(contactStreet);
        Contacts.contactCity().type(contactCity);
        Contacts.contactPostCode().type(contactPostCode);
        Contacts.buttonContactSaveChanges().click();



    }


}

module.exports = new LibContacts;
