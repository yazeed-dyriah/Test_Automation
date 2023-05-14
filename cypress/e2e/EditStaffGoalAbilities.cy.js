
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
        cy.get("input[name='username']").type("shahd")
        
        cy.get('input[type="password"][name="password"][id="id_password"]')
        .should('be.visible');
        cy.get("input[name='password']").type("shahd12345")
        
        
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



        //1 Edit staff goal abilities
        cy.get('a[href="#"][onclick="showEditRow(\'AhmadMohsen\')"]').click();
        
        cy.get('select[name="permissions_Staff"][class="textinput textInput form-control"][form="form_staff_AhmadMohsen"]').select('Read');
        cy.get('button[type="submit"][class="btn btn-primary"][form="form_staff_AhmadMohsen"]').click();

        //2 TestCase Edit observe abilities
        cy.get('a[href="#"][onclick="showEditRow(\'AhmadMohsen\')"]').click();
        cy.get('select[name="permissions_Observe"][class="textinput textInput form-control"][form="form_staff_AhmadMohsen"]').select('Read');
        cy.get('button[type="submit"][class="btn btn-primary"][form="form_staff_AhmadMohsen"]').click();
        //3 TestCase Edit Student abilities
        cy.get('a[href="#"][onclick="showEditRow(\'AhmadMohsen\')"]').click();
        cy.get('select[name="permissions_Student"][class="textinput textInput form-control"][form="form_staff_AhmadMohsen"]').select('Read');
        cy.get('button[type="submit"][class="btn btn-primary"][form="form_staff_AhmadMohsen"]').click();
        //4 TestCase Edit Goals abilities
        cy.get('a[href="#"][onclick="showEditRow(\'AhmadMohsen\')"]').click();
        cy.get('select[name="permissions_Goals"][class="textinput textInput form-control"][form="form_staff_AhmadMohsen"]').select('Read');
        cy.get('button[type="submit"][class="btn btn-primary"][form="form_staff_AhmadMohsen"]').click();
        //5 TestCase Edit Academic abilities
        cy.get('a[href="#"][onclick="showEditRow(\'AhmadMohsen\')"]').click();
        cy.get('select[name="permissions_Academic"][class="textinput textInput form-control"][form="form_staff_AhmadMohsen"]').select('Read');
        cy.get('button[type="submit"][class="btn btn-primary"][form="form_staff_AhmadMohsen"]').click();
        


        //6 TestCase show all observed student
        cy.get('a.nav-link.text-light[href="/staff/25/goals/"]').click();
        cy.get('input[type="checkbox"][name="all_goals"][id="all_goals"]').check({force: true});
        cy.get('input[type="checkbox"][name="goal_filter"][id="goal_1136"]').check({force: true});
        cy.get('input[type="checkbox"][id="topic_61"]').check({force: true});
        cy.get('input[type="checkbox"][name="all_groups"][id="all_groups"]').check({force: true});
        cy.get('input[type="checkbox"][id="not_observed"]').uncheck({force: true});
        cy.get('button.btn.btn-primary.mt-2.w-100').contains('Apply filters').click();


        //Back to the page Goal
        cy.get('a.nav-link.text-light[href="/staff/25/goals/"]').click();
        //7 UnObserved all student
        cy.get('input[type="checkbox"][name="all_goals"][id="all_goals"]').check({force: true});
        cy.get('input[type="checkbox"][name="goal_filter"][id="goal_1136"]').check({force: true});
        cy.get('input[type="checkbox"][id="topic_61"]').check({force: true});
        cy.get('input[type="checkbox"][name="all_groups"][id="all_groups"]').check({force: true});
        cy.get('input[type="checkbox"][id="not_observed"]').uncheck({force: true});
        cy.get('button.btn.btn-primary.mt-2.w-100').contains('Apply filters').click();
        cy.get('button.btn.btn-danger.mt-2.w-100').contains('Unobserve').click();
        
        //8 Observed all student in all groups with all levels
        cy.get('button.btn.btn-primary.mt-2.w-100').contains('Observe').click();
        
        //cy.get('button.btn.btn-danger.mt-2.w-100').contains('Unobserve').click();

        //cy.get('button.btn btn-primary[type="button"][class="btn btn-primary"]').click();

        //9   give all student same grade
        cy.get('select[name="grade"][class="form-control mt-2 w-100 pr-0"][ onchange="gradeAllSelected(this)"]').select('3', { force: true });

        //10   Observe all groups except groupB
        cy.get('input[type="checkbox"][class="custom-control-input topic_filter"][id="topic_60"]').check({force: true});
        cy.get('button.btn.btn-primary.mt-2.w-100').contains('Observe').click();


        /*
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

*/

    });