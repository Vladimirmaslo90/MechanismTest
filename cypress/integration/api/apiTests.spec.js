describe('Giphy API tests', () => {
    
    it('Search Endpoint Gifs', () => {
        cy.searchApiCall('gifs', 'redbull').then((response) => {
            expect(response.status).equal(200)
            expect(response.body).to.not.be.null
            //expect(response.body).to.have.property('response_id')
            assert.isAbove(response.body.data.length, 0, 'data of response is empty')
            //let title = response.body.data.title
            //expect(response.body.data).to.have.property('title')
            // expect(response).property('data').to.contain({
            //     title: 'dota 2 wiki GIF',
            //   })
            //expect(response.body.data).to.include.members('title')
        })

    });

    it('Search Endpoint Stickers', () => {
        cy.searchApiCall('stickers', 'world').then((response) => {
            expect(response.status).equal(200)
            expect(response.body).to.not.be.null
            assert.isAbove(response.body.data.length, 0, 'data of response is empty')
            //let title = response.body.data.title
            //expect(response.body.data).to.have.property('title')
            // expect(response).property('data').to.contain({
            //     title: 'dota 2 wiki GIF',
            //   })
            //expect(response.body.data).to.include.members('title')
        })

    });

    it('Random Endpoint Gifs', () => {
        
    });

    it('Random Endpoint Gifs', () => {
       
    });

    it('Upload Endpoint', () => {
        
    });





});