class LoginPage{
    userNameTextBox ='[name="username"]';
    passwordTextBox = '[name="password"]';
    loginButton ='[type="submit"]';
    


    loginToApplication(){
        cy.get(this.userNameTextBox).click().type(Cypress.env('userName'));
        cy.get(this.passwordTextBox).click().type(Cypress.env('password'));
        cy.get(this.loginButton).click();
    }
}

export default new LoginPage();