/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject = any> {
    loginToApplication(): Chainable<any>;
    navigateToAdminPage(): Chainable<any>;
    }
    }