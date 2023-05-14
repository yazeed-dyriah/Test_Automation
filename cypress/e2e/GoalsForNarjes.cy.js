describe("GOALs", function () {


    it("Open", () => {
        cy.visit("https://goal-dev.mdx.ac.uk/accounts/login/?next=/");
    })

    it("Login", () => {
        cy.viewport(1600, 525)
        //Login
        cy.visit("https://goal-dev.mdx.ac.uk/accounts/login/?next=/");
        //username
        cy.get("input[name='username']").type("narjes123")
        //password name='password'
        cy.get("input[name='password']").type("test2001")


        // usertype name='login_as'
        cy.get('select[name="login_as"]').select('staff');
        cy.get('button[type="submit"]').click();
        cy.get('a.nav-link.active.w-100').contains('Open').click();
        cy.get('a.nav-link.text-light[href="/staff/25/goals/"]').click();
        

        // //show all non observed student
        // cy.get('input[type="checkbox"][name="all_goals"][id="all_goals"]').check({ force: true });
        // cy.get('input[type="checkbox"][name="goal_filter"][id="goal_1136"]').check({ force: true });
        // cy.get('input[type="checkbox"][class="custom-control-input topic_filter"][id="topic_60"]').check({ force: true });
        // cy.get('input[type="checkbox"][class="custom-control-input topic_filter"][id="topic_61"]').check({ force: true });
        // cy.get('input[type="checkbox"][name="all_groups"][id="all_groups"]').check({ force: true });
        // cy.get('button.btn.btn-danger.mt-2.w-100').click();
        // cy.get('input[type="checkbox"][id="not_observed"]').uncheck({ force: true });
        // cy.get('button').contains('Apply filters').click();
        // cy.get('button.btn.btn-danger.mt-2.w-100').click();


        // //give student a grade
        // cy.get('input[type="checkbox"][name="all_goals"][id="all_goals"]').check({ force: true });
        // cy.get('input[type="checkbox"][name="goal_filter"][id="goal_1136"]').check({ force: true });
        // cy.get('input[type="checkbox"][id="topic_60"]').check({ force: true });
        // cy.get('input[type="checkbox"][name="all_groups"][id="all_groups"]').check({ force: true });
        // cy.get('input[type="checkbox"][id="not_observed"]').uncheck({ force: true });
        // cy.get('button').contains('Apply filters').click();
        // cy.get('select[name="grade"][class="textinput textInput form-control"][ onchange="gradeMe(63844, this.value)"]').select('6', { force: true });

        // //TestCase observe all filter exept low level 
        // cy.get('input[type="checkbox"][name="all_goals"][id="all_goals"]').check({ force: true });
        // cy.get('input[type="checkbox"][name="goal_filter"][id="goal_1136"]').check({ force: true });
        // cy.get('input[type="checkbox"][id="topic_61"]').check({ force: true });
        // cy.get('input[type="checkbox"][name="goal_filter"][topic="60"][id="goal_1170"]').check({ force: true });
        // cy.get('input[type="checkbox"][name="goal_filter"][topic="60"][id="goal_1173"]').check({ force: true });
        // cy.get('input[type="checkbox"][name="all_groups"][id="all_groups"]').check({ force: true });
        // cy.get('input[type="checkbox"][id="not_observed"]').uncheck({ force: true });
        // cy.get('input[type="checkbox"][name="level_filter"][class="custom-control-input filter"][id="level_Low"]').uncheck({ force: true });
        // cy.get('button').contains('Apply filters').click();
        // cy.get('button.btn.btn-primary.mt-2.w-100').contains('Observe').click();

        //Show all GOALs that belong to GroupB
        // cy.get('input[type="checkbox"][name="all_goals"][id="all_goals"]').check({ force: true });
        // cy.get('input[type="checkbox"][name="goal_filter"][id="goal_1136"]').check({force: true});
        // cy.get('input[type="checkbox"][class="custom-control-input topic_filter"][id="topic_60"]').check({ force: true });
        // cy.get('input[type="checkbox"][class="custom-control-input topic_filter"][id="topic_61"]').check({ force: true });
        // cy.get('input[type="checkbox"][id="not_observed"]').uncheck({ force: true });
        // cy.get('input[type="checkbox"][class="custom-control-input"][name="groups_filter"][id="group_GroupB"][group="GroupB"]').check({ force: true });
        // cy.get('button').contains('Apply filters').click();
        
        //Try to observe the goal through select a multiple levels 
        // cy.get('input[type="checkbox"][name="all_goals"][id="all_goals"]').check({ force: true });
        // cy.get('input[type="checkbox"][name="goal_filter"][id="goal_1136"]').check({ force: true });
        // cy.get('input[type="checkbox"][class="custom-control-input topic_filter"][id="topic_61"]').check({ force: true });
        // cy.get('input[type="checkbox"][name="all_groups"][id="all_groups"]').check({ force: true });
        // cy.get('button.btn.btn-danger.mt-2.w-100').click();
        // cy.get('input[type="checkbox"][id="not_observed"]').uncheck({ force: true });
        // cy.get('button.btn.btn-primary.mt-2.w-100').contains('Observe').click()

        //Try to observe all goals that are not observed
        cy.get('input[type="checkbox"][name="all_goals"][id="all_goals"]').check({ force: true });
        cy.get('input[type="checkbox"][name="goal_filter"][id="goal_1136"]').check({ force: true });
        cy.get('input[type="checkbox"][class="custom-control-input topic_filter"][id="topic_60"]').check({ force: true });
        cy.get('input[type="checkbox"][class="custom-control-input topic_filter"][id="topic_61"]').check({ force: true });
        cy.get('input[type="checkbox"][name="all_groups"][id="all_groups"]').check({ force: true });
        cy.get('input[type="checkbox"][id="not_observed"]').uncheck({ force: true });
        cy.get('button').contains('Apply filters').click();
        cy.get('button.btn.btn-primary.mt-2.w-100').contains('Observe').click()

    })
});