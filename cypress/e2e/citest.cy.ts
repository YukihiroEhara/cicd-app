describe("Authenticator:", function () {
  beforeEach(function () {
    cy.visit("/");
  });
  describe("Sign In:", () => {
    it("allows a user to signin", () => {
      cy.get(`[placeholder="Email"]`).type("yukihiro.ehara@brandcloud.co.jp");
      cy.get(`[placeholder="Password"]`).type("ot1928d1");
      cy.get(`[data-variation="primary"]`).click();
      cy.wait(3000);
      cy.contains("Hello");
    });
  });
});
