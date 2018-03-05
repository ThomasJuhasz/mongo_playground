const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/petdb");

beforeAll(done => {
  mongoose.connection.once("open", () => {
    console.log("connected to mongodb!");
    done();
  });
});
