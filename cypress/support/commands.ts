import LoginPage from "../PageObject/LoginPage";
import DashboardPage from "../PageObject/DashboardPage";

Cypress.Commands.add('loginToApplication',()=>{
   LoginPage.loginToApplication()
})
Cypress.Commands.add('navigateToAdminPage',()=>{
    DashboardPage.clickOnAdminLink()
 })