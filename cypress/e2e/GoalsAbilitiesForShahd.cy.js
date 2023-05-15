describe("Staff", function() {

    context('Test Cases', ()=>{

        beforeEach(() =>{

    cy.viewport(1600, 900)
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

});




it("TestCase1 Edit staff goal abilities", () => {

    cy.get('a[href="#"][onclick="showEditRow(\'AhmadMohsen\')"]').click();
    
    cy.get('select[name="permissions_Staff"][class="textinput textInput form-control"][form="form_staff_AhmadMohsen"]').select('Read');
    cy.get('button[type="submit"][class="btn btn-primary"][form="form_staff_AhmadMohsen"]').click();
});



it("TestCase2 Edit observe abilities", () => {

    cy.get('a[href="#"][onclick="showEditRow(\'AhmadMohsen\')"]').click();
    cy.get('select[name="permissions_Observe"][class="textinput textInput form-control"][form="form_staff_AhmadMohsen"]').select('Read');
    cy.get('button[type="submit"][class="btn btn-primary"][form="form_staff_AhmadMohsen"]').click();
});


    
    
    
it("TestCase3 TestCase Edit Student abilities", () => {

    cy.get('a[href="#"][onclick="showEditRow(\'AhmadMohsen\')"]').click();
    cy.get('select[name="permissions_Student"][class="textinput textInput form-control"][form="form_staff_AhmadMohsen"]').select('Read');
    cy.get('button[type="submit"][class="btn btn-primary"][form="form_staff_AhmadMohsen"]').click();
});

    



it("TestCase4 Edit Goals abilities", () => {

    cy.get('a[href="#"][onclick="showEditRow(\'AhmadMohsen\')"]').click();
    cy.get('select[name="permissions_Goals"][class="textinput textInput form-control"][form="form_staff_AhmadMohsen"]').select('Read');
    cy.get('button[type="submit"][class="btn btn-primary"][form="form_staff_AhmadMohsen"]').click();
});

    
it("TestCase5 Edit Academic abilities", () => {

    cy.get('a[href="#"][onclick="showEditRow(\'AhmadMohsen\')"]').click();
    cy.get('select[name="permissions_Academic"][class="textinput textInput form-control"][form="form_staff_AhmadMohsen"]').select('Read');
    cy.get('button[type="submit"][class="btn btn-primary"][form="form_staff_AhmadMohsen"]').click();
});



it("TestCase6 Observe all observed student", () => {

    cy.get('a.nav-link.text-light[href="/staff/25/goals/"]').click();
    cy.get('input[type="checkbox"][name="all_goals"][id="all_goals"]').check({force: true});
    cy.get('input[type="checkbox"][name="goal_filter"][id="goal_1136"]').check({force: true});
    cy.get('input[type="checkbox"][id="topic_61"]').check({force: true});
    cy.get('input[type="checkbox"][name="all_groups"][id="all_groups"]').check({force: true});
    cy.get('input[type="checkbox"][id="not_observed"]').uncheck({force: true});
    cy.get('button.btn.btn-primary.mt-2.w-100').contains('Apply filters').click();
    cy.get('button.btn.btn-primary.mt-2.w-100').contains('Observe').click();
});




it("TestCase7 UnObserved all student", () => {

    //Back to the page Goal
    cy.get('a.nav-link.text-light[href="/staff/25/goals/"]').click();

    cy.get('input[type="checkbox"][name="all_goals"][id="all_goals"]').check({force: true});
    cy.get('input[type="checkbox"][name="goal_filter"][id="goal_1136"]').check({force: true});
    cy.get('input[type="checkbox"][id="topic_61"]').check({force: true});
    cy.get('input[type="checkbox"][name="all_groups"][id="all_groups"]').check({force: true});
    cy.get('input[type="checkbox"][id="not_observed"]').uncheck({force: true});
    cy.get('button.btn.btn-primary.mt-2.w-100').contains('Apply filters').click();
    cy.get('button.btn.btn-danger.mt-2.w-100').contains('Unobserve').click();
});



it("TestCase8 Observed all student in all groups with all levels", () => {

    cy.get('a.nav-link.text-light[href="/staff/25/goals/"]').click();
    cy.get('input[type="checkbox"][name="all_goals"][id="all_goals"]').check({force: true});
    cy.get('input[type="checkbox"][name="goal_filter"][id="goal_1136"]').check({force: true});
    cy.get('input[type="checkbox"][id="topic_61"]').check({force: true});
    cy.get('input[type="checkbox"][name="all_groups"][id="all_groups"]').check({force: true});
    cy.get('input[type="checkbox"][id="not_observed"]').uncheck({force: true});
    cy.get('button.btn.btn-primary.mt-2.w-100').contains('Apply filters').click();
    cy.get('button.btn.btn-primary.mt-2.w-100').contains('Observe').click();
});
    

it("TestCase9 give all student same grade", () => {

    cy.get('a.nav-link.text-light[href="/staff/25/goals/"]').click();
    cy.get('input[type="checkbox"][name="all_goals"][id="all_goals"]').check({force: true});
    cy.get('input[type="checkbox"][name="goal_filter"][id="goal_1136"]').check({force: true});
    cy.get('input[type="checkbox"][id="topic_61"]').check({force: true});
    cy.get('input[type="checkbox"][name="all_groups"][id="all_groups"]').check({force: true});
    cy.get('input[type="checkbox"][id="not_observed"]').uncheck({force: true});
    cy.get('button.btn.btn-primary.mt-2.w-100').contains('Apply filters').click();
    cy.get('select[name="grade"][class="form-control mt-2 w-100 pr-0"][ onchange="gradeAllSelected(this)"]')
    .select('9', { force: true });
});

it("TestCase10 Observe all goals in  groupB", () => {

    cy.get('a.nav-link.text-light[href="/staff/25/goals/"]').click();
    cy.get('input[type="checkbox"][class="custom-control-input topic_filter"][id="topic_60"]').check({force: true});
    cy.get('input[type="checkbox"][name="all_goals"][id="all_goals"]').check({ force: true });
    cy.get('input[type="checkbox"][name="groups_filter"][id="group_GroupB"][group="GroupB"]').check({force: true});
    cy.get('input[type="checkbox"][id="not_observed"]').uncheck({force: true});
    cy.get('button.btn.btn-primary.mt-2.w-100').contains('Apply filters').click();
    cy.get('button.btn.btn-primary.mt-2.w-100').contains('Observe').click();
    });
    

    it("TestCase11 try to observe the goal through select one topic goals", () => {
        cy.get('a.nav-link.text-light[href="/staff/25/goals/"]').click();
        cy.get('input[type="checkbox"][name="all_goals"][id="all_goals"]').uncheck({force: true});//بشيل التحديد عنهم كلهم
        cy.get('input[type="checkbox"][class="custom-control-input filter topic_60"][name="goal_filter"][id="goal_1136"][topic="60"]').check({force: true});//بحدد اول توبيك
        cy.get('input[type="checkbox"][id="not_observed"]').uncheck({force: true});
        cy.get('button.btn.btn-primary.mt-2.w-100').contains('Observe').click();
    
    });


    it("TestCase12 try to observe the goal through select all goals", () => {
        cy.get('a.nav-link.text-light[href="/staff/25/goals/"]').click();
        cy.get('input[type="checkbox"][name="all_goals"][id="all_goals"]').uncheck({force: true});//بشيل التحديد عنهم كلهم
        cy.get('input[type="checkbox"][class="custom-control-input"][name="all_goals"][id="all_goals"]').check({force: true});
        cy.get('input[type="checkbox"][class="custom-control-input topic_filter"][id="topic_60"]').check({force: true});
        cy.get('input[type="checkbox"][id="not_observed"]').uncheck({force: true});
        cy.get('button.btn.btn-primary.mt-2.w-100').contains('Observe').click();
    
    });
    
});
});

       

        //TestCase (14) Try to observe the goal through select a multiple with unselect low level

       
