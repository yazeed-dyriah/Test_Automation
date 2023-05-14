

describe("Staff", function()
{

    it("Login",()=>
    {

        cy.viewport(1600, 525)
        //Login
        cy.visit('https://goal-dev.mdx.ac.uk/accounts/login/?next=/')
        .then(() => {
            cy.get('a.navbar-brand.text-light.p-0')
            .should('exist');
        });

        cy.get('input[type="text"][name="username"][id="id_username"]')
        .should('be.visible');
        cy.get("input[name='username']").type("yyazeedd")
        

        //password name='password'
        cy.get('input[type="password"][name="password"][id="id_password"]')
        .should('be.visible');
        cy.get("input[name='password']").type("Test1234.")
        
        
        // usertype name='login_as'
        cy.get('select[name="login_as"]')
        .should('be.visible')
        .select('staff')
        .should('have.value', 'staff');
        cy.get('select[name="login_as"]').select('staff');

        //login button
        cy.get('button[type="submit"].btn.btn-primary.w-100')
        .should('exist');
        cy.get('button[type="submit"]').click();

        cy.get('a.nav-link.active.w-100') 
        .should('be.visible');           
        cy.get('a.nav-link.active.w-100[href="/staff/25"]').click()
        
        cy.contains('a.nav-link.text-light', 'Staff')
        .should('be.visible');
        cy.get('a.nav-link[href="/staff/25/staffs/"]').click();

        
        //TestCase1foryazeed: Search for existing staff


        

        cy.get('input.form-control.form-control-sm')
        .should('be.visible');
        cy.get('input[type="search"]').type("ahmadmohsen");
        
        cy.get('td.sorting_1:contains("AhmadMohsen")')
        .should('be.visible');
      
        //TestCase2foryazeed: search for Staff, when enter his name with a Capital letters

        cy.get('input.form-control.form-control-sm')
        .should('be.visible');
        cy.get('[type="search"]').clear();

        cy.get('input.form-control.form-control-sm')
        .should('be.visible');
        cy.get('input[type="search"]').type("AHMADMOHSEN");

        cy.get('input.form-control.form-control-sm')
        .should('be.visible');
        cy.get('input[type="search"]').clear();
        cy.get('td.sorting_1:contains("AhmadMohsen")')
        .should('be.visible');

        //TestCase3 for yazeed : search for staf, with include special carachter in search bar
        cy.get('input.form-control.form-control-sm')
        .should('be.visible');
        cy.get('[type="search"]').clear();

        cy.get('input.form-control.form-control-sm')
        .should('be.visible');
        cy.get('input[type="search"]').type("$$##@%#");

        cy.get('input.form-control.form-control-sm')
        .should('be.visible');
        cy.get('input[type="search"]').clear();
        

        //TestCase3foryazeed: delete a staff
        cy.get('a.btn.btn-danger.btn-ok')
        .contains('Remove');
        cy.get('[data-href="yazeedkhalil"]').click();
        
        cy.get('a[href="/staff/25/delete/staff/yazeedkhalil"][data-href="yazeedkhalil"]').click();
        cy.get('tr#staff_yazeeddkhalil')
        .should('not.be.visible');


        //TestCase4forYazeed : Add Staff with valid userrname
        cy.get('input.form-control.form-control-sm')
        .should('be.visible');
        cy.get('input#new_staff').type('yazeedkhalil');
        
        cy.get('button.btn.btn-primary')
        .should('be.visible')
        .contains('Add staff');
        cy.get('button[type="button"].btn.btn-primary').click();
        cy.get('tr#staff_yazeeddkhalil')
        .should('be.visible');


        
        //Testcase5for yazeed: Add staff with invalid user name
        //cy.get('input#new_staff').type('34455');
        //cy.get('button[type="button"].btn.btn-primary').click();
        

    
        //Testcase5for yazeed: Add staff with invalid user name
    //    cy.get('input#new_staff').type('AhmadMohsen');
      //  cy.get('button[type="button"].btn.btn-primary').click();
      



        //TestCase5forYazeed: edit the staff email by Change Email with valid Email datatype
        cy.get('input.form-control.form-control-sm')
        .should('be.visible');
        cy.get('[type="search"]').clear();
        
        cy.get('input.form-control.form-control-sm')
        .should('be.visible');
        cy.get('a[href="#"][onclick="showEditRow(\'MahmodGG\')"]').click();

        cy.get('input[name="email"]').should('be.visible')
        cy.get('input[type="email"][name="email"][value="Mahmodgg@gmail.com"]').clear();

        cy.get('input[name="email"]').should('be.visible')
        cy.get('input[type="email"][name="email"][value="Mahmodgg@gmail.com"]').type("Mahmodgg@gmail.com");
        
        cy.get('button[type="submit"]')
        .should('be.visible')
        .contains('Save');
        cy.get('button[type="submit"][class="btn btn-primary"][form="form_staff_MahmodGG"]').click();
        cy.contains('tr#staff_MahmodGG', 'Mahmodgg@gmail.com')
        .should('be.visible');
      


        //TestCase6 forYazeed: edit the staff email by Change Email with invalid Email datatype
        cy.get('input.form-control.form-control-sm')
        .should('be.visible');
        cy.get('a[href="#"][onclick="showEditRow(\'MahmodGG\')"]').click();

        cy.get('input.form-control.form-control-sm')
        .should('be.visible');
        cy.get('input[type="email"][name="email"][value="Mahmodgg@gmail.com"]').clear();

        cy.get('input.form-control.form-control-sm')
        .should('be.visible');
        cy.get('input[type="email"][name="email"][value="Mahmodgg@gmail.com"]').type("tst123");

        cy.get('button[type="submit"]')
        .should('be.visible')
        .contains('Save');
        cy.get('button[type="submit"][class="btn btn-primary"][form="form_staff_MahmodGG"]').click();

        cy.get('button.btn.btn-danger[onclick="cancelEditRow(\'MahmodGG\')"]')
        .should('be.visible');
        cy.get('button[type="reset"].btn.btn-danger[onclick="cancelEditRow(\'MahmodGG\')"]').click();
        cy.contains('tr#staff_MahmodGG', 'Mahmodgg@gmail.com')
        .should('be.visible');

        //Testcase7forYazeed: Edit staff first name with invalid name type
        cy.get('input.form-control.form-control-sm')
        .should('be.visible');
        cy.get('a[href="#"][onclick="showEditRow(\'MahmodGG\')"]').click();

        cy.get('input[name="first_name"]')
        .should('be.visible');
        cy.get('input[name="first_name"][form="form_staff_MahmodGG"]').clear();

        cy.get('input[name="first_name"]')
        .should('be.visible');
        cy.get('input[name="first_name"][form="form_staff_MahmodGG"]').type('%$3234@#');

        cy.get('button[type="submit"]')
        .should('be.visible');
        cy.get('button[type="submit"][class="btn btn-primary"][form="form_staff_MahmodGG"]').click();
        cy.get('tr#staff_MahmodGG td.sorting_1')
        .should('be.visible');



        //Testcase8forYazeed: Edit staff first name with valid name

        cy.get('input.form-control.form-control-sm')
        .should('be.visible');
        cy.get('a[href="#"][onclick="showEditRow(\'MahmodGG\')"]').click();
        
        cy.get('input[name="first_name"]')
        .should('be.visible');
        cy.get('input[name="first_name"][form="form_staff_MahmodGG"]').clear();

        cy.get('input[name="first_name"]')
        .should('be.visible');
        cy.get('input[name="first_name"][form="form_staff_MahmodGG"]').type('mah');

        cy.get('button[type="submit"]')
        .should('be.visible');
        cy.get('button[type="submit"][class="btn btn-primary"][form="form_staff_MahmodGG"]').click();
        cy.get('tr#staff_MahmodGG td.sorting_1')
        .should('be.visible');

        
        //Testcase9: Edit staff last name with valid name
        cy.get('input.form-control.form-control-sm')
        .should('be.visible');
        cy.get('a[href="#"][onclick="showEditRow(\'MahmodGG\')"]').click();

        cy.get('input[name="last_name"]')
        .should('be.visible')
        cy.get('input[name="last_name"][form="form_staff_MahmodGG"]').clear();

        cy.get('input[name="last_name"]')
        .should('be.visible')
        cy.get('input[name="last_name"][form="form_staff_MahmodGG"]').type('khalil');

        cy.get('button[type="submit"]')
        .should('be.visible');
        cy.get('button[type="submit"][class="btn btn-primary"][form="form_staff_MahmodGG"]').click();
        cy.get('tr#staff_MahmodGG td:nth-child(2)')
        .should('be.visible');


        //Testcase10: Edit staff last name with invalid name
        cy.get('input.form-control.form-control-sm')
        .should('be.visible');
        cy.get('a[href="#"][onclick="showEditRow(\'MahmodGG\')"]').click();

        cy.get('input[name="last_name"]')
        .should('be.visible')
        cy.get('input[name="last_name"][form="form_staff_MahmodGG"]').clear();

        cy.get('input[name="last_name"]')
        .should('be.visible')
        cy.get('input[name="last_name"][form="form_staff_MahmodGG"]').type('#$%#5345');

        cy.get('button[type="submit"]')
        .should('be.visible');
        cy.get('button[type="submit"][class="btn btn-primary"][form="form_staff_MahmodGG"]').click();
        cy.get('tr#staff_MahmodGG td:nth-child(2)')
        .should('be.visible');
    })
});
