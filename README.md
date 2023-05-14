# Test_Automation

# For Yazeed: 

### For the edit, remove , and full page button to appear
```
cy.viewport(1600, 900);
```

### LogIn:

```

            cy.visit('https://goal-dev.mdx.ac.uk/accounts/login/?next=/')
                .then(() => {
                    cy.get('a.navbar-brand.text-light.p-0').should('exist');
                });
                
            cy.get('input[type="text"][name="username"][id="id_username"]').should('be.visible');
            cy.get("input[name='username']").type("yyazeedd");
    
            // Password name='password'
            cy.get('input[type="password"][name="password"][id="id_password"]').should('be.visible');
            cy.get("input[name='password']").type("Test1234.");
            
            // Usertype name='login_as'
            cy.get('select[name="login_as"]').should('be.visible').select('staff').should('have.value', 'staff');
            cy.get('select[name="login_as"]').select('staff');
            
            // Login button
            cy.get('button[type="submit"].btn.btn-primary.w-100').should('exist');
            cy.get('button[type="submit"]').click();
    
            cy.get('a.nav-link.active.w-100').should('be.visible');
            cy.get('a.nav-link.active.w-100[href="/staff/25"]').click();
            
            cy.contains('a.nav-link.text-light', 'Staff').should('be.visible');
            cy.get('a.nav-link[href="/staff/25/staffs/"]').click();
        });
    
```

## TestCase1 Search for existing staff : 
### the script should assert to ensure that the search bar was visible.
### And search for "ahmadmohsen", and then assert to ensure the user was found and visible.
```
        it("TestCase1 Search for existing staff", () => {
            cy.get('input.form-control.form-control-sm').should('be.visible');
            cy.get('input[type="search"]').type("ahmadmohsen");
            
            cy.get('td.sorting_1:contains("AhmadMohsen")').should('be.visible');
        });
```        

## TestCase2 Search for Staff with capital letters:
### The script ensure that the search bar is visible, and then deletes what is inside it
### And then search for UserA and make sure that UserA is in the list

```
        it("TestCase2 Search for Staff with capital letters", () => {
            cy.get('input.form-control.form-control-sm').should('be.visible');
            cy.get('[type="search"]').clear();
    
            cy.get('input.form-control.form-control-sm').should('be.visible');
            cy.get('input[type="search"]').type("AHMADMOHSEN");
    
            cy.get('input.form-control.form-control-sm').should('be.visible');
            cy.get('input[type="search"]').clear();
            cy.get('td.sorting_1:contains("AhmadMohsen")').should('be.visible');
        });
```
## TestCase3 Search for Staff with special characters:
### searching for a wrongly type user using special characters
### Clear what is inside the search box, then write special characters inside the box, and then make sure that they do not exist
```
        it("TestCase3 Search for Staff with special characters", () => {
            cy.get('input.form-control.form-control-sm').should('be.visible');
            cy.get('[type="search"]').clear();
    
            cy.get('input.form-control.form-control-sm').should('be.visible');
            cy.get('input[type="search"]').type("$$##@%#");
    
            cy.get('input.form-control.form-control-sm').should('be.visible');
            cy.get('input[type="search"]').clear();
        });
```

## TestCase4 Delete a staff
### Delete previously added staff
### ensure that the delete button is visible, then press it, and press remove in the confirmation message
```
        it("TestCase4 Delete a staff", () => {
            cy.get('a.btn.btn-danger.btn-ok').contains('Remove');
            cy.get('[data-href="yazeedkhalil"]').click();
    
            cy.get('a[href="/staff/25/delete/staff/yazeedkhalil"][data-href="yazeedkhalil"]').click();
            cy.get('tr#staff_yazeeddkhalil').should('not.be.visible');
        });
```

## TestCase5 Add Staff with valid userrname
### Add a user by entering a valid username.
### Make sure that the input box visible and click on it, and then make sure that the user has actually been added

```
        it("TestCase5 Add Staff with valid userrname", () => {
            cy.get('input.form-control.form-control-sm')
            .should('be.visible');
            cy.get('input#new_staff').type('yazeedkhalil');
            
            cy.get('button.btn.btn-primary')
            .should('be.visible')
            .contains('Add staff');
            cy.get('button[type="button"].btn.btn-primary').click();
            cy.get('tr#staff_yazeeddkhalil')
            .should('be.visible');
        });
```

## TestCase6 edit the staff email by Change Email with valid Email datatype
### ensure there is an edit button and press it Then make sure that the email box is visible, write the email in it, and click Save
```
it("TestCase6 edit the staff email by Change Email with valid Email datatype", () => {
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
        });
```

## TestCase7 edit the staff email by Change Email with invalid Email datatype
### ensure that the edit button is visible and click on it Then make sure the email box is visible, type the email in the wrong datatype, click save and then cancel
```
it("TestCase7 edit the staff email by Change Email with invalid Email datatype", () => {
    
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
        });
```

## TestCase8 Edit staff first name with invalid name type
### ensure that the edit button is visible and click on it Then make sure the first name box is visible, type the first name in wrong datatype, and click save and then cancel

```
it("TestCase8 Edit staff first name with invalid name type", () => {
    
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
        });
    
```

## TestCase9 Edit staff first name with valid name
### ensure that the edit button is visible and click on it Then make sure the first name box is visible, type the first name, and click save

```
        it("TestCase9 Edit staff first name with valid name", () => {
    
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
        });
```

## TestCase10 Edit staff last name with valid name
### ensure that the edit button is visible and click on it Then make sure the last  name box is visible, type the last name, and click save

```
        it("TestCase10 Edit staff last name with valid name", () => {
    
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
        });
```

## TestCase11 Edit staff last name with invalid name
### ensure that the edit button is visible and click on it Then make sure the last name box is visible, type the first name in wrong datatype, and click save and then cancel

```
        it("TestCase11 Edit staff last name with invalid name", () => {
    
            
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
        });
```
