const Port = require("../src/Port.js");
const Ship = require("../src/Ship.js");
const Itinerary = require("../src/Itinerary.js");

describe("Port", () => {
  it("can be instantiated", () => {
    expect(new Port()).toBeInstanceOf(Object);
  });
  it("has a starting port", () => {
    const port = new Port("Dover");
    const ship = new Ship(port);
  });

  it("can have ports", () => {
    const dover = new Port("Dover");
    const calais = new Port("Calais");

    const itinerary = new Itinerary([dover, calais]);

    expect(itinerary.port).toEqual([dover, calais]);
  });

  it("can add a ship", () => {
    const port = new Port("Dover");
    const ship = {};

    port.addShip(ship);

    expect(port.ships).toContain(ship);
  });

  it("can remove a ship", () => {
    const port = new Port("Dover");
    const titanic = {};
    const queenMary = {};

    port.addShip(titanic);
    port.addShip(queenMary);
    port.removeShip(queenMary);

    expect(port.ships).toEqual([titanic]);
  });
});
