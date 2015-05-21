function boomChest() {
    this.up()
        .box(blocks.trappedChest)
        .down(2)
        .box(blocks.tnt);

}
var Drone = require('drone');
Drone.extend(boomChest);