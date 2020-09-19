// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('clickLink', (label) => {
    cy.get('a').contains(label).click()
  })

Cypress.Commands.add('clickButton', (label) => {
    cy.get('button').contains(label).click()
  })


Cypress.Commands.add('searchApiCall', (type = 'gifs', searchKeyword) => {
  cy.request({
    method: 'GET',
    url: `api.giphy.com/v1/${type}/search`,
    qs: {
        "api_key" : Cypress.env('apiKey'),
        "q": searchKeyword,
        "limit": 20
    }
})
})
  
Cypress.Commands.add('randomApiCall', (type = 'gifs') => {
  cy.request({
    method: 'GET',
    url: `api.giphy.com/v1/${type}/random`,
    qs: {
        "api_key" : Cypress.env('apiKey')
    }
})
})

Cypress.Commands.add('uploadApiCall', (filename) => {
  cy.request({
    method: 'POST',
    url: 'upload.giphy.com/v1/gifs',
    body: {
      "api_key" : Cypress.env('apiKey'),
      "source_image_url" : "https://media2.giphy.com/media/0ywm2kXSmI8prvqT4y/giphy.gif"
    },
    qs: {
      "api_key" : Cypress.env('apiKey')
    },
    form: true

})
})

