
class Invoice {

invoiceType = () => cy.get('[data-test="invoice_kind"]');
inputInvIssuedBy = () => cy.get('[data-test="invoice_issued_by"]');
invIssueDate = () => cy.get('[data-test="invoice_issued_on_date"]');
invTaxDate = () => cy.get('[data-test="invoice_tax_point_on"]');
invDueDate = () => cy.get('[data-test="invoice_due_on"]');
invDueDateSelect = (text) => cy.contains('.el-select-dropdown__item', text);
invPaymentMethod = () => cy.get('[data-test="payment_method"');
invPaymentMethodSelect = (text) => cy.contains('.el-select-dropdown__item', text);
inputBankAccountNumber = () => cy.get('[data-test="seller_bank_account_number"]');
checkboxShowIBAN = () => cy.get('[data-test="seller_bank_account_show_iban"]');
inputIBAN = () => cy.get('[data-test="seller_bank_account_iban"]').last();
inputSWIFTcode = () => cy.get('[data-test="seller_bank_account_swift"]');

invCurrency = () => cy.get('[data-test="currency_input"]');
invRounding = () => cy.get('[data-test="rounding_type"]');
invLanguage = () => cy.get('[data-test="choose_language"]');
invColorBlue = () => cy.get('[data-test="invoice_color-blue"]');
invDesignModern = () => cy.get('[data-test="invoice_appearance_modern"]');
inputRegistrInformation = () => cy.get('[data-test="note"]');
buttonInsertFile = () => cy.get('[data-test="file_upload_button"]').find('input').selectFile('cypress/fixtures/zuby.jpeg', {force:true});



buyerICO = () => cy.get('[data-test="buyer_company_number"]');
buyerName = () => cy.get('[data-test="buyer_name"]');
buyerTaxNumber = () => cy.get('[data-test="buyer_tax_number"]');
buyerStreet = () => cy.get('[data-test="buyer_address_street"]');
buyerCity = () => cy.get('[data-test="buyer_address_city"]');
buyerPostCode = () => cy.get('[data-test="buyer_address_postcode"]');
buyerCountry = () => cy.get('[data-test="buyer_address_country_code"]');

sellerICO = () => cy.get('[data-test="seller_company_number"]');
sellerName = () => cy.get('[data-test="seller_name"]');
sellerTaxNumber = () => cy.get('[data-test="seller_tax_number"]');
sellerStreet = () => cy.get('[data-test="seller_address_street"]');
sellerCity = () => cy.get('[data-test="seller_address_city"]');
sellerPostCode = () => cy.get('[data-test="seller_address_postcode"]');
sellerCountry = () => cy.get('[data-test="seller_address_country_code"]');

issueItemPriceWithVAT = () => cy.get('[data-test="vat_inclusive_set"]');
issueItemPriceWithoutVAT = () => cy.get('[data-test="vat_exclusive_set""]');
issueItemQuantity = () => cy.get('[data-test="line_quantity"]');
issueItemUnitType = () => cy.get('[data-test="lines-unit_type"]');
issueItemDescription = () => cy.get('[data-test="item-description"]');
issueItemVATRate = () => cy.get('[data-test="invoice_item_vat_rate"]');
issueItemPrice = () => cy.get('[data-test="invoice_item_price"]');
issueItemButtonDiscount = () => cy.get('[data-test="open_discount_dialog_line"]');
issueItemButtonDuplicate = () => cy.get('[data-analytics-id="icon-duplicate-2"]');

buttonAddItem = () => cy.get('[data-test="add_invoice_item"]');
buttonSelectFromSaved = () => cy.get('[data-test="add_saved_item"]');

buttonInvoicePreview = () => cy.get('[data-test="preview_invoice"]');
buttonIssueAndSend = () => cy.get('[data-test="show_submit_dialog"]');
buttonSaveDraft = () => cy.get('[data-test="save_invoice"]');
buttonIssueAndDownload = () => cy.get('[data-test="save_download_invoice"]');


}

module.exports = new Invoice();

