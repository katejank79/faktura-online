import Invoice from "../pages/invoice";

class LibInvoice {
    basicInformation(dueDate, paymentMethod, bankAccountNumber, IBAN, SWIFT) {
        Invoice.invoiceType().click();
        Invoice.inputInvIssuedBy().clear().type('Kateřina Janková');
        Invoice.invDueDate().click();
        Invoice.invDueDateSelect(dueDate).click({force: true});
        Invoice.invPaymentMethod().click();
        Invoice.invDueDateSelect(paymentMethod).click({force: true});
        Invoice.inputBankAccountNumber().clear().type(bankAccountNumber);
        Invoice.checkboxShowIBAN().check({ force: true }).wait(3000);
        Invoice.inputIBAN().clear().type(IBAN);
        Invoice.inputSWIFTcode().clear().type(SWIFT);

    };

    buyerInformation(buyerICO, buyerName, buyerTaxNumber, buyerStreet, buyerCity, buyerPostCode, buyerCountry) {
        Invoice.buyerICO().clear().type(buyerICO);
        Invoice.buyerName().clear().type(buyerName);
        Invoice.buyerTaxNumber().clear().type(buyerTaxNumber);
        Invoice.buyerStreet().clear().type(buyerStreet);
        Invoice.buyerCity().clear().type(buyerCity);
        Invoice.buyerPostCode().clear().type(buyerPostCode);
        //Invoice.buyerCountry().type(buyerCountry);

    };

    sellerInformation(sellerICO, sellerName, sellerTaxNumber, sellerStreet, sellerCity, sellerPostCode, sellerCountry) {
        Invoice.sellerICO().clear().type(sellerICO);
        Invoice.sellerName().clear().type(sellerName);
        Invoice.sellerTaxNumber().clear().type(sellerTaxNumber);
        Invoice.sellerStreet().clear().type(sellerStreet);
        Invoice.sellerCity().clear().type(sellerCity);
        Invoice.sellerPostCode().clear().type(sellerPostCode);
        Invoice.sellerCountry().clear().type(sellerCountry);
    };

    invoiceItems(issueItemQuantity, issueItemUnitType, issueItemDescription, issueItemPrice) {
        Invoice.issueItemQuantity().clear().type(issueItemQuantity);
        Invoice.issueItemUnitType().clear().type(issueItemUnitType);
        Invoice.issueItemDescription().clear().type(issueItemDescription);
        Invoice.issueItemVATRate15().click({force: true});
        Invoice.issueItemPrice().clear().type(issueItemPrice);
    };

    creatingNewInvoice() {
        Invoice.iconNewInvoiceCreate.eq(2).click({force: true});
    }

    verifyDownloadTasks() {
        cy.verifyDownload('.pdf', {contains:true})
    }

}


module.exports = new LibInvoice();