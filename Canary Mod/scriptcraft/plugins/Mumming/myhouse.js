function myhouse() {
    //checkpoint the starting location
    this.chkpt('myhouse');

    //build walls
    var blocksPerSide = 5;
    this.up(1);
    for (var heightCtr = 0; heightCtr < 30; heightCtr++) {
        for (var wallCounter = 0; wallCounter < 4; wallCounter++) {
            for (var blockCounter = 1; blockCounter < blocksPerSide; ++blockCounter) {
                this.box(blocks.emerald).fwd(1);
            }
            this.turn(1);
        }
        this.up(1);
    }

    //build roof
    this.box(blocks.glass, blocksPerSide, 1, blocksPerSide);

    //create an entry
    this.move('myhouse').right(1).door();

    //return to the starting checkpoint
    this.move('myhouse');
}

var Drone = require('drone');
Drone.extend(myhouse);