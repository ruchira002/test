import googleHomepage from "../PageObject/GoogleHomepage";

beforeEach(() => {
    cy.visit('/');
})

it('Navigate to Google',() => {
    googleHomepage.enterSearchQuery('test');
    googleHomepage.clickSearchButton();
})

afterEach(() => {
    cy.log('Test Complete');
})