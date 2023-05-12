describe("Staff", function()
{

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
        cy.get('.mr-auto > :nth-child(3) > .nav-link').click();


        //TestCase14:   search bar if it show the Staff, when enter his name with a Capital letters
        cy.get('label > .form-control').type("YAZEEDKHALIL");
        
        // test case1: search of staff
        cy.get('label > .form-control').clear();
        cy.get('label > .form-control').type("yazeedkhalil");

        //test case2: delete a staff
        cy.get('#staff_yazeedkhalil > .sorting_1').click();
        cy.wait(500)
        cy.get('.dtr-data > .row > :nth-child(2) > [data-href="yazeedkhalil"]').click();
        cy.get('#confirm-delete > .modal-dialog > .modal-content > .modal-footer > .btn-danger').click();
    })
});