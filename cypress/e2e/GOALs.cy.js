describe("GOALs", function()
{


    it("Open",()=>
    {
        cy.visit("https://goal-dev.mdx.ac.uk/accounts/login/?next=/");   
    })

    it("Login",()=>
    {
        cy.visit("https://goal-dev.mdx.ac.uk/accounts/login/?next=/");
        cy.get('#id_username').type("yazeed").should("have.value","yazeed");
        cy.get('#id_password').type("test12345");
        cy.get('.btn.btn.btn-primary.w-100').click();
    })
});