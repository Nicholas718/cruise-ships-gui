/*
function Ship(startingPort) {
  this.ship = startingPort;
} */

class Ship {
  constructor(startingPort) {
    this.startingPort = startingPort;
  }
}

let ship1 = new Ship("Dover");

console.log(ship1);

module.exports = Ship;
