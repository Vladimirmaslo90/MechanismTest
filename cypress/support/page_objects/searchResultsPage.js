function searchForElement(searchKeyword){
    cy.get('input[class="Input-sc-w75cdz fHIYrP"]').type(searchKeyword).type('{enter}');
}

export class SearchResultsPage{
    validSearchAndCheckResults(searchKeyword) {
         searchForElement(searchKeyword);
        cy.get('span[class="NumberDisplay-sc-3pgyh3 jlezdB"]').invoke('attr', 'data-gif-count').then(parseFloat).should('be.gt', 0)
    }

    invalidSearch(searchKeyword){
        searchForElement(searchKeyword);
        cy.get('div._3Pso07QCmjZWmt4UMB0H1k span').should(($el) => {
            const spanText = $el.text();
            expect(spanText).to.be.equal(`No GIFs found for ${searchKeyword}Try searching for Stickers instead?`)
            })
    }
}

export const searchResultsPage = new SearchResultsPage()