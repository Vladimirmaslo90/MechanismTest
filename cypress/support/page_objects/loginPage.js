function loginToGiphy(username, password){
    cy.get('a#login-button').click();
    cy.get('input[name="email"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.clickButton('Log in');

}

export class LoginPage{
    login() {
        //login and password will be moved to env file 
        loginToGiphy('Linkinnparkk90@gmail.com', 'IT2013Lab!');
    }

}

export const loginPage = new LoginPage()