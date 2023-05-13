

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

        //TestCase4forYazeed : Add Staff with valid userrname
        cy.get('input#new_staff').type('yazeedkhalil');
        cy.get('button.btn.btn-primary')
        .should('be.visible')
        .should('be.enabled')
        .click();

        //Testcase5for yazeed: Add staff with invalid user name
        cy.get('input#new_staff').type('34455');
        cy.get('button[type="button"].btn.btn-primary').click();

        //Testcase5for yazeed: Add staff with invalid user name
        cy.get('input#new_staff').type('AhmadMohsen');
        cy.get('button[type="button"].btn.btn-primary').click();
      



        //TestCase6forYazeed: edit the staff email by Change Email with valid Email datatype
        cy.get('[type="search"]').clear();
        
        cy.get('a[href="#"][onclick="showEditRow(\'MahmodGG\')"]').click();

        
        cy.get('input[type="email"][name="email"][value="Mahmodgg@gmail.com"]').clear();
        cy.get('input[type="email"][name="email"][value="Mahmodgg@gmail.com"]').type("Mahmodgg@gmail.com");
        cy.get('button[type="submit"][class="btn btn-primary"][form="form_staff_MahmodGG"]').click();

        //TestCase7 forYazeed: edit the staff email by Change Email with invalid Email datatype
        
        cy.get('a[href="#"][onclick="showEditRow(\'MahmodGG\')"]').click();
        
        cy.get('input[type="email"][name="email"][value="Mahmodgg@gmail.com"]').clear();
        cy.get('input[type="email"][name="email"][value="Mahmodgg@gmail.com"]').type("tst123");
        cy.get('button[type="submit"][class="btn btn-primary"][form="form_staff_MahmodGG"]').click();
        cy.get('button[type="reset"].btn.btn-danger[onclick="cancelEditRow(\'MahmodGG\')"]').click();

        //Testcase8forYazeed: Edit staff first name with valid name
        cy.get('a[href="#"][onclick="showEditRow(\'MahmodGG\')"]').click();
        cy.get('input[name="first_name"][form="form_staff_MahmodGG"]').clear();
        cy.get('input[name="first_name"][form="form_staff_MahmodGG"]').type('yazeed');
        cy.get('button[type="submit"][class="btn btn-primary"][form="form_staff_MahmodGG"]').click();

        
        //Testcase9: Edit staff last name with valid name
        cy.get('a[href="#"][onclick="showEditRow(\'MahmodGG\')"]').click();
        cy.get('input[name="last_name"][form="form_staff_MahmodGG"]').clear();
        cy.get('input[name="last_name"][form="form_staff_MahmodGG"]').type('khalil');
        cy.get('button[type="submit"][class="btn btn-primary"][form="form_staff_MahmodGG"]').click();


       
    })
});
