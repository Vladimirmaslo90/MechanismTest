describe('Giphy API tests', () => {
    
    it('Search Endpoint Gifs', () => {
        cy.searchApiCall('gifs', 'redbull').then((response) => {
            expect(response.status).equal(200)
            expect(response.body).to.not.be.null
            assert.isAbove(response.body.data.length, 0, 'data of response is empty')
        })

    });

    it('Search Endpoint Stickers', () => {
        cy.searchApiCall('stickers', 'world').then((response) => {
            expect(response.status).equal(200)
            expect(response.body).to.not.be.null
            assert.isAbove(response.body.data.length, 0, 'data of response is empty')
            expect(response.body.data.length).to.be.equal(20);
        })

    });

    it('Random Endpoint Gifs', () => {
        cy.randomApiCall('gifs').then((response) => {
            expect(response.status).equal(200)
            expect(response.body).to.not.be.null
        })
    });

    it('Random Endpoint Stickers', () => {
        cy.randomApiCall('stickers').then((response) => {
            expect(response.status).equal(200)
            expect(response.body).to.not.be.null
        })
    });

    it('Upload a file', () => {
        cy.uploadApiCall().then((response) => {
            expect(response.status).equal(200)
            expect(response.body.data).to.have.any.keys('id')
            expect(response.body.meta.msg).to.eq('OK')
    }); 
})

    it.skip('Upload a file2', () => {
            let binaryImage = cy.fixture('tenor.gif', 'binary')
            let base64try = cy.fixture('tenor.gif', 'base64')
              cy.request({
              method: 'POST',
              url: 'upload.giphy.com/v1/gifs',
            //   body: {
            //     "api_key" : Cypress.env('apiKey'),
            //     "file": binaryImage
            //   },
              qs: {
                "api_key" : Cypress.env('apiKey'),
                "file": cy.fixture('tenor.gif', 'binary')
              },
              form: false
           })
           //TBR: Getting Cypress error "Maximum Call stack size exceeded"
           //In The Postman I was able to upload a file via 'Form-data' option of the body (just like an attachment of common .gif file)
    });
});