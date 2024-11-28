class Login {

    buttonSignInMainMenu = () => cy.get('[data-test="sign_in_main_menu"]');
    inputTrialEmail = () => cy.get('[data-test="get_trial_email"]');
    buttonTry = () => cy.get('[data-test="get_trial"]');

    buttonMyAccount = () => cy.get('[data-test="my_account"]');

    inputPassword = () => cy.get('[data-test="sign_in_code"]');
    buttonSignInConfirm = () => cy.get('[data-test="sign_in"]');

    //cy.visit = (https://cy.fakturaonline.cz/);

}

module.exports = new Login();
