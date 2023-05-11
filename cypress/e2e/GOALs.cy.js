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
        // edit staff info with valid first name
        cy.get(':nth-child(2) > :nth-child(2) > .row > .col-sm-4 > .nav > .nav-item > .nav-link').click();
        //cy.get('.mr-auto > :nth-child(3) > .nav-link').click();
        //cy.get('#staff_MahmodGG > .sorting_1').click();
        //cy.get('.dtr-data > .row > :nth-child(1) > a').click();
        //cy.get('#edit_staff_MahmodGG > :nth-child(4) > .textinput').type("Mohammed")
        //save button
        // edit staff info with valid email
       // cy.get('#edit_staff_MahmodGG > :nth-child(6) > .textinpu t').type("Mahmood.gg@gmail.com")
        //cy.get('[@id="edit_staff_MahmodGG"]/td[6]/select').click('optionValue');


        /////search
        //cy.get('label > .form-control').type("yazeed")

        // observr
        //search by select all goals
        cy.get('.mr-auto > :nth-child(2) > .nav-link').click();
        cy.get(':nth-child(1) > .custom-control-label > h5').click();
        cy.get('.align-items-center > :nth-child(3) > .btn').click();
        cy.get('[style="height: 10vh"] > :nth-child(1) > .custom-control-label').click();
        cy.get('[style="overflow-y: scroll;height: 30.7vh"] > :nth-child(1) > .custom-control-label').click();
        cy.get('.align-items-center > :nth-child(3) > .btn').click();
        //cy.get('#\31 136_751 > .m-0 > .late_True >s .row > :nth-child(1) > .textinput')
        cy.get('textinput textInput form-control').click();
        
    })

    
});