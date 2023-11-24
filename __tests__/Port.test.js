const Port = require("../src/Port.js");
const Ship = require("../src/Ship.js");

describe("Port", () => {
  it("can be instantiated", () => {
    expect(new Port()).toBeInstanceOf(Object);
  });
  it("has a starting port", () => {
    const port = new Port("Dover");
    const ship = new Ship(port);
  });
});
