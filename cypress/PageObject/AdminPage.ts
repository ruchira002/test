class AdminPage{

    userNameSearchBox ='.oxd-grid-item:nth-of-type(1) input';
    searchButton = '[type="submit"]';


    
     searchUser(userName:string){
        cy.log('Search for user')
        cy.get(this.userNameSearchBox).type(userName);
        cy.get(this.searchButton).click();
     }
     verifyColumnHeaders(expectedHeaders:string[]){
        cy.log('Verify Column Headers')
        for(let i=0;i<expectedHeaders.length;i++){
            cy.get(`[role="columnheader"]:nth-of-type(${i+2})`).should('contain.text',expectedHeaders[i])
        }
     }
     verifyColumnValues(){
        cy.log('Verify Column Values')
        var expectedValues = ['Admin','Admin','Paul Collings','Enabled'];
        for(let i=0;i<expectedValues.length;i++){
            cy.get(`[role="cell"]:nth-of-type(${i+2})`).should('contain.text',expectedValues[i])
        }
     }
     
}

export default new AdminPage();