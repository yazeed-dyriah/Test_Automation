describe("GOALs", function()
{


    it("Open",()=>
    {
        cy.visit("https://goal-dev.mdx.ac.uk/accounts/login/?next=/");   
    })

    it("Login",()=>
    {
        cy.viewport(1000, 600)
        cy.visit("https://goal-dev.mdx.ac.uk/accounts/login/?next=/");
        cy.get('#id_username').type("yazeed").should("have.value","yazeed");
        cy.get('#id_password').type("test12345");
        cy.get('.btn.btn.btn-primary.w-100').click();
        cy.get('#userInfoMenu').click();
        cy.get('[href="/staff/"]').click();
        cy.get(':nth-child(2) > :nth-child(2) > .row > .col-sm-4 > .nav > .nav-item > .nav-link').click();
        
        cy.get('.mr-auto > :nth-child(2) > .nav-link').click();
        cy.get(':nth-child(1) > .custom-control-label > h5').click();
        cy.get('.align-items-center > :nth-child(3) > .btn').click();
        cy.get('[style="height: 10vh"] > :nth-child(1) > .custom-control-label').click();
        cy.get('[style="overflow-y: scroll;height: 30.7vh"] > :nth-child(1) > .custom-control-label').click();
        

        //TestCase10: show all groub goals Except GroupB
        cy.get(':nth-child(5) > .btn').click();
        //apply button
        cy.get('.align-items-center > :nth-child(3) > .btn').click();

        //TestCase7: Give all student same grade        
        cy.get(':nth-child(6) > .form-control').select('7');

        //TestCase8: UnObserved all student
        cy.get(':nth-child(4) > .btn').click();

        //TestCase9: Observe All Student
        cy.get(':nth-child(5) > .btn').click();
    })
});