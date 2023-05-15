describe("GOALs", function () {

    context('Test Cases', ()=>{
        beforeEach(() =>{
    cy.viewport(1600, 900);
    //Login

    cy.visit('https://goal-dev.mdx.ac.uk/accounts/login/?next=/')
    .then(() => {
        cy.get('a.navbar-brand.text-light.p-0').should('exist');
    });
    
    cy.get('input[type="text"][name="username"][id="id_username"]').should('be.visible');
    cy.get("input[name='username']").type("narjes123");

// Password name='password'
    cy.get('input[type="password"][name="password"][id="id_password"]').should('be.visible');
    cy.get("input[name='password']").type("test2001");

// Usertype name='login_as'
    cy.get('select[name="login_as"]').should('be.visible').select('staff').should('have.value', 'staff');
    cy.get('select[name="login_as"]').select('staff');

// Login button
    cy.get('button[type="submit"].btn.btn-primary.w-100').should('exist');
    cy.get('button[type="submit"]').click();

    cy.get('a.nav-link.active.w-100').should('be.visible');
    cy.get('a.nav-link.active.w-100[href="/staff/25"]').click();

    cy.contains('a.nav-link.text-light', 'GOALs').click();

});

    it("TestCase1 show all non observed student", () => {

        cy.get('input[type="checkbox"][name="all_goals"][id="all_goals"]').check({ force: true });
        cy.get('input[type="checkbox"][name="goal_filter"][id="goal_1136"]').check({ force: true });
        cy.get('input[type="checkbox"][class="custom-control-input topic_filter"][id="topic_60"]').check({ force: true });
        cy.get('input[type="checkbox"][class="custom-control-input topic_filter"][id="topic_61"]').check({ force: true });
        cy.get('input[type="checkbox"][name="all_groups"][id="all_groups"]').check({ force: true });
        cy.get('button.btn.btn-danger.mt-2.w-100').click();
        cy.get('input[type="checkbox"][id="not_observed"]').uncheck({ force: true });
        cy.get('button').contains('Apply filters').click();
        cy.get('button.btn.btn-danger.mt-2.w-100').click();
});



    it("TestCase2 give student a grade", () => {

        cy.get('input[type="checkbox"][name="all_goals"][id="all_goals"]').check({ force: true });
        cy.get('input[type="checkbox"][name="goal_filter"][id="goal_1136"]').check({ force: true });
        cy.get('input[type="checkbox"][id="topic_60"]').check({ force: true });
        cy.get('input[type="checkbox"][name="all_groups"][id="all_groups"]').check({ force: true });
        cy.get('input[type="checkbox"][id="not_observed"]').uncheck({ force: true });
        cy.get('button').contains('Apply filters').click();
        cy.get('select[name="grade"][onchange="gradeMe(65959, this.value)"]').select('6')
        .select('6', { force: true });
    });




    it("TestCase3 observe all filter exept low level ", () => {

        cy.get('input[type="checkbox"][name="all_goals"][id="all_goals"]').check({ force: true });
        cy.get('input[type="checkbox"][name="goal_filter"][id="goal_1136"]').check({ force: true });
        cy.get('input[type="checkbox"][id="topic_61"]').check({ force: true });
        cy.get('input[type="checkbox"][name="goal_filter"][topic="60"][id="goal_1170"]').check({ force: true });
        cy.get('input[type="checkbox"][name="goal_filter"][topic="60"][id="goal_1173"]').check({ force: true });
        cy.get('input[type="checkbox"][name="all_groups"][id="all_groups"]').check({ force: true });
        cy.get('input[type="checkbox"][id="not_observed"]').uncheck({ force: true });
        cy.get('input[type="checkbox"][name="level_filter"][class="custom-control-input filter"][id="level_Low"]').uncheck({ force: true });
        cy.get('button').contains('Apply filters').click();
        cy.get('button.btn.btn-primary.mt-2.w-100').contains('Observe').click();
    });


    it("TestCase4 Observe all GOALs that belong to GroupB", () => {

        cy.get('input[type="checkbox"][name="all_goals"][id="all_goals"]').check({ force: true });
        cy.get('input[type="checkbox"][name="goal_filter"][id="goal_1136"]').check({force: true});
        cy.get('input[type="checkbox"][class="custom-control-input topic_filter"][id="topic_60"]').check({ force: true });
        cy.get('input[type="checkbox"][class="custom-control-input topic_filter"][id="topic_61"]').check({ force: true });
        cy.get('input[type="checkbox"][id="not_observed"]').uncheck({ force: true });
        cy.get('input[type="checkbox"][class="custom-control-input"][name="groups_filter"][id="group_GroupB"][group="GroupB"]').check({ force: true });
        cy.get('button').contains('Apply filters').click();
        cy.get('button.btn.btn-primary.mt-2.w-100').contains('Observe').click();
    });

    it("TestCase5 Observe the goal through select a multiple levels ", () => {
        cy.get('input[type="checkbox"][name="all_goals"][id="all_goals"]').check({ force: true });
        cy.get('input[type="checkbox"][name="goal_filter"][id="goal_1136"]').check({ force: true });
        cy.get('input[type="checkbox"][class="custom-control-input topic_filter"][id="topic_60"]').check({ force: true });
        cy.get('input[type="checkbox"][class="custom-control-input topic_filter"][id="topic_61"]').check({ force: true });
        cy.get('input[type="checkbox"][name="all_groups"][id="all_groups"]').check({ force: true });
        cy.get('button.btn.btn-danger.mt-2.w-100').click();
        cy.get('input[type="checkbox"][id="not_observed"]').uncheck({ force: true });
        cy.get('button.btn.btn-primary.mt-2.w-100').contains('Observe').click();
    });

    
      it("TestCase6 Observe all GOALs that are not observed", () => {
        cy.get('input[type="checkbox"][name="all_goals"][id="all_goals"]').check({ force: true });
        cy.get('input[type="checkbox"][name="goal_filter"][id="goal_1136"]').check({ force: true });
        cy.get('input[type="checkbox"][class="custom-control-input topic_filter"][id="topic_60"]').check({ force: true });
        cy.get('input[type="checkbox"][class="custom-control-input topic_filter"][id="topic_61"]').check({ force: true });
        cy.get('input[type="checkbox"][name="all_groups"][id="all_groups"]').check({ force: true });
        cy.get('input[type="checkbox"][id="not_observed"]').uncheck({ force: true });
        cy.get('button').contains('Apply filters').click();
        cy.get('button.btn.btn-primary.mt-2.w-100').contains('Observe').click()
      });
        

    it("TestCase7 Observe the goal through select a multiple topics ", () => {
        cy.get('input[type="checkbox"][name="all_goals"][id="all_goals"]').check({ force: true });
        cy.get('input[type="checkbox"][name="goal_filter"][id="goal_1136"]').check({ force: true });
        cy.get('input[type="checkbox"][class="custom-control-input topic_filter"][id="topic_61"]').check({ force: true });
        cy.get('input[type="checkbox"][name="all_groups"][id="all_groups"]').check({ force: true });
        cy.get('button').contains('Apply filters').click();
        cy.get('button.btn.btn-primary.mt-2.w-100').contains('Observe').click();
    });

 
    it("TestCase8 Observe the goal through select a multiple levels ", () => {
        //cy.get('input[type="checkbox"][name="all_goals"][id="all_goals"]').check({ force: true });
        cy.get('input[type="checkbox"][name="goal_filter"][id="goal_1136"]').check({ force: true });
        cy.get('input[type="checkbox"][class="custom-control-input topic_filter"][id="topic_60"]').check({ force: true });
        cy.get('input[type="checkbox"][class="custom-control-input topic_filter"][id="topic_61"]').check({ force: true });
        cy.get('input[type="checkbox"][name="all_groups"][id="all_groups"]').check({ force: true });
        cy.get('button').contains('Apply filters').click();
        cy.get('button.btn.btn-primary.mt-2.w-100').contains('Observe').click();
    });  
     

    it("TestCase9 Observe all goals that are not observed", () => {
        cy.get('input[type="checkbox"][name="all_goals"][id="all_goals"]').check({ force: true });
        cy.get('input[type="checkbox"][name="goal_filter"][id="goal_1136"]').check({ force: true });
        cy.get('input[type="checkbox"][class="custom-control-input topic_filter"][id="topic_60"]').check({ force: true });
        cy.get('input[type="checkbox"][class="custom-control-input topic_filter"][id="topic_61"]').check({ force: true });
        cy.get('input[type="checkbox"][name="all_groups"][id="all_groups"]').check({ force: true });
        cy.get('button.btn.btn-danger.mt-2.w-100').click();
        cy.get('input[type="checkbox"][id="not_observed"]').uncheck({ force: true });
        cy.get('button').contains('Apply filters').click();
        cy.get('button.btn.btn-danger.mt-2.w-100').click();
        cy.get('button.btn.btn-primary.mt-2.w-100').contains('Observe').click();
    });
    

    //Show all Goals have a low level from GroupB
    it("TestCase10 Show all Goals have a low level from GroupB", () => {
        cy.get('input[type="checkbox"][name="goal_filter"][id="goal_1136"]').check({ force: true });
        cy.get('input[type="checkbox"][name="all_goals"][id="all_goals"]').check({ force: true });
        cy.get('input[type="checkbox"][name="goal_filter"][id="goal_1136"]').check({ force: true });
        cy.get('input[type="checkbox"][class="custom-control-input"][name="all_levels"][id="all_levels"]').uncheck({ force: true });
        cy.get('input[type="checkbox"][class="custom-control-input topic_filter"][id="topic_61"]').check({ force: true });
        cy.get('input[type="checkbox"][name="goal_filter"][id="goal_1136"]').check({ force: true });
        cy.get('input[type="checkbox"][id="topic_61"]').check({ force: true });
        cy.get('input[type="checkbox"][id="not_observed"]').uncheck({ force: true });
        cy.get('input[type="checkbox"][name="all_goals"][id="all_goals"]').check({ force: true });
        cy.get('input[type="checkbox"][class="custom-control-input"][name="groups_filter"][id="group_GroupB"][group="GroupB"]').check({ force: true });
        cy.get('input[type="checkbox"][class="custom-control-input filter"][name="level_filter"][id="level_Low"]').check({ force: true });
        cy.get('button').contains('Apply filters').click();
    });
        




});
});