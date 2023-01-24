//import { And, Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
const { When, Then, Given} = require("@badeball/cypress-cucumber-preprocessor");
///<reference types="cypress-xpath" />


Given("i enter to demoblaze", () => {
cy.visit("https://www.demoblaze.com/index.html");
});

When("i do click in option Sing up", () => {
    cy.get('#signin2').click();
    cy.wait(1000);
    });

When("into the Username", () => {
    cy.get('#sign-username',{timeout:10000}).type('cd03231');
        });

When("into Password", () => {
    cy.get('#sign-password',{timeout:10000}).type('borrado01');
            });
            
When("i do click in boton sing up", () => {
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary',{timeout:10000}).click();
                });    
Then("i show my the website is correct", () => {
    cy.url().should('include', '/index.html');
    });

///feature login

When("i do click in option login", () => {
    cy.get('#login2',{timeout:10000}).click();
    });

Then("into the Username in login", () => {
    cy.wait(1000);
    cy.get('#loginusername',{timeout:10000}).type('cd03231');
        });

Then("into Password in login", () => {
    cy.get('#loginpassword',{timeout:10000}).type('borrado01');
            });
            
Then("i do click in boton login", () => {
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary',{timeout:10000}).click();
                });    
Then("i show my name user", () => {
    cy.get('#nameofuser').contains('Welcome')
    });

//feature buy a laptop

Then("i do clic in option laptop", () => {
    cy.contains('#itemc','Laptops').click();
    cy.wait(1000);
    });

Then("i do clic in laptop sony", () => {
    cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click();
    cy.wait(1000);
        });

Then("i do clic in boton add to cart", () => {
    cy.get('.col-sm-12 > .btn').click();
    cy.wait(1000);
            });
Then("i wacht the mensaje product added", () => {

    cy.get('#cartur').click();
    cy.get('#tbodyid > :nth-child(1) > :nth-child(2)').should('be.visible');
            });
            