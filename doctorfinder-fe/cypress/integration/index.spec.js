/// <reference types="Cypress" />

describe("Test search doctor", () => {
    beforeEach(() => {
        cy.server();
        cy.route({
            url: `{API}/doctors`,
            method: "POST"
        }).as("getDoctors");

        cy.visit("/");
    });

    it("Should show correctly", () => {
        cy.get("[data-cy=logo]").should("contain", "DFINDER");
        cy.get("[data-cy=navbar-doctor-link]").should("contain", "Doctor");
        cy.get("[data-cy=navbar-about-link]").should("contain", "About");
        cy.get("[data-cy=navbar-contactus-link]").should(
            "contain",
            "Contact US"
        );

        cy.get("[data-cy=doctor-patient-img]").should("be.visible");
        cy.get("[data-cy=big-title]").should("contain", "Find The Best Doctor");
        cy.get("[data-cy=small-title]").should(
            "contain",
            "Find the doctor that is right fit for you"
        );
        cy.get("[data-cy=specialty-input]").should("be.visible");
        cy.get("[data-cy=city-input]").should("be.visible");
        cy.get("[data-cy=search-button]").should("be.be.visible");

        cy.get("[data-cy=difference-big-title]").should(
            "contain",
            "What makes us different"
        );
        cy.get("[data-cy=difference-img]").should("have.length", 3);
        cy.get("[data-cy=difference-small-title]").should("have.length", 3);
        cy.get("[data-cy=difference-text]").should("have.length", 3);

        cy.get("[data-cy=statistic-img]").should("be.visible");
        cy.get("[data-cy=doctor-number]").should("contain", 123);
        cy.get("[data-cy=patient-number]").should("contain", 123);
        cy.get("[data-cy=appointment-number]").should("contain", 123);
        cy.get("[data-cy=doctor-label]").should("contain", "Doctors");
        cy.get("[data-cy=patient-label]").should("contain", "Patient");
        cy.get("[data-cy=appointment-label]").should(
            "contain",
            "Appointment Schedule"
        );

        cy.get("[data-cy=avatar-img]").should("have.length", 3);
        cy.get("[data-cy=customer-name]").should("have.length", 3);
        cy.get("[data-cy=customer-comment]").should("have.length", 3);

        cy.get("[data-cy=footter-title]").should("contain", "DFINDER");
    });

    it("Should get doctors", () => {
        cy.get("[data-cy=specialty-input]").type("Trần Văn Trà");
        cy.get("[data-cy=search-button]").click();

        cy.wait("@getDoctors").then(() => {
            cy.get("[data-cy=doctor-name]").should("be.visible");
        });
    });
});
