var request = require("request");

describe("calc", () => {
  it("should be addition of 3 and 3", () => {
    expect(3 + 3).toBe(6);
  });
});

describe("get messages", () => {
  it("should return 200 ok", (done) => {
    request.get("http://localhost:3000/messages", (err, res) => {
      expect(res.statusCode).toEqual(200);
      done();
    });
  });
  it("should return a string, thats not empty", (done) => {
    request.get("http://localhost:3000/messages", (err, res) => {
      // string size in the entire body
      expect(res.body.length).toBeGreaterThan(0);
      done();
    });
  });
  it("should return a list, thats not empty", (done) => {
    request.get("http://localhost:3000/messages", (err, res) => {
      // size of json object in the entire body
      expect(JSON.parse(res.body).length).toBeGreaterThan(40);
      done();
    });
  });
});

describe("get messages", () => {
  // get messages irrespective of name / check if route with name given works
  it("should return 200 ok", (done) => {
    request.get("http://localhost:3000/messages/saquib", (err, res) => {
      expect(res.statusCode).toEqual(200);
      done();
    });
  });
  //  check if there are messages from an existing user
  it("name should be saquib", (done) => {
    request.get("http://localhost:3000/messages/saquib", (err, res) => {
      expect(JSON.parse(res.body)[0].name).toEqual("saquib");
      done();
    });
  });
});
