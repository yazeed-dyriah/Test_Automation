

describe("Staff", function()
{

    it("Login",()=>
    {

        cy.viewport(1600, 525)
        //Login
        cy.visit("https://goal-dev.mdx.ac.uk/accounts/login/?next=/");
        //username
        cy.get("input[name='username']").type("yyazeedd")
        //password name='password'
        cy.get("input[name='password']").type("Test1234.")
        
        
        // usertype name='login_as'
        cy.get('select[name="login_as"]').select('staff');
        cy.get('button[type="submit"]').click();
        
        //TestCase1foryazeed: search of staff
        cy.get('a.nav-link.active.w-100[href="/staff/25"]').click()
        cy.get('a.nav-link[href="/staff/25/staffs/"]').click();
        cy.get('input[type="search"]').type("yazeedkhalil");

        //TestCase2foryazeed: search bar if it show the Staff, when enter his name with a Capital letters
        cy.get('[type="search"]').clear();
        cy.get('input[type="search"]').type("YAZEEDKHALIL");



        //TestCase3foryazeed: delete a staff
        cy.get('[data-href="yazeedkhalil"]').click();
        cy.get('a[href="/staff/25/delete/staff/yazeedkhalil"][data-href="yazeedkhalil"]').click();

        //TestCase4forYazeed : Add Staff
        cy.get('input#new_staff').type('yazeedkhalil');
        cy.get('button.btn.btn-primary')
        .should('be.visible')
        .should('be.enabled')
        .click();

        //TestCase5forYazeed: edit the staff email by Change Email with nvalid Email datatype
        cy.get('[type="search"]').clear();
        cy.get('a[href="#"][onclick="showEditRow(\'MahmodGG\')"]').click();
        cy.get('input[type="email"][name="email"][value="Mahmodgg@gmail.com"]').clear();
        cy.get('input[type="email"][name="email"][value="Mahmodgg@gmail.com"]').type("Mahmodgg@gmail.com");
        cy.get('button[type="submit"][class="btn btn-primary"][form="form_staff_MahmodGG"]').click();

        //TestCase6 forYazeed: edit the staff email by Change Email with valid Email datatype
        
        cy.get('a[href="#"][onclick="showEditRow(\'MahmodGG\')"]').click();
        cy.get('input[type="email"][name="email"][value="Mahmodgg@gmail.com"]').clear();
        cy.get('input[type="email"][name="email"][value="Mahmodgg@gmail.com"]').type("tst123");
        cy.get('button[type="submit"][class="btn btn-primary"][form="form_staff_MahmodGG"]').click();
        //cy.get('btn btn-danger[type="reset"]').click();




        



    })
});
