const mongoose = require("mongoose");
const assert = require("assert");
const Dog = require("../src/dog");

describe("Dog collection", () => {
  beforeEach(async done => {
    try {
      await mongoose.connection.db.dropCollection("dogs");
    } catch (error) {
      console.log("Didn't drop dogs collection, it was newly created.");
    } finally {
      done();
    }
  });

  it("should create a dog", async done => {
    const dog = new Dog({ name: "BlackOne" });
    await dog.save();
    expect(dog.isNew).toBe(false);
    done();
  });
});
