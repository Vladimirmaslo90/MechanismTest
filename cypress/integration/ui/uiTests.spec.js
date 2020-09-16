/// <reference types="cypress" />
import {mainPage} from "../../support/page_objects/mainPage"
import {loginPage} from "../../support/page_objects/loginPage"

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

    it.only('Upload - URL', () => {
        let youtubeUrl = 'https://youtu.be/LLk9_EH6Pfo';
        loginPage.login();
        cy.clickLink('Upload');
        cy.get('input._35BEC7IGiS5fzfdaPB86jq').type(youtubeUrl);
        cy.wait(1000);
        //ToBeRefactored: tried to implement explisit wait to wait until https://imaging.giphy.com/fetch/video/info?url=https%3A%2F%2Fyoutu.be%2FLLk9_EH6Pfo endpoint is finished
        // cy.server()
        // cy.route('/upload/finalize').as('goingToFinalize')
        // cy.wait('@goingToFinalize')

        cy.clickButton('Upload to GIPHY');
        cy.get('a._1PLLFZGjVbI9R02QWRsWj5').invoke('attr', 'href').should('contain', youtubeUrl) // verify href on 'source' area of uploaded video
        cy.get('div.KRS9L9BsuEdhF-ACKiX8x div a').invoke('attr', 'href').should('contain', youtubeUrl) // verify url on main image of the screen
    });

    it('Upload - Browse Your Files', () => {
        
    });
});




