import Login from '../pages/login';

function generateRandomEmail() {
    const randomString = Math.random().toString(36).substring(2, 11);
    return `user_${randomString}@example.com`;
}

const randomEmail = generateRandomEmail();

class LibLogin {
    login(inputEmail) {
        Login.buttonSignInMainMenu().click().wait(1000);
        Login.inputTrialEmail().type(randomEmail);
        Login.buttonTry().click();
        Login.buttonMyAccount().should('exist');

    }
}

module.exports = new LibLogin();

