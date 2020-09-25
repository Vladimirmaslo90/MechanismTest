function loginToGiphy(username, password){
    cy.get('a#login-button').click();
    cy.get('input[name="email"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.clickButton('Log in');
}

export class LoginPage{
    login() {
        loginToGiphy(Cypress.env('username'), Cypress.env('password'));
    }

}

export const loginPage = new LoginPage()