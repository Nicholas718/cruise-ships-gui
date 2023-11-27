const Itinerary = require("../src/Itinerary.js");
const Port = require("../src/Port.js");
const Ship = require("../src/Ship.js");

describe("Itinerary", () => {
  it("can be instantiated", () => {
    expect(new Itinerary()).toBeInstanceOf(Object);
  });

  it("can set sail", () => {
    const port = new Port("Dover");
    const ship = new Ship(port);

    ship.setSail();

    expect(ship.currentPort).toBeFalsy();
    expect(ship.previousPort).toBe(port);
  });

  it("can have ports", () => {
    const dover = new Port("Dover");
    const calais = new Port("Calais");

    const itinerary = new Itinerary([dover, calais]);

    expect(itinerary.ports).toEqual([dover, calais]);
  });
});
