/// <reference types="cypress" />
import {mainPage} from "../../support/page_objects/mainPage"
import {loginPage} from "../../support/page_objects/loginPage"
import {searchResultsPage} from "../../support/page_objects/searchResultsPage"
import 'cypress-file-upload'

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

    it('Upload - URL', () => {
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

    it('Upload - Browse Your Files - Single file', () => {
        loginPage.login();
        cy.clickLink('Upload');
        cy.get('div.QRF3vZyoeZvDoXh9oMH_s > div:nth-child(1) > input[type=file]').attachFile('hardwork.gif');
        cy.clickButton('Upload to GIPHY');
        cy.wait(6000);
        //cy.wait('@waitForUploadToBeFinished1')
        // TBR: Replace implicit wait to wait specific method to be finished. My first attempt failed
        //cy.server()
        //cy.route('https://upload.giphy.com/v1/upload?api_key=ftOQZt7zJTlrG').as('waitForUploadToBeFinished1')
        //cy.route('POST', '/upload.giphy.com/**').as('waitForUploadToBeFinished')
        //cy.route('GET', '**/detail').as('UploadFinished')
        cy.get('img[alt="Animated GIF"]').should('be.visible');
    });

    it('Upload - Browse Your Files - Multiply files', () => {
        loginPage.login();
        cy.clickLink('Upload');
        cy.get('div.QRF3vZyoeZvDoXh9oMH_s > div:nth-child(1) > input[type=file]')
            .attachFile('hardwork.gif')
            .attachFile('tenor.gif')
        cy.clickButton('Upload to GIPHY');
        cy.get('div[class="message__Text-sc-1dazjsu-0 gSvxYc"]').should('contain', 'Uploading 1 of 2')
        cy.wait(8000);
        cy.get('div[class="message__Text-sc-1dazjsu-0 gSvxYc"]').should('contain', 'Upload Complete  - Open Channel')
        // TBR: both locators above can be moved to separate method
    });

    it('Search - valid searches GIF', () => {
        searchResultsPage.validSearchAndCheckResults('dota')
        searchResultsPage.validSearchAndCheckResults('the lord of the rings')
        searchResultsPage.validSearchAndCheckResults('random')
    });

    it('Search - valid searche Stickers', () => {
        searchResultsPage.validSearchAndCheckResults('random')
        cy.get('div[class="sc-TFwJa bJtgkK"]').click();
        cy.get('span[class="NumberDisplay-sc-3pgyh3 jlezdB"]').invoke('attr', 'data-gif-count').then(parseFloat).should('be.gt', 0)
    });

    it('Search - Invalid search', () => {
        searchResultsPage.invalidSearch('%%%%%%%')
        searchResultsPage.invalidSearch('&&&&&&')
    });
});




