import Invoice from "../pages/invoice";

class LibInvoice {
    basicInformation(dueDate,paymentMethod,bankAccountNumber,IBAN,SWIFT) {
        Invoice.invoiceType().click();
        Invoice.inputInvIssuedBy().type('Kateřina Janková');
        Invoice.invDueDate().click();
        Invoice.invDueDateSelect(dueDate).click({force:true});
        Invoice.invPaymentMethod().click();
        Invoice.invDueDateSelect(paymentMethod).click({force:true});
        Invoice.inputBankAccountNumber().type(bankAccountNumber);
        Invoice.checkboxShowIBAN().click();
        Invoice.inputIBAN().type(IBAN);
        Invoice.inputSWIFTcode().type(SWIFT);

        };

    generalSettings() {
        Invoice.invCurrency


    }

}




module.exports = new LibInvoice();