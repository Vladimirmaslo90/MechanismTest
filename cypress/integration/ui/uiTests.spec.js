/// <reference types="cypress" />
import {mainPage} from "../../support/page_objects/mainPage"

describe('Main ui tests', () => {
       
    beforeEach('open web site', () => {
        cy.visit('/');
    });

    it('Check main categories redirection ', () => {
        mainPage.verifyReactions();
        mainPage.verifyEntertainment();
        mainPage.verifySports();
        mainPage.verifyStickers();
        mainPage.verifyArtists();
    })
});




