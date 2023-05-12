describe("Staff", function()
{

    it("Login",()=>
    {

        cy.viewport(1600, 525)
        //Login
        name='username'
        cy.visit("https://goal-dev.mdx.ac.uk/accounts/login/?next=/");
        //username
        cy.get("input[name='username']").type("yazeed")
        //password name='password'
        cy.get("input[name='password']").type("test12345")
        
        // usertype name='login_as'
        cy.get('select[name="login_as"]').select('staff');
        cy.get('button[type="submit"]').click();
        
        cy.get(':nth-child(2) > :nth-child(2) > .row > .col-sm-4 > .nav > .nav-item > .nav-link').click();
        cy.get('a.nav-link[href="/staff/25/staffs/"]').click();
        cy.get('button[id="staff_am3013"]').click();


        /*

        //cy.get('a.nav-link.active[href="/staff/25"]').click();
        //cy.get('nav-link active[href="/staff/25"]').click();

        //cy.get(':nth-child(2) > :nth-child(2) > .row > .col-sm-4 > .nav > .nav-item > .nav-link').click();
        


        //cy.get('.mr-auto > :nth-child(3) > .nav-link').click
                //        cy.get('#userInfoMenu').click();
        
        //cy.get('[href="/staff/"]').click();
        //cy.get(':nth-child(2) > :nth-child(2) > .row > .col-sm-4 > .nav > .nav-item > .nav-link').click();
        //cy.get('.mr-auto > :nth-child(3) > .nav-link').click();

        //
        //cy.get('input[type="checkbox"][name="all_levels"][id="all_levels"]').check({force: true});
        //

        //Testcase11: Add staff with valid user name
        cy.get('#new_staff').type("AhmadMohsen");
        cy.get('.toolbar > .row > :nth-child(2) > .btn').click();


        //TestCase12: Add staff with invalid username datatype
        cy.get('#new_staff').type("4#%#$^$");
        cy.get('.toolbar > .row > :nth-child(2) > .btn').click();


        //TestCase13: add a Staff user with existing username
        cy.get('#new_staff').type("4");
        cy.get('.toolbar > .row > :nth-child(2) > .btn').click();
        */
    })
});
