
import AdminPage from "../PageObject/AdminPage"
import AdminTestData from "../fixtures/AdminTestData.json"


describe('Admin Tests',()=>{
    beforeEach(()=>{
        cy.navigateToAdminPage();
    })
    
    it('Search test',()=>{
        AdminPage.searchUser('admin');
        AdminPage.verifyColumnHeaders(AdminTestData.expectedHeaders);
        AdminPage.verifyColumnValues();
    })
})

