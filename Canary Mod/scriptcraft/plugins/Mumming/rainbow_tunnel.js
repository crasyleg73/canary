//'use strict';//
/*global require*/
var Drone = require('drone');
//blocks = require('blocks');//




function rainbowSegment(radius, blockType, distance) {

    //    if (typeof sideLength == 'undefined') {
    //        sideLength = 5; //default
    //    }
    //    if (typeof blockType == 'undefined') {
    //        blockType = blocks.tnt; //default
    //    }
    //    this.chkpt('checky')
    var theDrone = new Drone(self);
    theDrone.up(radius + 1)
        .fwd(distance)
        .chkpt('rbw');

    var angle = 0;
    while (angle < 2 * Math.PI) {
        var x = radius * Math.cos(angle);
        var y = radius * Math.sin(angle);
        theDrone.right(x)
            .up(y)
            .box(blockType)
            .move('rbw');
        angle += Math.PI / 4 / radius;
    }

    //        .box(blockType, 1, sideLength)
    //        .up(sideLength)
    //        .box(blockType, sideLength, 1)
    //        .right(sideLength)
    //        .down(sideLength)
    //        .box(blockType, 1, sideLength + 1)
    //        .left(sideLength)
    //        .box(blockType, sideLength);
    //        .move('checky');



    return this;
}


function rainbowTunnel(tunnelWidth, tunnelLength) {
    //    this.chkpt('start');
    var segmentDistance = 0;
    for (var i = 0; i < tunnelLength; i++) {
        for (var colorCounter = 0; colorCounter < blocks.rainbow.length; ++colorCounter) {
            rainbowSegment(tunnelWidth, blocks.rainbow[colorCounter], segmentDistance++);
        }

    }
}

Drone.extend(rainbowSegment);
Drone.extend(rainbowTunnel);