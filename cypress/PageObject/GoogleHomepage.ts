class GoogleHomepage {
    googleSearchBox = 'div textarea.gLFyf';
    googleSearchButton = 'div.aajZCb input[value="Google Search"]';

    enterSearchQuery(query){
        cy.get(this.googleSearchBox).click().type(query);
    }
    clickSearchButton(){
        cy.get(this.googleSearchButton).click();
    }
}
export default new GoogleHomepage;