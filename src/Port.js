class Port {
  constructor(name) {
    this.name = name;
    this.ships = [];
  }
  addShip(ships) {
    this.ships.push(ships);
  }

  removeShip(ship) {
    const index = this.ships.indexOf(ship);
    this.ships.splice(index, 1);
  }
}

module.exports = Port;
