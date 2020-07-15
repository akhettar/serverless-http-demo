const expect = require('chai').expect;

let handler = require('../handler.js')


describe('handler', function handlerTest() {
    
    context('input ok', function () {
      let result = "result";
  
     it('success', function (done) {
        let event = {};
        let context = {};
        
        handler.endpoint(event, context, function(ctx, response) {
          console.log(response)
          expect(response.statusCode).to.eq(200);
          expect(response.body).contains('Hello, the current time is');
          done();
        });
      });
    });
});