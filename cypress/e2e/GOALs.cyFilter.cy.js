describe("GOALs", function()
{


    it("Open",()=>
    {
        cy.visit("https://goal-dev.mdx.ac.uk/accounts/login/?next=/");   
    })

    it("Login",()=>
    {
        //cy.viewport(1000, 600)
        cy.visit("https://goal-dev.mdx.ac.uk/accounts/login/?next=/");
        cy.get('#id_username').type("yazeed").should("have.value","yazeed");
        cy.get('#id_password').type("test12345");
        cy.get('.btn.btn.btn-primary.w-100').click();
        cy.get('#userInfoMenu').click();
        cy.get('[href="/staff/"]').click();
        cy.get(':nth-child(2) > :nth-child(2) > .row > .col-sm-4 > .nav > .nav-item > .nav-link').click();
        
        cy.get('.mr-auto > :nth-child(2) > .nav-link').click();
        //cy.get(':nth-child(1) > .custom-control-label > h5').click();
        
        
        cy.get('.align-items-center > :nth-child(3) > .btn').click();
        
        cy.get('[style="height: 10vh"] > :nth-child(1) > .custom-control-label').click();
        
        //testCase4: show all  observed student
        cy.get('[style="overflow-y: scroll;height: 30.7vh"] > :nth-child(1) > .custom-control-label').click();
        
        //save button
        //cy.get('.align-items-center > :nth-child(3) > .btn').click();

        //TestCase5: show all non observed student
        //cy.get('[style="overflow-y: scroll;height: 30.7vh"] > :nth-child(1) > .custom-control-label').click();


        //TestCasese6: give a grade 
        //cy.get('select[name="grade"]').select('2', { force: true });


        //TestCase22: Observe all topic1 goals
        //cy.get(':nth-child(1) > .custom-control-label > h5').click();
       // cy.get(':nth-child(3) > .custom-control-label > h5').click();
       // cy.get('[style="overflow-y: scroll;height: 30.7vh"] > :nth-child(1) > .custom-control-label').click();
        //cy.get('.align-items-center > :nth-child(3) > .btn').click();

        //TestCase23: Show all GOALs that belong to GroupB
        //cy.get('[style="overflow-y: scroll;height: 30.7vh"] > :nth-child(1) > .custom-control-label').click();
        //cy.get('[style="overflow-y: scroll;height: 30.7vh"] > :nth-child(4) > .custom-control > .custom-control-label').click();
       // cy.get('.align-items-center > :nth-child(3) > .btn').click();


        //TestCase24: Show all Goals have a low level from GroupB
       // cy.get('input[type="checkbox"][name="groups_filter"][id="group_GroupB"]').check({force: true});

       // cy.get('input[type="checkbox"][name="level_filter"][id="level_Low"]').check({force: true});
        
        //all level
        cy.get('input[type="checkbox"][name="all_levels"][id="all_levels"]').check({force: true});
        cy.get('.align-items-center > :nth-child(3) > .btn').click();
        
        //cy.get('[style="overflow-y: scroll;height: 20vh"] > :nth-child(2) > .custom-control-label').click();
        //cy.get('.align-items-center > :nth-child(3) > .btn').click();




       

    })
});