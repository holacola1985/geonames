var supertest = require("supertest");

// This agent refers to PORT where program is running.
// (Local Geonames Docker with port 3000 forwarded to 80)

var server = supertest.agent("http://localhost:80");

// UNIT test begin

describe("Geonames Docker container test", function() {

  // #1 should return home page

  it("should return home page", function(done) {

    // calling home page api
    server
    .get("/")
    .expect("Content-type", /html/)
    .expect(200) // THis is HTTP response
    .end(function(err, res){
      // HTTP status should be 200
      res.status.should.equal(200);
      // // Error key should be false.
      // res.body.error.should.equal(false);
      done();
    });
  });
});