describe("Staff", function()
{

    it("Login",()=>
    {

        cy.viewport(1600, 525)
        //Login
        cy.visit("https://goal-dev.mdx.ac.uk/accounts/login/?next=/");
        cy.get('#id_username').type("yazeed").should("have.value","yazeed");
        cy.get('#id_password').type("test12345");
        cy.get('.btn.btn.btn-primary.w-100').click();
        cy.get('#userInfoMenu').click();

        
        //TestCase17: edit the staff email by Change Email with invalid Email datatype

        cy.get('[href="/staff/"]').click();
        cy.get(':nth-child(2) > :nth-child(2) > .row > .col-sm-4 > .nav > .nav-item > .nav-link').click();
        cy.get('.mr-auto > :nth-child(3) > .nav-link').click();
        cy.get('#staff_MahmodGG > [style=""] > .row > :nth-child(1) > a').click();
        cy.get('#edit_staff_MahmodGG > :nth-child(6) > .textinput').clear();
        cy.get('#edit_staff_MahmodGG > :nth-child(6) > .textinput').type("tst123");

        cy.get('button[type="submit"][form="form_staff_MahmodGG"]').contains('Save').click( {force: true});
        cy.get('#edit_staff_MahmodGG > [style=""] > .row > :nth-child(2) > .btn').click();
        //TestCase15: Edit staff Email with valid Email
        
        cy.get('#staff_MahmodGG > [style=""] > .row > :nth-child(1) > a').click();
        cy.get('.mr-auto > :nth-child(3) > .nav-link').click();
        cy.get('#staff_MahmodGG > [style=""] > .row > :nth-child(1) > a').click();
        cy.get('#edit_staff_MahmodGG > :nth-child(6) > .textinput').clear();
        cy.get('#edit_staff_MahmodGG > :nth-child(6) > .textinput').type("Mahmood.ghg@gmail.com");

        cy.get('button[type="submit"][form="form_staff_MahmodGG"]').contains('Save').click( {force: true});


        //Testcase3: Edit staff first name with valid name
        cy.get('#staff_MahmodGG > [style=""] > .row > :nth-child(1) > a').click();
        cy.get('#edit_staff_MahmodGG > :nth-child(4) > .textinput').clear();
        cy.get('#edit_staff_MahmodGG > :nth-child(4) > .textinput').type("Mahmood");
        cy.get('button[type="submit"][form="form_staff_MahmodGG"]').contains('Save').click( {force: true});

        //Testcase16: Edit staff last name with valid name
        
        cy.get('#staff_MahmodGG > [style=""] > .row > :nth-child(1) > a').click();
        cy.get('#edit_staff_MahmodGG > :nth-child(5) > .textinput').clear();
        cy.get('#edit_staff_MahmodGG > :nth-child(5) > .textinput').type("Khalid");
        cy.get('button[type="submit"][form="form_staff_MahmodGG"]').contains('Save').click( {force: true});
        
    })
});
