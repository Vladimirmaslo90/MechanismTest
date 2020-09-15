let currentMainCategories = ['Reaction GIFs', 'Entertainment GIFs', 'Sports GIFs', 'Stickers', 'Artists']

function verifyCategory(categoryLinkName){
    cy.clickLink(categoryLinkName)
    cy.get('h1[class="es0rLWHJz0eNfjTr57XCK uJdphkbFHp9j5ivdfFwvN"]').should(($el) => {
    const categoryName = $el.text();
    expect(currentMainCategories).to.include(categoryName);
    })
}

export class MainPage{
    verifyReactions() {
        verifyCategory('Reactions');
        cy.url().should('include', '/reactions')
    }

     verifyEntertainment() {
        verifyCategory('Entertainment');
        cy.url().should('include', '/entertainment')
     }

     verifySports() {
        verifyCategory('Sports');
        cy.url().should('include', '/sports')
     }

     verifyStickers() {
        verifyCategory('Stickers');
        cy.url().should('include', '/stickers')
     }

     verifyArtists() {
        cy.clickLink('Artists')
        cy.url().should('include', '/artists')

     }
}

export const mainPage = new MainPage()