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

        //Testcase5: Edit staff goal abilities 
        cy.get('[href="/staff/"]').click();
        cy.get(':nth-child(2) > :nth-child(2) > .row > .col-sm-4 > .nav > .nav-item > .nav-link').click();
        cy.get('.mr-auto > :nth-child(3) > .nav-link').click();
        cy.get('#staff_MahmodGG > [style=""] > .row > :nth-child(1) > a').click();
        
        cy.get('#edit_staff_MahmodGG > :nth-child(7) > .textinput')
        .select('2');

        cy.get('button[type="submit"][form="form_staff_MahmodGG"]').contains('Save').click( {force: true});


        //TestCase18: Edit staff Observe abilities
        cy.get('#staff_MahmodGG > [style=""] > .row > :nth-child(1) > a').click();
        cy.get('#edit_staff_MahmodGG > :nth-child(8) > .textinput').select('2');
        cy.get('button[type="submit"][form="form_staff_MahmodGG"]').contains('Save').click( {force: true});

       //TestCase19: Edit staff  abilities
       cy.get('#staff_MahmodGG > [style=""] > .row > :nth-child(1) > a').click();

       cy.get('[name="permissions_Goals"]').select('2');
       cy.get('button[type="submit"][form="form_staff_MahmodGG"]').contains('Save').click( {force: true});

       //TestCase20: Edit staff Student abilities
       cy.get('#staff_MahmodGG > [style=""] > .row > :nth-child(1) > a').click();
       cy.get('#edit_staff_MahmodGG > :nth-child(10) > .textinput').select('2');
       cy.get('button[type="submit"][form="form_staff_MahmodGG"]').contains('Save').click( {force: true});



       //TestCase21: Edit staff academic abilities
       cy.get('#staff_MahmodGG > [style=""] > .row > :nth-child(1) > a').click();
       cy.get('#edit_staff_MahmodGG > :nth-child(11) > .textinput').select('2');
       cy.get('button[type="submit"][form="form_staff_MahmodGG"]').contains('Save').click( {force: true});

    })
});
