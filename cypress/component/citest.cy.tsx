import { mount } from "cypress/react";
import TestApp from "../support/component/TestApp";

describe("Data Summary", () => {
  it("Content Detail", () => {
    cy.viewport(1280, 750);
    mount(<TestApp />);
  });
});
