class Ship {
  constructor(itinerary) {
    this.itinerary = itinerary;
    this.currentPort = itinerary.ports[0];
    this.previousPort = null;
    this.currentPort.addShip(this);
  }
  setSail() {
    const itinerary = this.itinerary;
    const currentPortIndex = itinerary.ports.indexOf(this.currentPort);
    if (currentPortIndex === this.itinerary.ports.length - 1) {
      throw new Error("End of itinerary reached");
    }
    this.currentPort.removeShip(this);
    this.previousPort = this.currentPort;
    this.currentPort = null;
  }
  dock() {
    const newIndex = this.itinerary.ports.indexOf(this.previousPort) + 1;
    this.currentPort = this.itinerary.ports[newIndex];
    this.currentPort.addShip(this);
  }
}
module.exports = Ship;
