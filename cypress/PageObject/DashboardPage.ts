class DashboardPage{
    
    menuLink = 'div.oxd-sidepanel-body .oxd-main-menu-item';
    

    clickOnAdminLink(){
        cy.get(this.menuLink).contains('Admin').click();
     }
     
}

export default new DashboardPage();